// GET /api/repo        -> approved files (Entry[] from shared/meta.ts)
// GET /api/repo/<key>  -> the R2 object (PDF or preview image); keys may contain '/'
// One catch-all because Pages routes /api/repo to [[path]] even when repo.ts exists.
export async function onRequest(context: any) {
    const key = [context.params.path ?? []].flat().join('/')
    if (!key) {
        const { results } = await (context.env.DB as D1Database).prepare(
            'SELECT key AS file, preview, course, year, name, solutions FROM files WHERE approved = 1 ORDER BY course, year DESC, name'
        ).all()
        return Response.json(results.map(r => ({ ...r, solutions: !!r.solutions })))
    }

    const file = await (context.env.REPO as R2Bucket).get(key)
    if (!file) return new Response("Not found", { status: 404 })

    const headers = new Headers()
    if (file.httpMetadata?.contentType) headers.set('Content-Type', file.httpMetadata.contentType)
    headers.set('Content-Disposition', 'inline')
    headers.set('Cache-Control', 'public, max-age=86400')
    return new Response(file.body, { headers })
}
