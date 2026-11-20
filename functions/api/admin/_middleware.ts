// Defense in depth behind Cloudflare Access: if Access is ever off or misconfigured,
// these routes refuse instead of going public. Fails closed when env vars are unset.
// Env: ACCESS_TEAM (e.g. "muoft.cloudflareaccess.com"), ACCESS_AUD (the Access app's AUD tag).

const b64url = (s: string) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0))
const json = (s: string) => JSON.parse(new TextDecoder().decode(b64url(s)))

export async function verifyAccessJwt(token: string, team: string, aud: string, now = Date.now() / 1000) {
    const [h, p, sig] = token.split('.')
    if (!sig) return null
    const header = json(h), payload = json(p)
    if (header.alg !== 'RS256') return null

    // ponytail: certs fetched per request; cache in a module variable if latency matters
    const { keys } = await (await fetch(`https://${team}/cdn-cgi/access/certs`)).json() as { keys: JsonWebKey[] & { kid: string }[] }
    const jwk = keys.find(k => k.kid === header.kid)
    if (!jwk) return null

    const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify'])
    const ok = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, b64url(sig), new TextEncoder().encode(`${h}.${p}`))
    if (!ok) return null

    const auds = [payload.aud].flat()
    if (payload.iss !== `https://${team}` || !auds.includes(aud) || !(payload.exp > now)) return null
    return payload as { email: string }
}

export async function onRequest(context: any) {
    const { request, env, next, data } = context
    const token = request.headers.get('Cf-Access-Jwt-Assertion')
    if (!env.ACCESS_TEAM || !env.ACCESS_AUD || !token) return new Response('Forbidden', { status: 403 })

    const user = await verifyAccessJwt(token, env.ACCESS_TEAM, env.ACCESS_AUD).catch(() => null)
    if (!user) return new Response('Forbidden', { status: 403 })

    data.email = user.email
    return next()
}
