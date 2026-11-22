export type Meta = { course: string, session: string | null, type: string | null, instructor: string | null, solutions: boolean }
export type Entry = Meta & { id: number, pdf: string, preview: string }

// UofT session codes: 20259 = Fall 2025, 20261 = Winter 2026, 20255 = Summer 2025, 20259-20261 = Fall-Winter 2025-26
export const terms: Record<string, string> = { '9': 'Fall', '1': 'Winter', '5': 'Summer', 'Y': 'Full year' }
export const sessionLabel = (s: string | null) =>
    !s ? '' : s.includes('-') ? `${s.slice(0, 4)}–${s.slice(8, 10)}` : `${terms[s[4]]} ${s.slice(0, 4)}`

export const splitSession = (s: string | null) =>
    !s ? { year: '', term: '' } : { year: s.slice(0, 4), term: s.includes('-') ? 'Y' : s[4] }

export const types = ['Test', 'Practice Test', 'Exam', 'Practice Exam', 'Quiz', 'Other']

export function parseMeta(o: Record<string, unknown>): Meta | string {
    const course = String(o.course ?? '').replace(/\s/g, '').toUpperCase()
    const year = String(o.year ?? '').trim(), term = String(o.term ?? '')
    const session = !year ? null : term == 'Y' ? `${year}9-${+year + 1}1` : `${year}${term}`
    const type = String(o.type ?? '').trim() || null
    const instructor = String(o.instructor ?? '').trim() || null

    if (!course || course.length > 16) return 'course required'
    if (!year != !term) return 'give both year and term, or neither'
    if (year && !(/^\d{4}$/.test(year) && term in terms)) return 'bad year or term'
    if (type && type.length > 32) return 'type too long'
    if (instructor && instructor.length > 100) return 'instructor too long'
    return { course, session, type, instructor, solutions: !!o.solutions }
}
