export async function onRequest() {
    const page = await fetch('https://linktr.ee/muoft', { cf: { cacheTtl: 3600, cacheEverything: true } })
    if (!page.ok) return new Response(`linktree ${page.status}`, { status: 502 })

    const json = (await page.text()).match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)
    if (!json) return new Response('linktree page format changed', { status: 502 })
    const { links, socialLinks } = JSON.parse(json[1]).props.pageProps

    return Response.json({
        links: links.filter((l: any) => !new URL(l.url).hostname.endsWith('muoft.ca')).map((l: any) => ({ title: l.title, url: l.url })),
        socials: socialLinks.map((s: any) => ({ type: s.type, url: s.url })),
    }, { headers: { 'Cache-Control': 'public, max-age=300' } })
}
