import './Home.scss';

function Home() {
    return (
        <section id="hero" className="home-hero">
            <div className="home-text">
                <h1>Full-Stack Developer & Designer</h1>
                <p>Building clean, scalable web applications with a focus on high-performance architecture and modern user interfaces.</p>
            </div>
            <div className="home-visual-container">
                <div className="animated-card">
                    <span className="card-tag">&lt;/ alex&gt;</span>
                    <div className="code-snippet">
                        <code>const stack = ['React', 'Node', 'SCSS'];</code>
                        <code>const architecture = 'Modular & Clean';</code>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;