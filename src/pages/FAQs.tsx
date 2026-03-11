import { ScrollTop, SiteFooter, SiteHeader } from '../components/common';

export default () => <>
    <SiteHeader active="faqs" />

    <div className="breadcrumbs">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div className="breadcrumbs-content">
                        <h1 className="page-title">FAQs</h1>
                        <ul className="breadcrumb-nav">
                            <li><a href="/">Home</a></li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="about section">
        <div className="container">
            <div className="content wow fadeInRight" data-wow-delay=".4s">
                <h4>Should I take a programming course, and if so, which one?</h4>
                <p>
                    Programming is quickly becoming an essential skill for most math jobs, and we strongly recommend taking a programming course.
                    Most students take CSC108, an introductory Python course for those without prior coding experience. If you are comfortable with the CSC108 content, you may skip ahead to CSC148.
                </p>

                <h4>How do I get research experience?</h4>
                <p>
                    There are many research opportunities available at U of T. The math department has a page listing different research programs.
                    You can consider applying for FUSRP (Fields Institute) and for an NSERC grant if you have a professor willing to work with you.
                </p>

                <h4>I want to take a course but I’m missing a prerequisite. Can I take it?</h4>
                <p>
                    The best way to check if a course is appropriate is to read the syllabus to assess if you think you can keep up.
                    The math department has a prerequisite waiver form you can fill out; for non-math courses, it may be sufficient to email the professor.
                </p>

                <h4>What are breadth requirements?</h4>
                <p>
                    Breadth requirements are meant to ensure you are exposed to a variety of subjects throughout your time at U of T.
                    Use Timetable Builder to filter breadth categories and explore your interests.
                </p>
            </div>
        </div>
    </section>

    <SiteFooter />
    <ScrollTop />
</>
