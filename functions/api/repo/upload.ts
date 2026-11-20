import { parseMeta } from '../../../shared/meta'

// Anyone can upload; rows land with approved = 0 and show only once approved on /admin.
export async function onRequestPost(context: any) {
    const bucket = context.env.REPO as R2Bucket
    const db = context.env.DB as D1Database
    const form = await context.request.formData()
    const pdf = form.get('file'), preview = form.get('preview')

    const bad = (m: string) => new Response(m, { status: 400 })
    if (!(pdf instanceof File) || pdf.type !== 'application/pdf') return bad('file must be a PDF')
    if (pdf.size > 50e6) return bad('PDF too large (50 MB max)')
    if (!(preview instanceof File) || !preview.type.startsWith('image/') || preview.size > 2e6) return bad('bad preview image')
    const meta = parseMeta(k => form.get(k))
    if (typeof meta === 'string') return bad(meta)

    const id = crypto.randomUUID()
    const key = `${id}.pdf`, previewKey = `previews/${id}.webp`
    await bucket.put(key, pdf.stream(), { httpMetadata: { contentType: 'application/pdf' } })
    await bucket.put(previewKey, preview.stream(), { httpMetadata: { contentType: preview.type } })
    await db.prepare('INSERT INTO files (key, preview, course, year, name, solutions) VALUES (?, ?, ?, ?, ?, ?)')
        .bind(key, previewKey, meta.course, meta.year, meta.name, meta.solutions).run()

    return new Response('ok, waiting for approval')
}
