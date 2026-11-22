import { useEffect, useState } from 'react'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../../components/common'
import { type Entry, sessionLabel } from '../../../shared/meta'

const PDFCard = ({ entry }: { entry: Entry }) => {
    return <a href={entry.pdf} target='_blank' rel='noopener'
        className='border rounded overflow-hidden text-decoration-none text-dark bg-white' style={{ width: 220 }}>
        <img src={entry.preview} alt='' loading='lazy'
            className='pdf-preview d-block w-100 border-bottom' style={{ height: 280, objectFit: 'cover', objectPosition: 'top' }} />
        <span className='d-block p-1 small'>
            {entry.type} {entry.session && `(${sessionLabel(entry.session)})`}
            {entry.instructor && <span className='d-block text-muted' style={{ fontSize: 12 }}>{entry.instructor}</span>}
            {entry.solutions && <span className='d-block text-muted mt-1' style={{ fontSize: 12 }}>Has solutions</span>}
        </span>
    </a>
}

export default () => {
    const [files, setFiles] = useState<Entry[]>([])
    const [course, setCourse] = useState('')
    const [type, setType] = useState('')

    useEffect(() => { fetch('/api/repo').then(r => r.json()).then(setFiles) }, [])

    const q = course.replace(/\s/g, '').toUpperCase()
    const shown = !q ? [] : files.filter(f => f.course.startsWith(q)
        && (!type || f.type == type))

    return <>
        <SiteHeader active='repo' />
        <Breadcrumbs crumbs={["Past Tests"]} show={false}/>

        <div className='breadcrumbs pt-5'>
            <div className='container my-5 py-5 w-75 border shadow rounded bg-white position-relative'>
                <a href='/repo/upload' className='position-absolute top-0 end-0 m-3 text-dark'>upload a test</a>
                <h3 className='text-center'>Past Tests Repository</h3>
                <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center my-3 small'>
                    <input className='form-control w-auto' list='courses' placeholder='Course, e.g. MAT137' value={course} onChange={e => setCourse(e.target.value)} aria-label='Course' />
                    <datalist id='courses'>{[...new Set(files.map(f => f.course))].sort().map(c => <option key={c} value={c} />)}</datalist>
                    <select className='form-select w-auto' value={type} onChange={e => setType(e.target.value)} aria-label='Type'>
                        <option value=''>Any type</option>
                        {[...new Set(files.map(f => f.type).filter(Boolean))].sort().map(t => <option key={t} value={t!}>{t}</option>)}
                    </select>
                </div>
                <style>{`@media(max-width:600px){.pdf-preview{display:none}}`}</style>
                <div className='d-flex flex-wrap gap-2 justify-content-center p-3'>
                    {shown.map(f => <PDFCard key={f.id} entry={f} />)}
                </div>
            </div>
        </div>

        <SiteFooter />
    </>
}