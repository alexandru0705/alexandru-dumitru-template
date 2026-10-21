import './Skills.scss';

function Skills() {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'Vite', 'Responsive Design']
        },
        {
            title: 'Backend & Database',
            skills: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Authentication']
        },
        {
            title: 'Tools & Workflow',
            skills: ['Git & GitHub', 'Visual Studio Code', 'macOS Terminal', 'Lighthouse / SEO', 'OpenSCAD', 'Bambu Studio']
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-header">
                <h2>Technical Skills</h2>
            </div>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category-card">
                        <h3>{category.title}</h3>
                        <ul className="skill-list">
                            {category.skills.map((skill, sIndex) => (
                                <li key={sIndex} className="skill-item">
                                    <span className="skill-bullet">/&gt;</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;