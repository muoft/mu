export async function onRequest(context: any) {
    const { results } = await (context.env.DB as D1Database).prepare(
        'SELECT id, pdf, preview, course, session, type, number, solutions FROM files WHERE approved ORDER BY course, session DESC, type, number'
    ).all()
    return Response.json(results.map(r => ({ ...r, solutions: !!r.solutions })))
}
