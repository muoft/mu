import { Breadcrumbs, ScrollTop, SiteFooter, SiteHeader } from '../../components/common';

const execs = [
    { name: 'Muren Kang', role: 'President', year: 3, program: 'Math and Physics Specialist', math: 'Group Theory', fact: "I don't eat mushrooms (bcz they're too cute)", photo: 'muren' },
    { name: 'Nikita Chekhovskoy', role: 'Secretary', year: 3, program: 'Mathematics Specialist and Computer Science Major', math: 'All of math!', fact: "I've been crocheting for 8 years and I have 3 cats 🐈🐈🐈", photo: 'nikita' },
    { name: 'Darren Kosasih', role: 'Treasurer', year: 2, program: 'Applied math in economics and finance specialist, Computer science major', math: 'Combinatorics', fact: 'I like gambling', photo: 'darren' },
    { name: 'Bradley Boratto', role: 'Vice President of Social Affairs', year: 3, program: 'Physics, Computer Science, Math', math: 'Does machine learning count?', fact: "I still haven't decided my programs... I'm on track to complete all 3 majors but we'll see", photo: 'bradley' },
    { name: 'Dharaneeswar Dadibathina', role: 'Vice President of Internal Affairs', year: 2, program: 'Biological Physics Specialist, Applied Mathematics', math: 'Chaos and Fractals', fact: 'I was part of my high school choir that was the first Canadian one to earn 1st place in an international competition in Spain!', photo: 'dharaneeswar' },
    { name: 'Zef Wu', role: 'Vice President of External Affairs', year: 4, program: 'Math specialist', math: 'linear operators', fact: 'I collect vinyl records', photo: 'zef' },
    { name: 'Grace Groth', role: 'Vice President of Communications', year: 2, program: 'Cognitive Science and Statistics', math: 'Probability', fact: 'I love wildlife photography', photo: 'grace' },
    { name: 'Stefan Berman', role: 'Vice President of Asset Management', year: 2, program: 'Mathematics', math: 'TBD…', fact: 'I occasionally attempt ultramarathons without training…', photo: 'stefan' },
    { name: 'Leila Bansal', role: 'Vice President of Representatives', year: 2, program: 'Physiology + health and disease major, math minor', math: 'Geometry', fact: 'Phosphorus was accidentally discovered by someone trying to turn human urine into gold', photo: 'leila' },
];

export default () => <>
    <SiteHeader active={null} />
    <Breadcrumbs crumbs={['About', 'Executives']} />
    <section className="about section">
        <div className="container">
            <h1>Meet the Executives!</h1>
            <p>2026–2027</p>
            <div className="row">
                {execs.map(exec => <div className="col-lg-4 col-md-6 col-12" key={exec.name} style={{ marginTop: '2.5rem' }}>
                    <img src={`/about/images/execs/2026/${exec.photo}.jpg`} alt={exec.name} loading="lazy" style={{ width: '100%', maxWidth: 280, aspectRatio: '1', objectFit: 'cover', borderRadius: '50%', marginBottom: '1.25rem' }} />
                    <div className="content">
                        <h3>{exec.name}</h3>
                        <p><strong>{exec.role}</strong><br />
                            Year: {exec.year}<br />
                            Program: {exec.program}<br />
                            Favourite math area: {exec.math}<br />
                            Fun fact: {exec.fact}
                        </p>
                    </div>
                </div>)}
            </div>
        </div>
    </section>
    <SiteFooter />
    <ScrollTop />
</>;
