import { useState } from 'react'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { Breadcrumbs, SiteFooter, SiteHeader } from '../../components/common'
import { terms, types } from '../../../shared/meta'

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
        <Breadcrumbs crumbs={["Upload"]} show={false} />
        <div className='breadcrumbs'>
            <form onSubmit={submit} className='container page-card border shadow rounded bg-white p-4 d-flex flex-column gap-2' style={{ maxWidth: 560 }}>
                <h3 className='text-center'>Upload a past test</h3>
                <p>Materials from all campuses and departments are appreciated! We'll scrub your name or any personal details from the PDF before publishing.</p>
                <label>PDF <input className='form-control' type='file' name='file' accept='application/pdf' required /></label>
                <label>Course <input className='form-control' name='course' placeholder='MAT137Y1' required /></label>
                <div className='d-flex gap-2'>
                    <label className='flex-fill'>Year <input className='form-control' name='year' type='number' placeholder='2025' /></label>
                    <label className='flex-fill'>Term <select className='form-select' name='term'>
                        <option value='' />
                        {Object.entries(terms).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select></label>
                </div>
                <label>Type <input className='form-control' name='type' list='types' maxLength={32} /></label>
                <datalist id='types'>{types.map(t => <option key={t} value={t} />)}</datalist>
                <label>Instructor <input className='form-control' name='instructor' /></label>
                <label><input type='checkbox' name='solutions' /> Has solutions</label>
                <button className='btn btn-primary' disabled={msg == 'Uploading...'}>Upload</button>
                {msg && <p className='text-center'>{msg}</p>}
            </form>
        </div>
        <SiteFooter />
    </>
}
