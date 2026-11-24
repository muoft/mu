import { useEffect, useState } from 'react'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../components/common'
import { type Entry, splitSession, terms } from '../../shared/meta'

type Pending = Entry & { created_at: string }
type Link = { title: string, url: string, icon: string | null }

const Links = () => {
    const [links, setLinks] = useState<Link[]>([])
    const [msg, setMsg] = useState('')
    useEffect(() => { fetch('/api/links').then(r => r.json()).then(setLinks) }, [])

    const edit = (i: number, k: keyof Link) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setLinks(links.map((l, j) => j == i ? { ...l, [k]: e.target.value } : l))
    const move = (i: number, d: number) => {
        const next = [...links]; [next[i], next[i + d]] = [next[i + d], next[i]]; setLinks(next)
    }
    const save = () => fetch('/api/admin/links', { method: 'PUT', body: JSON.stringify(links) })
        .then(async r => setMsg(r.ok ? 'Saved.' : await r.text()))

    return <>
        <h3 className='mt-5'>Home page links</h3>
        <table className='table align-middle'>
            <thead><tr><th>Title</th><th>URL</th><th>Icon</th><th></th></tr></thead>
            <tbody>{links.map((l, i) => <tr key={i}>
                <td><input className='form-control form-control-sm' value={l.title} onChange={edit(i, 'title')} aria-label='Title' /></td>
                <td><input className='form-control form-control-sm' value={l.url} onChange={edit(i, 'url')} aria-label='URL' /></td>
                <td><select className='form-select form-select-sm' value={l.icon ?? ''} onChange={edit(i, 'icon')} aria-label='Icon' style={{ width: 130 }}>
                    <option value='' />
                    {['instagram', 'discord', 'youtube', 'envelope'].map(ic => <option key={ic} value={ic}>{ic == 'envelope' ? 'email' : ic}</option>)}
                </select></td>
                <td className='text-nowrap'>
                    <button className='btn btn-sm btn-light' disabled={i == 0} onClick={() => move(i, -1)} aria-label='Move up'>↑</button>
                    <button className='btn btn-sm btn-light' disabled={i == links.length - 1} onClick={() => move(i, 1)} aria-label='Move down'>↓</button>
                    <button className='btn btn-sm btn-outline-danger' onClick={() => setLinks(links.filter((_, j) => j != i))} aria-label='Remove'>✕</button>
                </td>
            </tr>)}</tbody>
        </table>
        <button className='btn btn-sm btn-light me-2' onClick={() => setLinks([...links, { title: '', url: '', icon: null }])}>Add link</button>
        <button className='btn btn-sm btn-success' onClick={save}>Save links</button>
        {msg && <span className='ms-2 small'>{msg}</span>}
    </>
}
const api = '/api/admin/submissions'

const Row = ({ p, reload }: { p: Pending, reload: () => void }) => {
    const [m, setM] = useState({ ...p, ...splitSession(p.session), solutions: !!p.solutions })
    const act = (init: RequestInit, url = api) => fetch(url, init).then(async r => r.ok ? reload() : alert(await r.text()))
    const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setM({ ...m, [k]: e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked : e.target.value })

    return <tr>
        <td><a href={p.pdf} target='_blank' rel='noopener'><img src={p.preview} width={80} alt='first page' /></a></td>
        <td className='small text-muted'>{new Date(p.created_at + 'Z').toLocaleString()}</td>
        <td><input className='form-control form-control-sm' value={m.course} onChange={set('course')} aria-label='Course' /></td>
        <td className='d-flex gap-1'>
            <input className='form-control form-control-sm' value={m.year} onChange={set('year')} type='number' aria-label='Year' style={{ width: 80 }} />
            <select className='form-select form-select-sm' value={m.term} onChange={set('term')} aria-label='Term'>
                <option value='' />
                {Object.entries(terms).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
        </td>
        <td><input className='form-control form-control-sm' value={m.type ?? ''} onChange={set('type')} aria-label='Type' /></td>
        <td><input className='form-control form-control-sm' value={m.instructor ?? ''} onChange={set('instructor')} aria-label='Instructor' /></td>
        <td><input type='checkbox' checked={m.solutions} onChange={set('solutions')} aria-label='Has solutions' /></td>
        <td className='text-nowrap'>
            <button className='btn btn-sm btn-success me-1' onClick={() => act({ method: 'POST', body: JSON.stringify(m) })}>Approve</button>
            <button className='btn btn-sm btn-outline-danger' onClick={() => confirm('Delete this upload?') && act({ method: 'DELETE' }, `${api}?id=${p.id}`)}>Reject</button>
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
                <thead><tr><th>File</th><th>Uploaded</th><th>Course</th><th>Session</th><th>Type</th><th>Instructor</th><th>Sol.</th><th></th></tr></thead>
                <tbody>{pending.map(p => <Row key={p.id} p={p} reload={reload} />)}</tbody>
            </table>}
            <Links />
        </div>
        <SiteFooter />
    </>
}
