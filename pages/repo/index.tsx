import { useEffect, useRef, useState } from "react"
import { SiteFooter, SiteHeader } from '../../components/common'


export default () => {
    const [files, setFiles] = useState<string[]>([])
    useEffect(() => void (async () =>
        setFiles(await (await fetch('/api/repo')).json())
    )(), [])

    const [search, setSearch] = useState('')
    const [course, setCourse] = useState('Search for a course...')

    const onSelect = ev => setSearch((ev.target as HTMLParagraphElement).innerText.toUpperCase())
    const input = useRef(<p contentEditable onSelect={onSelect}></p>)
    const nonInput = <p onClick={() => { setCourse(''); setSearch('') }}>{course}</p>

    let courses = Array.from(new Set(
        files.map(f => f.slice(0, 6)).filter(c => c.includes(search))
    ))
    let results = files.filter(f => f.startsWith(course))

    return <>
        <SiteHeader active="repo" />

        <div className="breadcrumbs pt-5">
            <div className="container my-5 py-5 w-75 border shadow rounded bg-white">
                <h3 className="text-center">Course Repository</h3>

                <div className="w-25 mx-auto mt-3" style={{ minWidth: '220px' }}>
                    <div className="border fw-bold p-1 outline-none">
                        {course && nonInput || input.current}
                    </div>
                    <div className="list-group">
                        {(search && course == '') && courses.map(c => <a key={c} onClick={() => setCourse(c)}> {c} </a>)}
                    </div>
                </div>

                {course ? <p>
                    {results.map(f => <a className="text-decoration-underline text-dark mb-1 w-100" href={`/api/repo/${f}`}>
                        {f.slice(7, -4).replaceAll('-', ' ')}
                    </a>)}
                </p> : null}
            </div>
        </div>

        <SiteFooter />
    </>
}