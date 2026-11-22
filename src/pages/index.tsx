import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../components/common';

const links = [
    ['Past Tests Repository', '/repo'],
    ["Winter '27 Intraμrals Interest Form", 'https://forms.gle/NHzqEdqA4wvFLNEP8'],
    ['Colloquium Speaker Sign-up (Fall 2026)', 'https://docs.google.com/forms/d/e/1FAIpQLSdyK3wdz5gFFMt1VX9YxFe2CaBEvGds_Pa5kY4WaA67LZ73FA/viewform'],
    ['μ(t) Merch', 'https://muoft.square.site'],
    ['Constitution', '/constitution.pdf'],
    ['Photos on Flickr', 'https://www.flickr.com/photos/203710933@N04'],
]

const socials = [
    ['lni-instagram', 'Instagram', 'https://instagram.com/uoftmathunion'],
    ['lni-discord', 'Discord', 'https://discord.gg/HVG3b4dm53'],
    ['lni-youtube', 'YouTube', 'https://www.youtube.com/@uoftmu'],
    ['lni-envelope', 'Email', 'mailto:mu@math.toronto.edu'],
]

export default () => <>
    <SiteHeader active="home" />
    <Breadcrumbs crumbs={["Home"]} show={false} />

    <section className="hero-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="hero-content">
                        <h4>University of Toronto</h4>
                        <h1>Math Union</h1>
                        <p>To infinity and beyond!</p>
                        <div className="button">
                            <a href="/about/about-us" className="btn">About Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="container d-flex flex-column gap-2 py-5" style={{ maxWidth: 560 }}>
        {links.map(([label, href]) =>
            <a key={href} href={href} className='btn btn-outline-dark py-3' target={href.startsWith('http') ? '_blank' : undefined} rel='noopener'>{label}</a>)}
        <div className='d-flex justify-content-center gap-4 pt-3 fs-3'>
            {socials.map(([icon, label, href]) =>
                <a key={href} href={href} className='text-dark' aria-label={label} target='_blank' rel='noopener'><i className={`lni ${icon}`} /></a>)}
        </div>
    </div>

    <SiteFooter />
    <ScrollTop />
</>
