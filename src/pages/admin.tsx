import { useEffect, useState } from 'react'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../components/common'

type Pending = { key: string, preview: string | null, course: string, year: number | null, name: string, solutions: number, created_at: string }
const api = '/api/admin/submissions'

const Row = ({ p, reload }: { p: Pending, reload: () => void }) => {
    const [m, setM] = useState({ course: p.course, year: p.year ?? '', name: p.name, solutions: !!p.solutions })
    const act = (init: RequestInit, url = api) => fetch(url, init).then(async r => r.ok ? reload() : alert(await r.text()))
    const set = (k: keyof typeof m) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setM({ ...m, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

    return <tr>
        <td><a href={`/api/repo/${p.key}`} target='_blank' rel='noopener'>
            {p.preview ? <img src={`/api/repo/${p.preview}`} width={80} alt='first page' /> : 'open'}
        </a></td>
        <td className='small text-muted'>{new Date(p.created_at + 'Z').toLocaleString()}</td>
        <td><input className='form-control form-control-sm' value={m.course} onChange={set('course')} aria-label='Course' /></td>
        <td><input className='form-control form-control-sm' value={m.year} onChange={set('year')} type='number' aria-label='Year' /></td>
        <td><input className='form-control form-control-sm' value={m.name} onChange={set('name')} aria-label='Name' /></td>
        <td><input type='checkbox' checked={m.solutions} onChange={set('solutions')} aria-label='Has solutions' /></td>
        <td className='text-nowrap'>
            <button className='btn btn-sm btn-success me-1' onClick={() => act({ method: 'POST', body: JSON.stringify({ key: p.key, ...m }) })}>Approve</button>
            <button className='btn btn-sm btn-outline-danger' onClick={() => confirm(`Delete ${p.name}?`) && act({ method: 'DELETE' }, `${api}?key=${encodeURIComponent(p.key)}`)}>Reject</button>
        </td>
    </tr>
}

export default () => {
    const [pending, setPending] = useState<Pending[] | null>(null)
    const [error, setError] = useState('')
    const reload = () => fetch(api).then(async r => r.ok ? setPending(await r.json()) : setError(`${r.status} ${await r.text()}`))
    useEffect(() => { reload() }, [])

    return <>
        <SiteHeader active='admin' />
        <Breadcrumbs crumbs={['Admin']} />
        <div className='container my-5'>
            <h3>Pending repository uploads</h3>
            {error && <p className='text-danger'>{error}</p>}
            {pending?.length === 0 && <p>Nothing pending.</p>}
            {!!pending?.length && <table className='table align-middle'>
                <thead><tr><th>File</th><th>Uploaded</th><th>Course</th><th>Year</th><th>Name</th><th>Sol.</th><th></th></tr></thead>
                <tbody>{pending.map(p => <Row key={p.key} p={p} reload={reload} />)}</tbody>
            </table>}
        </div>
        <SiteFooter />
    </>
}
