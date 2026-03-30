import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../components/common';

export default () => <>
    <SiteHeader active="faqs" />

    <Breadcrumbs crumbs={["FAQs"]}></Breadcrumbs>

    <section className="about section">
        <div className="container">
            <div className="content ">

                <h4>Should I take a programming course, and if so, which one?
                </h4>
                <p>Programming is quickly becoming an essential skill for most math jobs,
                    and we strongly recommend taking a programming course. Most students take CSC108,
                    an introductory Python course for those without prior coding experience. If you are
                    comfortable with the CSC108 content, you may skip ahead to CSC148. Those looking for
                    math-heavy higher-level computer science courses may consider taking CSC336 (Numerical Methods) a
                    nd CSC446 (Computational Methods for PDEs).
                </p>

                <h4>I dropped out of MAT157/MAT240, but I regret it. Can I still be a math specialist? Or, I took MAT137/223 and now want to be a math specialist. Is this possible?

                </h4>
                <p>

                    It is still possible to be a math specialist! Quite a few students every year take MAT257 without
                    taking MAT157. It is a difficult learning curve at first, and we recommend self-studying the MAT157
                    material over the summer (which means doing many practice problems—not just reading the textbook).
                    Don’t get discouraged; everyone struggles with analysis at first. We encourage you to reach out to
                    friends, classmates, and Math Union executives—and to check out the Discord—if you have any questions.

                </p>


                <h4>
                    How do I get research experience?
                </h4>

                <p>

                    There are many research opportunities available at U of T.
                    The math department has a page listing different research programs.
                    You can consider applying for FUSRP (offered by the Fields Institute),
                    and for an NSERC grant if you have a professor willing to work with you.
                    It’s also important to remember that research experience is not everything!
                    It can be just as valuable to spend a summer studying math that interests you.

                </p>

                <h4>

                    I want to take ___ course, but I am missing a prerequisite. Can I take it?

                </h4>

                <p>
                    The best way to check if a course is appropriate is to read the syllabus to assess if
                    you think you can keep up. The math department has a prerequisite waiver form you can fill out.
                    Other departments may have different procedures. Often, for non-math courses, it is sufficient to
                    email the professor and ask.

                </p>

                <h4>
                    What are breadth requirements, and which courses can I take to fulfill mine?

                </h4>

                <p>
                    Breadth requirements are meant to ensure you are exposed to a variety of subjects throughout your
                    time at U of T. To fulfill them you must:
                    <br />
                    - Take at least 1.0 credit in each of 4 of the 5 breadth categories, OR
                    <br />
                    - Take at least 1.0 credit in each of 3 of the 5 breadth categories PLUS 0.5 credit in each of the other 2 course categories.
                    <br />
                    <br />
                    Below are examples of courses math students have taken to fulfill their breadth requirements; however,
                    we encourage you to explore your interests! A good tool for finding courses is the Timetable Builder,
                    which lets you filter specific breadth categories.
                    <br />
                    <br />
                    Courses with an asterisk (*) can be counted towards a math major or minor. Note that some “easier”
                    courses, especially those restricted to first-years, cannot be CR/NCR’d.
                    <br />
                    <br />
                    <b>Breadth 1: Creative and Cultural Representations</b>
                </p>
                <p style={{marginLeft: 15}}>
                    <u>CRE371H1 – Documenting Reality</u>
                    <br />
                    Description:  This seminar course explores methods of capturing, representing, and constructing reality through documentary media. Emphases will include opportunities and challenges brought by technical developments in the digital era, and the history and evolution of documentary work in print and/or photography. Students consider methods and innovations of major practitioners; ethical issues such as privacy, subjectivity, and objectivity; and partisanship and the effects of artificial intelligence and other automatic tools.
                    <br />
                    Pre-requisites: Completion of 4.0 credits
                </p>
                <p style={{marginLeft: 15}}>
                    <u>HPS316H1 – Environment, Technology, and Nature</u>
                    <br />
                    Description:  This course examines the intersection of technology and environment in the modern world. Whether simple or complex, whether designed for recreation, work, or warfare, our tools and how we use them filter our perceptions of, and engagements with, non-human nature.
                    <br />
                    Pre-requisites:  0.5 credit in HPS/HIS
                </p>
                <p style={{marginLeft: 15}}>
                    <u>MUS303H1 – Music in the Contemporary World</u>
                    <br />
                    Description: The modern musical repertoire, including popular and traditional music from various parts of the world, will be studied from a variety of theoretical perspectives. No prior background in music or ability to read music is required.
                    <br />
                    Pre-requisites:  None
                </p>

                <p>
                    We recommend checking out History and Philosophy of Science (HPS) courses for breadth requirements 2 and 3. It is also useful to check out joint courses between departments—those will usually begin with the letter J.
                </p>
                <br />

                <b>Breadth 2: Thought, Belief, and Behaviour</b>
                <p style={{marginLeft: 15}}>
                    <u>VIC245H1 – Science Wars: Society and the Limits of Scientific Knowledge</u>
                    <br />
                    Description:  An introduction to competing conceptions of scientific knowledge and the role of sociocultural factors in shaping scientific methods, theories, and evidence. Can science provide objective knowledge of the external mind-independent world, or are the empirical aspirations of science limited by the social, cultural, economic, political, and religious contexts that shape “science” itself? Can scientific knowledge reach certainty? How do sociocultural factors affect the process of theory acceptance? This course considers “science” as an epistemological battleground from 17th century debates on inductive reasoning to contemporary arguments about “alternative” science.
                    <br />
                    Pre-requisites:  None
                </p>
                <p style={{marginLeft: 15}}>
                    <u>HPS222H1 – Science, Paradoxes, and Knowledge</u>
                    <br />
                    Description:  What is the nature of science and scientific knowledge? What is the nature of space, time and motion? Does science tell us the truth about the world? What are scientific revolutions and how do they occur? The course will address these and various other questions about science. It will focus on the bearings that philosophical views had on science in different periods in history, starting from ancient Greece and concluding in the 20th century.
                    <br />
                    Pre-requisites:  None
                </p>
                <br />
                <b>Breadth 3: Society and Its Institutions</b>
                <p style={{marginLeft: 15}}>
                    <u>REN242H1 – Scientific Worldviews of the Renaissance</u>
                    <br />
                    Description:  An in-depth study of late medieval and early modern scientific worldviews, with a focus on interconnections between natural philosophy, cosmology, theology, astronomy, optics, medicine, natural history, and ethics. Through a consideration of early modern ideas including free will and determinism, the finite and infinite universe, teleology and mechanism, theism and deism, and deduction and intuition, this course investigates some of the period’s key metaphysical and methodological assumptions, and reveals how an evolving scientific understanding informed the Renaissance worldview.
                    <br />
                    Pre-requisites:  Completed 4.0 credits (or permission from instructor)
                </p>
                <p style={{marginLeft: 15}}>
                    <u>HPS390H1* – Mathematics from the Babylonians to the Scientific Revolution</u>
                    <br />
                    Description:  A survey of ancient, medieval, and early modern mathematics with emphasis on historical issues.
                    <br />
                    Pre-requisites:  1.0 credit at the 200+ level from CSC/MAT/STA
                </p>
                <p style={{marginLeft: 15}}>
                    <u>HPS391H1* – Rebels Who Count: The History of Mathematics from 1700 to the Present</u>
                    <br />
                    Description:  A survey of the development of mathematics from 1700 to the present with emphasis on historical issues.
                    <br />
                    Pre-requisites:  1.0 credit at the 200+ level from CSC/MAT/STA
                </p>
                <p style={{marginLeft: 15}}>
                    <u>HPS240H1 – The Influence of the Eugenics Movement on Contemporary Society</u>
                    <br />
                    Description:  This course explores present-day topics such as reproductive issues (including “designer babies” and genetic counselling), gender, racism/colonialism, disability and euthanasia through the lens of the history of eugenics. A “scientific” movement which became popular around the world in the early twentieth century, eugenics was based on the principle that certain undesirable human characteristics were hereditary and could be eliminated by controlled reproduction. It resulted in the enactment of laws in numerous places, including Canada, authorizing coerced reproductive sterilization of certain individuals, and other measures intended to “improve” humanity. Today, we see its influences woven through contemporary debates, a number of which we will consider.
                    <br />
                    Pre-requisites:  None
                </p>
                <br />
                <b>Breadth 4: Living Things and Their Environment</b>
                <p style={{marginLeft: 15}}>
                    <u>NEW335H1 – Meditation and the Body</u>
                    <br />
                    Description:  Provides a conceptual and practical exploration of several ancient wisdom traditions.  Buddhist approaches to self-actualization and wisdom will be compared to four Western sites of wisdom (i.e., Mesopotamia, ancient Greece, Christian monasticism, Renaissance). Includes guided experiential exercises for each of the wisdom traditions.
                    <br />
                    Pre-requisites:  None
                </p>
                <p style={{marginLeft: 15}}>
                    <u>PSL432H1* – Theoretical Physiology</u>
                    <br />
                    Description:  Theoretical treatment of neurophysiology. Mathematical modeling and analysis of neurophysiological systems.
                    <br />
                    Pre-requisites: MAT235Y1/ MAT237Y1;  APM346H1/ MAT244H1 A minimum grade of 78% is required in  MAT235Y1/ MAT237Y1; APM346H1/ MAT244H
                    <br />
                    Recommended Preparation: PHY200-series; PSL201Y/300H1/302Y1/(BIO270H1, BIO271H1)

                </p>
                <br />
                <b>Breadth 5: The Physical and Mathematical Universe
                </b>
                <p style={{marginLeft: 15}}>
                    Any math course fulfills this breadth requirement.

                </p>


            </div>
        </div>
    </section>

    <SiteFooter />
    <ScrollTop />
</>
