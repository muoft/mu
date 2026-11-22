import { useEffect, useState } from 'react';
import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../components/common';

type Link = { title: string, url: string, icon: string | null }
const ext = (url: string) => url.startsWith('/') ? {} : { target: '_blank', rel: 'noopener' }

export default () => {
    const [links, setLinks] = useState<Link[]>([])
    useEffect(() => { fetch('/api/links').then(r => r.json()).then(setLinks) }, [])

    return <>
        <SiteHeader active="home" />
        <Breadcrumbs crumbs={["Home"]} show={false} />

        <div className='breadcrumbs'>
            <div className='container border shadow rounded bg-white p-4 d-flex flex-column gap-2 text-center' style={{ maxWidth: 560, width: 'calc(100% - 32px)' }}>
                <p>University of Toronto</p>
                <h3 className='mb-2'>Math Union</h3>
                {links.filter(l => !l.icon).map(l => <a key={l.url} href={l.url} className='btn btn-outline-dark py-3' {...ext(l.url)}>{l.title}</a>)}
                <div className='d-flex justify-content-center gap-4 pt-2 fs-3'>
                    {links.filter(l => l.icon).map(l => <a key={l.url} href={l.url} className='text-dark' aria-label={l.title} {...ext(l.url)}><i className={`lni lni-${l.icon}`} /></a>)}
                </div>
            </div>
        </div>

        <SiteFooter />
        <ScrollTop />
    </>
}
