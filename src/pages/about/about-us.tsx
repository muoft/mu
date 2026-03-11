import { ScrollTop, SiteFooter, SiteHeader } from '../../components/common';

export default () => <>
    <SiteHeader active={null} />

    <div className="breadcrumbs">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div className="breadcrumbs-content">
                        <h1 className="page-title">About Us</h1>
                        <ul className="breadcrumb-nav">
                            <li><a href="/">Home</a></li>
                            <li>About</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="about section">
        <div className="container">
            <div className="content wow fadeInRight" data-wow-delay=".4s">
                <h4>HISTORY</h4>
                <h2>About Us</h2>
                <p>
                    Today’s Mathematics Union dates back to the introduction of the university’s Mathematics and Physics Course in 1880. In the same year, an undergraduate society was founded by Professor James Loudon. According to a 1918 article in the American Mathematical Monthly, it was the “most venerable” such club on the continent. On January 27, 1882, the first constitution was drawn up and the University College Mathematical and Physical Society was born. Meetings initially consisted of proposing and solving problems, but the main purpose soon became mathematical and historical presentations by professors and students, along with social interaction over refreshments. These traditions have remained at the heart of the society to this day. The M and P Society, as it was called by generations of members, succeeded in its ambitions for many decades. Its progress is documented in beautifully handwritten minutes books and membership records, which are now preserved in the university archives. Early members included the founder Loudon who went on to become president of the university, and notable mathematicians and physicists such as Fields, Beatty, Pounder and McLennan. <br /><br />

                    The name and nature of the society has varied over time. In 1891, the name was changed to the University of Toronto Mathematical and Physical Society, which stood the test of time for over 70 years, though some later records refer to it as the Mathematics and Physics Society. In the 1960s, student unions emerged and the society became a Mathematics and Physics Course Union. Since then, the union has changed regulations approximately every decade. Sometime in the 1970s, a partition resulted in the physical branch becoming what is today the Physics and Astronomy Students’ Union, and the mathematical branch becoming the Mathematics Course Union. In 1981, statistics was included to create the Mathematics and Statistics Students’ Union. Around 1993, this became the Mathematics, Actuarial and Statistics Students’ Union, known as MASSU. On April 8, 2005, a motion to partition the union was passed, and today’s Mathematics Union and Statistical Sciences Association of Students were created. On January 7, 2015, Mathematics Union unanimously passed new constitution to modernize its policies and procedures and to ensure future success. <br /><br />

                    Today, MU serves the dual roles of society and union. We are a course union in the Arts and Science Students’ Union, in which capacity we represent all students in math courses and programs. Historically, students and the department have enjoyed amicable relations, so there has been little political conflict. The only known time of major disagreement was in 1973, when the dismissal of three popular instructors resulted in serious protests. Ever since, student representatives have held seats on the departmental Undergraduate Committee, and students have been consulted on matters of recruitment, promotion and curriculum. Good relations have allowed for an enriching society with frequent events and the presence of prominent academics. Professors like J. C. Fields, Peter Rosenthal and Edward Barbeau accepted invitations to contribute countless times. H undreds of students have volunteered their time as executives, such as Françoise Ko, Nicolas Juzda and Patrick Kaifosh, each of whom were elected president for an astonishing three years. Thousands have participated in our events throughout the decades. After over a century of activity, we stand stronger than ever and look forward to carrying on the tradition of MU.
                </p>
            </div>
        </div>
    </section>

    <SiteFooter />
    <ScrollTop />
</>
