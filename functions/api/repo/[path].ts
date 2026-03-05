export async function onRequest(context: any) {
    const bucket = context.env.BUCKET as R2Bucket
    const file = await bucket.get(context.params.path)
    if (!file) return new Response("Not found", { status: 404 })

    const headers = new Headers()
    if (file.httpMetadata?.contentType) headers.set('Content-Type', file.httpMetadata.contentType)
    headers.set('Content-Disposition', 'inline')
    return new Response(file.body, { headers })
}