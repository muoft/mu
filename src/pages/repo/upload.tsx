import { useState } from 'react'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../../components/common'
import { sessionLabel, sessions } from '../../../shared/meta'

GlobalWorkerOptions.workerSrc = workerSrc

const preview = async (file: File) => {
    const page = await (await getDocument({ data: await file.arrayBuffer() }).promise).getPage(1)
    const canvas = Object.assign(document.createElement('canvas'), { width: 400, height: Math.round(400 * Math.SQRT2) })
    await page.render({ canvas, viewport: page.getViewport({ scale: 400 / page.getViewport({ scale: 1 }).width }) }).promise
    return new Promise<Blob>(res => canvas.toBlob(b => res(b!), 'image/webp', 0.8))
}

export default () => {
    const [msg, setMsg] = useState('')

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { file, solutions, ...meta } = Object.fromEntries(new FormData(e.currentTarget))
        setMsg('Uploading...')
        const body = new FormData()
        body.set('file', file)
        body.set('preview', await preview(file as File), 'preview.webp')
        body.set('meta', JSON.stringify({ ...meta, solutions: !!solutions }))
        const r = await fetch('/api/repo/upload', { method: 'POST', body })
        setMsg(await r.text())
        if (r.ok) (e.target as HTMLFormElement).reset()
    }

    return <>
        <SiteHeader active="repo" />
        <Breadcrumbs crumbs={["Past Tests Repository", "Upload"]} />
        <form onSubmit={submit} className='container my-5 d-flex flex-column gap-2' style={{ maxWidth: 420 }}>
            <h3 className='text-center'>Upload a past test</h3>
            <label>PDF <input className='form-control' type='file' name='file' accept='application/pdf' required /></label>
            <label>Course <input className='form-control' name='course' placeholder='MAT137Y1' required /></label>
            <label>Session (optional) <select className='form-select' name='session'>
                <option value='' />
                {sessions().map(s => <option key={s} value={s}>{sessionLabel(s)}</option>)}
            </select></label>
            <label>Type (optional) <input className='form-control' name='type' placeholder='test, practice test, exam, quiz...' /></label>
            <label>Number (optional) <input className='form-control' name='number' type='number' min={1} placeholder='e.g. 2 for Test 2' /></label>
            <label><input type='checkbox' name='solutions' /> Has solutions</label>
            <button className='btn btn-primary' disabled={msg == 'Uploading...'}>Upload</button>
            {msg && <p className='text-center'>{msg}</p>}
        </form>
        <SiteFooter />
    </>
}
