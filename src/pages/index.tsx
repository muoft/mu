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

    <SiteFooter />
    <ScrollTop />
</>
