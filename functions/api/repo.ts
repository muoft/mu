export type Entry = { course: string, year: number | undefined, name: string, tags: string[], file: string }

export async function onRequest(context: any) {
    const bucket = context.env.REPO as R2Bucket
    let { objects } = await bucket.list()

    return Response.json(
        objects
            .filter(x => !x.key.startsWith('.wrangler'))
            .map(({ key }) => ({
                course: key.split('-')[0],
                year: Number(key.split('-')[1]) || undefined,
                name: key.split('-')[2]?.replaceAll('_', ' '),
                tags: key.split('-')[3]?.replace('.pdf', '')?.split('_') || [],
                file: key
            }))
            .sort((a, b) => (b.year || 0) - (a.year || 0))
    )
}