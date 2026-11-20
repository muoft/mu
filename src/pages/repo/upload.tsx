import { useState } from 'react'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../../components/common'

export default () => {
    const [msg, setMsg] = useState('')
    const [busy, setBusy] = useState(false)

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formEl = e.currentTarget
        const form = new FormData(formEl)
        setBusy(true); setMsg('Uploading...')
        try {
            const { pdfPreview } = await import('../../components/pdfPreview') // pdf.js is ~400 KB, load only here
            form.set('preview', await pdfPreview(form.get('file') as File), 'preview.webp')
            const r = await fetch('/api/repo/upload', { method: 'POST', body: form })
            setMsg(await r.text())
            if (r.ok) formEl.reset()
        } catch (err) {
            setMsg(`Couldn't read that PDF: ${(err as Error).message}`)
        }
        setBusy(false)
    }

    return <>
        <SiteHeader active="repo" />
        <Breadcrumbs crumbs={["Past Tests Repository", "Upload"]} />
        <form onSubmit={submit} className='container my-5 d-flex flex-column gap-2' style={{ maxWidth: 420 }}>
            <h3 className='text-center'>Upload a past test</h3>
            <label>PDF <input className='form-control' type='file' name='file' accept='application/pdf' required /></label>
            <label>Course <input className='form-control' name='course' placeholder='MAT137' pattern='[A-Za-z]{3}\d{3}' required /></label>
            <label>Year <input className='form-control' name='year' type='number' min={1990} max={2100} placeholder='2024' /></label>
            <label>Name <input className='form-control' name='name' placeholder='Midterm 1' maxLength={100} required /></label>
            <label><input type='checkbox' name='solutions' /> Has solutions</label>
            <button className='btn btn-primary' disabled={busy}>Upload</button>
            {msg && <p className='text-center'>{msg}</p>}
        </form>
        <SiteFooter />
    </>
}
