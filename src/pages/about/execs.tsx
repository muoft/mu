import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../../components/common';

export default () => <>
    <SiteHeader active={null} />

    <Breadcrumbs crumbs={['About', 'Executives']} />

    <section className="about section">
        <div className="container">
            <h1>Meet the Executives!</h1>
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <div className="content ">
                        <h3>Ibrahim Hamid, President</h3>
                        <p>
                            Name: Ibrahim Hamid <br />
                            Year: 4 <br />
                            Favorite math area: Geometry<br />
                            Fun fact: I support Inter.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <embed src="/about/images/execs/IbraCropped.jpg" style={{ maxWidth: '70%', height: 'auto', borderRadius: '50%' }} />
                </div>

                <div className="col-lg-6 col-12">
                    <embed src="/about/images/execs/JustRyan.jpg" style={{ maxWidth: '70%', height: 'auto', borderRadius: '50%' }} />
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content ">
                        <h3>Ryan Grewal, Secretary</h3>
                        <p>
                            Name: Ryan Grewal <br />
                            Year: 2 <br />
                            Favorite math area: Algebra<br />
                            Fun fact: I play a lot of sudoku
                        </p>
                    </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="content ">
                        <h3>Caitlin Terry, Treasurer</h3>
                        <p>
                            Name: Caitlin Terry <br />
                            Year: 4 <br />
                            Favorite math area: Number theory<br />
                            Fun fact: I’ve never lost a game of Connect 4
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <embed src="/about/images/execs/CaitlinCropped.jpg" style={{ maxWidth: '70%', height: 'auto', borderRadius: '50%' }} />
                </div>

                <div className="col-lg-6 col-12">
                    <embed src="/about/images/execs/Kristopher.JPG" style={{ maxWidth: '70%', height: 'auto', borderRadius: '50%' }} />
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content ">
                        <h3>Kristopher Zhao, Vice President of Academics</h3>
                        <p>
                            Name: Kristopher Zhao <br />
                            Year: 3 <br />
                            Favorite math area: Algebra<br />
                            Fun fact: I like photography.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <SiteFooter />
    <ScrollTop />
</>
