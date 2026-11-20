import { parseMeta } from '../../../shared/meta'

// Behind _middleware.ts (Cloudflare Access).
// GET                                       -> pending uploads (approved = 0)
// POST {key, course, year, name, solutions} -> fix metadata and approve
// DELETE ?key=...                           -> reject: delete row and its R2 objects
export async function onRequest(context: any) {
    const { request } = context
    const bucket = context.env.REPO as R2Bucket
    const db = context.env.DB as D1Database

    if (request.method === 'GET') {
        const { results } = await db.prepare(
            'SELECT key, preview, course, year, name, solutions, created_at FROM files WHERE approved = 0 ORDER BY created_at'
        ).all()
        return Response.json(results)
    }

    if (request.method === 'POST') {
        const body = await request.json() as Record<string, unknown>
        const meta = parseMeta(k => body[k])
        if (typeof meta === 'string') return new Response(meta, { status: 400 })
        const { meta: { changes } } = await db.prepare(
            'UPDATE files SET course = ?, year = ?, name = ?, solutions = ?, approved = 1 WHERE key = ? AND approved = 0'
        ).bind(meta.course, meta.year, meta.name, meta.solutions, String(body.key)).run()
        return changes ? new Response('ok') : new Response('Not found', { status: 404 })
    }

    if (request.method === 'DELETE') {
        const key = new URL(request.url).searchParams.get('key')
        const row = await db.prepare('DELETE FROM files WHERE key = ? AND approved = 0 RETURNING key, preview').bind(key).first<{ key: string, preview: string | null }>()
        if (!row) return new Response('Not found', { status: 404 })
        await bucket.delete([row.key, row.preview].filter(Boolean) as string[])
        return new Response('ok')
    }

    return new Response('Method not allowed', { status: 405 })
}
