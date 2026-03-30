export async function onRequest(context: any) {
    const { request, env } = context
    const bucket = env.REPO as R2Bucket
    const filename = new URL(request.url).searchParams.get('filename')

    await bucket.put(`submit/${filename}`, request.body, {
        httpMetadata: { contentType: request.headers.get('content-type') }
    })

    return new Response('ok')
}
