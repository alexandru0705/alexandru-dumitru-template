import './Header.scss';

function Header() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="site-header">
            <div className="header-brand" onClick={() => scrollToSection('banner')}>
                <span className="user-icon" aria-hidden="true">&lt;/ alex&gt;</span>
                <span className="user-name">Alexandru Dumitru</span>
            </div>
            
            <nav className="header-nav">
                <button onClick={() => scrollToSection('banner')}>Home</button>
                <button onClick={() => scrollToSection('projects')}>Projects</button>
                <button onClick={() => scrollToSection('skills')}>Skills</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
            </nav>
        </header>
    );
}

export default Header;