import { useEffect } from "react";

export const SiteHeader = ({ active }: { active: string }) => (
    <header className="header navbar-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="nav-inner">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/">
                                <img src="/logo.svg" alt="Logo" />
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
                                            <li className="nav-item"><a href="/constitution.pdf">Constitution</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/repo" aria-label="Toggle navigation">Past Tests</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/events" aria-label="Toggle navigation">Events</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/FAQs" aria-label="Toggle navigation">FAQs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-more" aria-controls="submenu-more"
                                            aria-expanded="false" aria-label="Toggle navigation">More</a>
                                        <ul className="sub-menu collapse" id="submenu-more">
                                            <li className="nav-item"><a href="https://www.mathematics.utoronto.ca/undergraduate/current-students/guide-first-year-mathematics">A Guide to First Year</a></li>
                                            <li className="nav-item"><a href="https://www.math.toronto.edu/mgsa/">MGSA</a></li>
                                            <li className="nav-item"><a href="https://www.mathematics.utoronto.ca/">Math Department</a></li>
                                            <li className="nav-item"><a href="https://mu.math.toronto.edu/home/">Archive</a></li>
                                            <li className="nav-item"><a href="https://forms.gle/e3V2t25wRjTAHDFcA">Feedback Form</a></li>
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
                        <div className="col-lg-4 col-md-6 col-12 single-footer newsletter">
                            <h3><img src="/logo.svg" width={100} /></h3>
                            <p>To infinity and beyond!</p>
                        </div>                        
                        <div className="col-lg-4 col-md-6 col-12 single-footer newsletter">
                            <h3 style={{marginBottom: 16}}>Visit the Lounge</h3>
                            <p> <b>BA 6202</b> <br /> 40 St George St <br /> Toronto, ON, Canada </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 single-footer newsletter">
                            <h3 style={{marginBottom: 16}}>Connect with Us</h3>
                            <p><i className="lni lni-discord"></i> <a href="https://discord.gg/mBbhsfyXXm" target="_blank">discord.gg/mBbhsfyXXm</a> </p>
                            <p><i className="lni lni-instagram"></i> <a href="https://www.instagram.com/uoftmathunion/" target="_blank">@uoftmathunion</a> </p>
                            <p><i className="lni lni-envelope"></i> <a href="mailto:mu@math.toronto.edu">mu@math.toronto.edu</a> </p>
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

export const Breadcrumbs = ({ crumbs, show }: { crumbs: string[]; show?: boolean }) => {
    // document.title = 'μ(t) | ' + crumbs[crumbs.length - 1];
    useEffect(() => { document.title = 'μ(t)' + ' | ' + crumbs[crumbs.length - 1] }, [crumbs])

    return (show === false) ? '' : <div className="breadcrumbs">
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
}