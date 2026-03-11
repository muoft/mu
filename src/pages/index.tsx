import { ScrollTop, SiteFooter, SiteHeader } from '../components/common';

export default () => <>
    <SiteHeader active="home" />

    <section className="hero-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="hero-content">
                        <h4 className="wow fadeInUp" data-wow-delay=".2s">University of Toronto</h4>
                        <h1 className="wow fadeInUp" data-wow-delay=".4s">Math Union</h1>
                        <p className="wow fadeInUp" data-wow-delay=".6s">To infinity and beyond!</p>
                        <div className="button wow fadeInUp" data-wow-delay=".8s">
                            <a href="/about/about-us" className="btn">About Us</a>
                            {/* <a href="/repo/" className="btn">Course Repository</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="call-action bg-white">
        <div className="container">
            <div className="inner-content">
                <div className="row align-items-center">
                    <div className="text">
                        <h2><a href="/events">Recent News</a></h2>
                        <h3>TRUNK Closes Soon</h3>
                        <p style={{ display: 'block', marginTop: 10 }}>
                            As we head towards the start of the new semester, we'd like to drop a reminder that the Intent to Submit form for the Undergraduate STEM Journal, now named TRUNK, closes on the fifth of January!
                            <br />
                            If you wish to submit to the journal, you must complete the intent to submit form, which is available at <a href="https://forms.gle/KTm7hd99AfxC7tQy9">https://forms.gle/KTm7hd99AfxC7tQy9</a>
                            <br />
                            Final papers will be due in a few weeks, and we will announce the date soon.
                        </p>
                        <hr />
                        <h3><a href="/events/PutnamDay">Putnam Training Day</a></h3>
                        <p style={{ display: 'block', marginTop: 10 }}>
                            We will be solving Putnam problems all day in the math lounge as preparation for the Putnam happening this Saturday. Copious amounts of coffee, problems, chalk, and coffee will be provided.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <SiteFooter />
    <ScrollTop />
</>
