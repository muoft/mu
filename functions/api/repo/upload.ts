import { parseMeta } from '../../../shared/meta'

const PUBLIC = 'https://repo.muoft.ca/'

export async function onRequestPost(context: any) {
    const bucket = context.env.REPO as R2Bucket
    const form = await context.request.formData()
    const pdf = form.get('file'), preview = form.get('preview')

    const bad = (m: string) => new Response(m, { status: 400 })
    if (!(pdf instanceof File) || pdf.type !== 'application/pdf') return bad('file must be a PDF')
    if (pdf.size > 50e6) return bad('PDF too large (50 MB max)')
    if (!(preview instanceof File) || !preview.type.startsWith('image/') || preview.size > 2e6) return bad('bad preview image')
    const m = parseMeta(JSON.parse(String(form.get('meta'))))
    if (typeof m === 'string') return bad(m)

    const id = crypto.randomUUID()
    await bucket.put(`${id}.pdf`, pdf.stream(), { httpMetadata: { contentType: 'application/pdf' } })
    await bucket.put(`previews/${id}.webp`, preview.stream(), { httpMetadata: { contentType: preview.type } })
    await (context.env.DB as D1Database).prepare(
        'INSERT INTO files (pdf, preview, course, session, type, number, solutions) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).bind(`${PUBLIC}${id}.pdf`, `${PUBLIC}previews/${id}.webp`, m.course, m.session, m.type, m.number, +m.solutions).run()

    return new Response('Thanks! It will show up once approved.')
}
