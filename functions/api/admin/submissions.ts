import { parseMeta } from '../../../shared/meta'

export async function onRequest(context: any) {
    const { request } = context
    const db = context.env.DB as D1Database

    if (request.method === 'GET') {
        const { results } = await db.prepare('SELECT * FROM files WHERE NOT approved ORDER BY created_at').all()
        return Response.json(results)
    }

    if (request.method === 'POST') {
        const body = await request.json() as Record<string, unknown>
        const m = parseMeta(body)
        if (typeof m === 'string') return new Response(m, { status: 400 })
        const { meta } = await db.prepare(
            'UPDATE files SET course = ?, session = ?, type = ?, number = ?, instructor = ?, solutions = ?, approved = TRUE WHERE id = ? AND NOT approved'
        ).bind(m.course, m.session, m.type, m.number, m.instructor, +m.solutions, Number(body.id)).run()
        return meta.changes ? new Response('ok') : new Response('Not found', { status: 404 })
    }

    if (request.method === 'DELETE') {
        const id = Number(new URL(request.url).searchParams.get('id'))
        const row = await db.prepare('DELETE FROM files WHERE id = ? AND NOT approved RETURNING pdf, preview').bind(id).first<{ pdf: string, preview: string }>()
        if (!row) return new Response('Not found', { status: 404 })
        await (context.env.REPO as R2Bucket).delete([row.pdf, row.preview].map(u => new URL(u).pathname.slice(1)))
        return new Response('ok')
    }

    return new Response('Method not allowed', { status: 405 })
}
