export const types = ['test', 'practice-test', 'exam', 'practice-exam', 'quiz'] as const

export type Meta = { course: string, session: string | null, type: typeof types[number] | null, number: number | null, solutions: boolean }
export type Entry = Meta & { id: number, pdf: string, preview: string }

// UofT session codes: 20259 = Fall 2025, 20261 = Winter 2026, 20255 = Summer 2025, 20259-20261 = Fall-Winter 2025-26
const terms: Record<string, string> = { '9': 'Fall', '1': 'Winter', '5': 'Summer' }
export const sessionLabel = (s: string | null) =>
    !s ? '' : s.includes('-') ? `${s.slice(0, 4)}–${s.slice(8, 10)}` : `${terms[s[4]]} ${s.slice(0, 4)}`

export const sessions = (from = 2005, to = new Date().getFullYear()) =>
    Array.from({ length: to - from + 1 }, (_, i) => to - i).flatMap(y =>
        [`${y}9-${y + 1}1`, `${y}9`, `${y}5`, `${y}1`])

export const title = (m: Meta) =>
    `${(m.type ?? 'test').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}${m.number ? ` ${m.number}` : ''}`

export function parseMeta(get: (k: string) => unknown): Meta | string {
    const course = String(get('course') ?? '').replace(/\s/g, '').toUpperCase()
    const session = String(get('session') ?? '') || null
    const type = (String(get('type') ?? '') || null) as Meta['type']
    const number = get('number') ? Number(get('number')) : null
    const bool = (k: string) => [true, 'on', 'true', 1].includes(get(k) as any)

    if (!course || course.length > 16) return 'course required'
    if (session && !/^\d{5}(-\d{5})?$/.test(session)) return 'bad session'
    if (type && !types.includes(type)) return 'bad type'
    if (number !== null && !(Number.isInteger(number) && number > 0 && number < 20)) return 'bad number'
    return { course, session, type, number, solutions: bool('solutions') }
}
