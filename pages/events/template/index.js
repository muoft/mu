export default Event = ({ title, image, children, date, location }) => {
    return <>
        <Header />
        <Breadcrumb title={title} />
        <Pager title={title} image={image} date={date} location={location} body={children} />
        <Footer />
        <ScrollTop />
    </>
}

const Header = () => (
    <header class="header navbar-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="nav-inner">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                                <img src="../assets/images/logo/white-logo.svg" alt="Logo" />
                            </a>
                            <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a href="../index.html" aria-label="Toggle navigation">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-1" aria-controls="submenu-1-1"
                                            aria-expanded="false" aria-label="Toggle navigation">About</a>
                                        <ul class="sub-menu collapse" id="submenu-1-1">
                                            <li class="nav-item"><a href="../about/about-us.html">About Us</a></li>
                                            <li class="nav-item"><a href="../about/execs.html">Exec Team</a></li>
                                            <li class="nav-item">
                                                <a href="../assets/pdf/constitution.pdf">Constitution</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-2" aria-controls="submenu-1-2"
                                            aria-expanded="false" aria-label="Toggle navigation">First Year</a>
                                        <ul class="sub-menu collapse" id="submenu-1-2">
                                            <li class="nav-item">
                                                <a
                                                    href="https://www.mathematics.utoronto.ca/undergraduate/current-students/guide-first-year-mathematics">Guide</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="../FAQs.html" aria-label="Toggle navigation">FAQs</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="../events.html" class="active"
                                            aria-label="Toggle navigation">Events</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-3" aria-controls="submenu-1-3"
                                            aria-expanded="false" aria-label="Toggle navigation">More</a>
                                        <ul class="sub-menu collapse" id="submenu-1-3">
                                            <li class="nav-item">
                                                <a href="https://www.math.toronto.edu/mgsa/">MGSA</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="https://www.mathematics.utoronto.ca/">Math Dept</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="https://mu.math.toronto.edu/home/">Archive</a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    href="https://docs.google.com/forms/d/e/1FAIpQLSe_DdXtw4qm0gO6y1qcrLrnezqyYtFfbwNt09pmyVLs4B1SNQ/viewform">Feedback
                                                    Form</a>
                                            </li>
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
)

const Breadcrumb = ({ title }) => (
    <div class="breadcrumbs">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div class="breadcrumbs-content">
                        <h1 class="page-title">{title}</h1>
                        <ul class="breadcrumb-nav">
                            <li><a href="../index.html">Home</a></li>
                            <li><a href="../events.html">Events</a></li>
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const Pager = ({ title, image, date, location, body }) => (
    <section class="about section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="content wow fadeInRight" data-wow-delay=".4s">
                        <h3>{title}</h3>
                        {/* bootstrap: date to the left, location to the right */}
                            <div class="d-flex justify-content-between">
                                <b style={{fontSize: "1.2em", paddingTop: '6px'}}>{date}</b>
                                <b style={{fontSize: "1.2em", paddingTop: '6px'}}>{location}</b>
                            </div>
                        <p>
                            {body}
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="image wow fadeInRight" data-wow-delay=".2s">
                        <img src={image} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

const Footer = () => (
    <footer class="footer section">
        <div class="footer-top">
            <div class="container">
                <div class="inner-content">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-footer f-about">
                                <div class="logo">
                                    <a href="../index.html">
                                        <img src="../assets/images/logo/white-logo.svg" alt="#" />
                                    </a>
                                </div>
                                <p>To infinity and beyond!</p>
                                <h4 class="social-title">Contact Us:</h4>
                                <ul class="social">
                                    <li>
                                        <a href="https://discord.gg/Vp4sGGe2AJ"><i class="lni lni-discord"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/uoftmathunion/"><i
                                            class="lni lni-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="mailto:mu@math.toronto.edu"><i class="lni lni-envelope"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-footer newsletter">
                                <h3>Location</h3>
                                <p>
                                    40 St George St,<br />
                                    Toronto, Ontario,<br />
                                    Canada
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-footer newsletter">
                                <h3>Subscribe</h3>
                                <p>Subscribe to our newsletter for the latest updates</p>
                                <form method="POST" class="newsletter-form" id="email-form">
                                    <input type="email" name="your-email" placeholder="Email" required />
                                    <div class="button">
                                        <button type="submit" class="sub-btn" id="submit-button">
                                            <i class="lni lni-envelope"></i>
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
                                }}
                                ></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="inner-content">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <p class="copyright-text">© University of Toronto Math Union</p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <p class="copyright-owner">
                                Designed and Developed by
                                <a href="https://graygrids.com/" rel="nofollow" target="_blank">GrayGrids</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

const ScrollTop = () => (
    <a href="#" class="scroll-top">
        <i class="lni lni-chevron-up"></i>
    </a>
)
