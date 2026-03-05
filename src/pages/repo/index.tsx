import { useEffect, useRef, useState } from 'react'
import { SiteFooter, SiteHeader } from '../../components/common'

type Entry = { course: string, year: number | undefined, name: string, tags: string[], file: string }

const PDFList = ({ list }: { list: Entry[] }) => {
    return <div className='bg-black' style={{ padding: '12px 15%', textAlign: 'center', pointerEvents: 'none' }}>
        {list.map(f => <a key={f.file} href={`/api/repo/${f.file}`} className='text-dark inline-block' style={{ width: '33%' }}>{f.name} {f.year ? `(${f.year})` : ''}</a>)}
    </div>
}

const CourseSearch = ({ setCourse, course, courses }) => {
    const [typing, setTyping] = useState('')
    const courseInput = useRef(<p contentEditable onInput={e => setTyping(e.currentTarget.textContent?.toUpperCase() || '')} />)
    const resultsEl = courses.filter(c => c.includes(typing)).map(c => <a key={c.file} onClick={() => { setCourse(c); setTyping('') }}>{c}</a>)

    return <div className='w-25 mx-auto mt-3 position-relative' style={{ minWidth: '220px' }}>
        <div className='border fw-bold p-1 outline-none'> {courseInput.current} </div>
        <div className='list-group position-absolute bg-white w-100'> {typing && course != typing && resultsEl} </div>
    </div>
}

export default () => {
    const [files, setFiles] = useState<Entry[]>([])
    const [course, setCourse] = useState('')

    const courses = [...new Set(files.map(f => f.course))].sort()
    useEffect(() => { fetch('/api/repo').then(r => r.json()).then(setFiles) }, [])

    return <>
        <SiteHeader active='repo' />

        <div className='breadcrumbs pt-5'>
            <div className='container my-5 py-5 w-75 border shadow rounded bg-white'>
                <h3 className='text-center'>Course Repository</h3>
                <CourseSearch setCourse={setCourse} course={course} courses={courses} />
                <PDFList list={files.filter(f => f.course == course)} />
            </div>
        </div>

        <SiteFooter />
    </>
}