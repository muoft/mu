import { useEffect, useState } from 'react';
import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../components/common';

type Links = { links: { title: string, url: string }[], socials: { type: string, url: string }[] }
const icon = (type: string) => `lni-${type == 'EMAIL_ADDRESS' ? 'envelope' : type.toLowerCase()}`

export default () => {
    const [{ links, socials }, setLinks] = useState<Links>({ links: [], socials: [] })
    useEffect(() => { fetch('/api/links').then(r => r.json()).then(setLinks) }, [])

    return <>
        <SiteHeader active="home" />
        <Breadcrumbs crumbs={["Home"]} show={false} />

        <div className='breadcrumbs'>
            <div className='container border shadow rounded bg-white p-4 d-flex flex-column gap-2 text-center' style={{ maxWidth: 560, width: 'calc(100% - 32px)' }}>
                <p>University of Toronto</p>
                <h3 className='mb-2'>Math Union</h3>
                <a href='/repo' className='btn btn-outline-dark py-3'>Past Tests Repository</a>
                {links.map(l => <a key={l.url} href={l.url} className='btn btn-outline-dark py-3' target='_blank' rel='noopener'>{l.title}</a>)}
                <a href='/about/about-us' className='btn btn-outline-dark py-3'>About Us</a>
                <div className='d-flex justify-content-center gap-4 pt-2 fs-3'>
                    {socials.map(s => <a key={s.url} href={s.url} className='text-dark' aria-label={s.type.toLowerCase()} target='_blank' rel='noopener'><i className={`lni ${icon(s.type)}`} /></a>)}
                </div>
            </div>
        </div>

        <SiteFooter />
        <ScrollTop />
    </>
}
