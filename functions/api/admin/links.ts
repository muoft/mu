type Link = { title: string, url: string, icon: string | null }

export async function onRequestPut(context: any) {
    const db = context.env.DB as D1Database
    const links = await context.request.json() as Link[]

    for (const l of links) {
        if (!l.title?.trim() || l.title.length > 100) return new Response(`bad title: ${l.title}`, { status: 400 })
        if (!/^(https?:\/\/|\/|mailto:)/.test(l.url ?? '')) return new Response(`bad url: ${l.url}`, { status: 400 })
        if (l.icon && !/^[a-z-]{1,32}$/.test(l.icon)) return new Response(`bad icon: ${l.icon}`, { status: 400 })
    }

    await db.batch([
        db.prepare('DELETE FROM links'),
        ...links.map((l, i) => db.prepare('INSERT INTO links (position, title, url, icon) VALUES (?, ?, ?, ?)')
            .bind(i + 1, l.title.trim(), l.url.trim(), l.icon || null)),
    ])
    return new Response('ok')
}
