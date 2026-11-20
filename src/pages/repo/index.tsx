import { useEffect, useRef, useState } from 'react'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../../components/common'
import { type Entry, sessionLabel, title } from '../../../shared/meta'

const PDFCard = ({ entry }: { entry: Entry }) => {
    return <a href={entry.pdf} target='_blank' rel='noopener'
        className='border rounded overflow-hidden text-decoration-none text-dark bg-white' style={{ width: 220 }}>
        <img src={entry.preview} alt='' loading='lazy'
            className='pdf-preview d-block w-100 border-bottom' style={{ height: 280, objectFit: 'cover', objectPosition: 'top' }} />
        <span className='d-block p-1 small'>
            {title(entry)} {entry.session && `(${sessionLabel(entry.session)})`}
            {entry.solutions && <span className='d-block text-muted mt-1' style={{ fontSize: 12 }}>Has solutions</span>}
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

    useEffect(() => { fetch('/api/repo').then(r => r.json()).then(setFiles) }, [])

    const courses = [...new Set(files.map(f => f.course))].sort()
    const courseFiles = files.filter(f => f.course == course && (oldest <= 2007 || +(f.session ?? '').slice(0, 4) >= oldest))

    return <>
        <SiteHeader active='repo' />
        <Breadcrumbs crumbs={["Past Tests"]} show={false}/>

        <div className='breadcrumbs pt-5'>
            <div className='container my-5 py-5 w-75 border shadow rounded bg-white'>
                <h3 className='text-center'>Past Tests Repository</h3>
                <CourseSearch setCourse={setCourse} course={course} courses={courses} />
                <div className='text-center my-2 small text-muted'>
                    Newer Than... <input className='' type="number" value={oldest} min={2007} max={new Date().getFullYear()} onChange={e => setOldest(+e.target.value)} />
                </div>
                <style>{`@media(max-width:600px){.pdf-preview{display:none}}`}</style>
                <div className='d-flex flex-wrap gap-2 justify-content-center p-3'>
                    {courseFiles.map(f => <PDFCard key={f.id} entry={f} />)}
                </div>
            </div>
        </div>

        <SiteFooter />
    </>
}