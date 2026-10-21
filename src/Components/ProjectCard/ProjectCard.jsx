import './ProjectCard.scss';

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-image-wrapper">
                <img src={project.images[0]} alt={project.title} loading="lazy" />
            </div>
            <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;