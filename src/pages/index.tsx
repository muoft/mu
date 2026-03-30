import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../components/common';

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

    <div className="container text" style={{ padding: '32px 0' }}>
        <h2>Recent News</h2> <br />

        <h4 style={{ color: '#7659fc', margin: '12px 0' }}>Integration Bee Monday</h4>
        <p>Join us in this contest to solve some tricky integrals! This Monday March 30 in BA 6183 from 6:30 - 8:30PM.</p>

        <h4 style={{ color: '#7659fc', margin: '12px 0' }}>ASSU Course Union of the Year!</h4>
        <p>It is an honour to announce that μ(t) has won the ASSU Course Union of the Year Award!</p>
    </div>

    <SiteFooter />
    <ScrollTop />
</>
