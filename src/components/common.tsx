export const SiteHeader = ({ active }: { active: string }) => (
    <header className="header navbar-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="nav-inner">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/">
                                <img src="/assets/images/logo/white-logo.svg" alt="Logo" />
                            </a>
                            <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a href="/" aria-label="Toggle navigation">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-about" aria-controls="submenu-about"
                                            aria-expanded="false" aria-label="Toggle navigation">About</a>
                                        <ul className="sub-menu collapse" id="submenu-about">
                                            <li className="nav-item"><a href="/about/about-us">About Us</a></li>
                                            <li className="nav-item"><a href="/about/execs">Exec Team</a></li>
                                            <li className="nav-item"><a href="/assets/pdf/constitution.pdf">Constitution</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-first-year" aria-controls="submenu-first-year"
                                            aria-expanded="false" aria-label="Toggle navigation">First Year</a>
                                        <ul className="sub-menu collapse" id="submenu-first-year">
                                            <li className="nav-item"><a href="https://www.mathematics.utoronto.ca/undergraduate/current-students/guide-first-year-mathematics">Guide</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/FAQs" aria-label="Toggle navigation">FAQs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/events" aria-label="Toggle navigation">Events</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-more" aria-controls="submenu-more"
                                            aria-expanded="false" aria-label="Toggle navigation">More</a>
                                        <ul className="sub-menu collapse" id="submenu-more">
                                            <li className="nav-item"><a href="https://www.math.toronto.edu/mgsa/">MGSA</a></li>
                                            <li className="nav-item"><a href="https://www.mathematics.utoronto.ca/">Math Dept</a></li>
                                            <li className="nav-item"><a href="https://mu.math.toronto.edu/home/">Archive</a></li>
                                            <li className="nav-item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe_DdXtw4qm0gO6y1qcrLrnezqyYtFfbwNt09pmyVLs4B1SNQ/viewform">Feedback Form</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export const SiteFooter = () => (
    <footer className="footer section">
        <div className="footer-top">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer f-about">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/assets/images/logo/white-logo.svg" alt="#" />
                                    </a>
                                </div>
                                <p>To infinity and beyond!</p>
                                <h4 className="social-title">Contact Us:</h4>
                                <ul className="social">
                                    <li><a href="https://discord.gg/YNSuYjGbeu"><i className="lni lni-discord"></i></a></li>
                                    <li><a href="https://www.instagram.com/uoftmathunion/"><i className="lni lni-instagram"></i></a></li>
                                    <li><a href="mailto:mu@math.toronto.edu"><i className="lni lni-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer newsletter">
                                <h3>Location</h3>
                                <p>
                                    40 St George St,<br />
                                    Toronto, Ontario,<br />
                                    Canada
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer newsletter">
                                <h3>Subscribe</h3>
                                <p>Subscribe to our newsletter for the latest updates</p>
                                <form method="POST" className="newsletter-form" id="email-form">
                                    <input type="email" name="your-email" placeholder="Email" required />
                                    <div className="button">
                                        <button type="submit" className="sub-btn" id="submit-button">
                                            <i className="lni lni-envelope"></i>
                                        </button>
                                    </div>
                                </form>
                                <div id="message" style={{
                                    display: "none",
                                    width: "100%",
                                    margin: "10px 0 0 0",
                                    fontWeight: "bold",
                                    color: "white",
                                    padding: "8px",
                                    backgroundColor: "transparent",
                                    borderRadius: "4px",
                                    borderColor: "transparent",
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-text">© University of Toronto Math Union</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-owner">
                                Designed and Developed by <a href="https://graygrids.com/" rel="nofollow" target="_blank">GrayGrids</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export const ScrollTop = () => (
    <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
    </a>
);

export const Breadcrumbs = ({ crumbs }: { crumbs: string[] }) => (
    <div className="breadcrumbs">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div className="breadcrumbs-content">
                        <h1 className="page-title">{crumbs[crumbs.length - 1]}</h1>
                        <ul className="breadcrumb-nav">
                            <li><a href="/">Home</a></li>
                            {crumbs.map(c => <li key={c}>{c}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);