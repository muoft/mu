import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../../components/common';
import archive from './past-execs.json';

const lastYear = [
    { name: 'Ibrahim Hamid', role: 'President', year: 4, math: 'Geometry', fact: 'I support Inter.', photo: 'IbraCropped.jpg' },
    { name: 'Ryan Grewal', role: 'Secretary', year: 2, math: 'Algebra', fact: 'I play a lot of sudoku', photo: 'JustRyan.jpg' },
    { name: 'Caitlin Terry', role: 'Treasurer', year: 4, math: 'Number theory', fact: 'I’ve never lost a game of Connect 4', photo: 'CaitlinCropped.jpg' },
    { name: 'Kristopher Zhao', role: 'Vice President of Academics', year: 3, math: 'Algebra', fact: 'I like photography.', photo: 'Kristopher.JPG' },
    { name: 'Andrew Clements', role: 'Vice President of Communications', year: 2, math: 'Analysis', fact: 'I speak Spanish.', photo: 'Andrew.jpg' },
    { name: 'Maggie Pang', role: 'Vice President of Socials', year: 2, math: 'Anything geometry-related', fact: 'I like modular origami :)', photo: 'Maggie.webp' },
];

export default () => <>
    <SiteHeader active={null} />
    <Breadcrumbs crumbs={['About', 'Past Executives']} />
    <section className="about section">
        <div className="container">
            <h1>Past Executives</h1>
            <h2 style={{ marginTop: '2rem' }}>2025–2026</h2>
            <div className="row">
                {lastYear.map(exec => <div className="col-lg-4 col-md-6 col-12" key={exec.name} style={{ marginTop: '2.5rem' }}>
                    <img src={`/about/images/execs/${exec.photo}`} alt={exec.name} loading="lazy" style={{ width: '100%', maxWidth: 280, aspectRatio: '1', objectFit: 'cover', borderRadius: '50%', marginBottom: '1.25rem' }} />
                    <div className="content">
                        <h3>{exec.name}</h3>
                        <p><strong>{exec.role}</strong><br />
                            Year: {exec.year}<br />
                            Favourite math area: {exec.math}<br />
                            Fun fact: {exec.fact}
                        </p>
                    </div>
                </div>)}
            </div>
            <h2 style={{ marginTop: '4rem', marginBottom: '1rem' }}>Earlier teams</h2>
            <p>From the Math Union’s existing archive; some years have incomplete records.</p>
            {archive.map(team => <details key={team.year} style={{ borderBottom: '1px solid #ddd', padding: '1rem 0' }}>
                <summary style={{ cursor: 'pointer', fontSize: '1.2rem', fontWeight: 600 }}>{team.year}</summary>
                <ul style={{ marginTop: '0.75rem' }}>
                    {team.entries.map((entry, index) => <li key={index} style={{ marginBottom: '0.35rem' }}>
                        {entry.role && <strong>{entry.role}: </strong>}{entry.names}
                    </li>)}
                </ul>
            </details>)}
        </div>
    </section>
    <SiteFooter />
    <ScrollTop />
</>;
