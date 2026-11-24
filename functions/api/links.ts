export async function onRequest(context: any) {
    const { results } = await (context.env.DB as D1Database).prepare('SELECT title, url, icon FROM links ORDER BY position').all()
    return Response.json(results)
}
