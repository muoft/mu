// What GET /api/repo returns per file.
export type Entry = { file: string, preview: string | null, course: string, year: number | null, name: string, solutions: boolean }

// Validates a file's metadata (course/year/name/solutions); used by upload and admin approve.
export type Meta = { course: string, year: number | null, name: string, solutions: number }

export function parseMeta(get: (k: string) => unknown): Meta | string {
    const course = String(get('course') ?? '').trim().toUpperCase()
    const y = get('year')
    const year = y === null || y === undefined || y === '' ? null : Number(y)
    const name = String(get('name') ?? '').trim()
    const s = get('solutions')
    const solutions = s === true || s === 'on' || s === 1 ? 1 : 0

    if (!/^[A-Z]{3}\d{3}$/.test(course)) return 'course should look like MAT137'
    if (year !== null && !(Number.isInteger(year) && year >= 1990 && year <= 2100)) return 'bad year'
    if (!name || name.length > 100) return 'name required (100 chars max)'
    return { course, year, name, solutions }
}
