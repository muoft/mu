import { useEffect, useRef, useState } from 'react'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../../components/common'

type Entry = { course: string, year: number | undefined, name: string, tags: string[], file: string }

const testwords = ['exam', 'midterm', 'test', 'final', 'quiz']
const isTest = (e: Entry) => testwords.some(w => [e.name, ...e.tags].join(' ').toLowerCase().includes(w))

const formatTags = (t: string[]) => t.map(tt => tt.replace('solutions', 'Has solutions')).join(', ')

const PDFCard = ({ entry }: { entry: Entry }) => {
    return <a href={`/api/repo/${entry.file}`} target='_blank' rel='noopener'
        className='border rounded overflow-hidden text-decoration-none text-dark bg-white' style={{ width: 220 }}>
        <div className='pdf-preview position-relative' style={{ height: 280 }}>
            <iframe src={`/api/repo/${entry.file}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className='w-100 h-100 border-0' style={{ pointerEvents: 'none' }} />
        </div>
        <span className='d-block p-1 small'>
            {entry.name} {entry.year ? `(${entry.year})` : ''}
            {entry.tags.length > 0 && <span className='d-block text-muted mt-1' style={{ fontSize: 12 }}>{formatTags(entry.tags)}</span>}
        </span>
    </a>
}

const CourseSearch = ({ setCourse, course, courses }) => {
    const [typing, setTyping] = useState('')
    const courseInput = useRef(<p contentEditable onInput={e => setTyping(e.currentTarget.textContent?.toUpperCase() || '')} />)
    const filtered = courses.filter(c => c.includes(typing)).slice(0, 10)

    return <div className='w-25 mx-auto mt-3 position-relative' style={{ minWidth: 220 }}>
        <div className='border fw-bold p-1 outline-none'> {courseInput.current} </div>
        <div className='list-group position-absolute bg-white w-100 overflow-auto' style={{ maxHeight: 320, zIndex: 10 }}>
            {typing && course != typing && filtered.map(c =>
                <a key={c} onClick={() => { setCourse(c); setTyping('') }}>{c}</a>
            )}
        </div>
    </div>
}

export default () => {
    const [files, setFiles] = useState<Entry[]>([])
    const [course, setCourse] = useState('')
    const [oldest, setOldest] = useState(2007)
    const [showAll, setShowAll] = useState(false)

    useEffect(() => { fetch('/api/repo').then(r => r.json()).then(setFiles) }, [])

    const courses = [...new Set(files.map(f => f.course))].sort()
    let courseFiles = files.filter(f => f.course == course && (showAll || isTest(f))).filter(f => oldest <= 2007 || f.year >= oldest)

    return <>
        <SiteHeader active='repo' />
        <Breadcrumbs crumbs={["Past Tests"]} show={false}/>

        <div className='breadcrumbs pt-5'>
            <div className='container my-5 py-5 w-75 border shadow rounded bg-white'>
                <h3 className='text-center'>Past Tests Repository</h3>
                <CourseSearch setCourse={setCourse} course={course} courses={courses} />
                <div className='text-center my-2 small text-muted'>
                    Newer Than... <input className='' type="number" value={oldest} min={2007} max={2025} onChange={e => setOldest(+e.target.value)} />
                    <span className="px-2"></span>
                    Tests/Exams Only <input type='checkbox' checked={showAll} onChange={e => setShowAll(e.target.checked)} />
                </div>
                <style>{`@media(max-width:600px){.pdf-preview{display:none}}`}</style>
                <div className='d-flex flex-wrap gap-2 justify-content-center p-3'>
                    {courseFiles.map(f => <PDFCard key={f.file} entry={f} />)}
                </div>
            </div>
        </div>

        <SiteFooter />
    </>
}