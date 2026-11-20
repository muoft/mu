import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

GlobalWorkerOptions.workerSrc = workerSrc

// Render page 1 of a PDF to a 440px-wide WebP (cards are 220px, so 2x for retina).
export async function pdfPreview(file: File): Promise<Blob> {
    const task = getDocument({ data: await file.arrayBuffer() })
    const pdf = await task.promise
    const page = await pdf.getPage(1)
    const base = page.getViewport({ scale: 1 })
    const viewport = page.getViewport({ scale: 440 / base.width })
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(viewport.width)
    canvas.height = Math.round(viewport.height)
    await page.render({ canvas, viewport }).promise
    await task.destroy()
    return new Promise((res, rej) => canvas.toBlob(b => b ? res(b) : rej(new Error('preview failed')), 'image/webp', 0.8))
}
