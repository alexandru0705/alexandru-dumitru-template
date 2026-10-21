import './ProjectModal.scss';
import { useState } from 'react';

function ProjectModal({ project, onClose }) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                
                <div className="modal-header">
                    <span className="modal-category">{project.category}</span>
                    <h2>{project.title}</h2>
                </div>

                <div className="modal-gallery">
                    <div className="main-image-display">
                        <img src={project.images[activeImage]} alt={`${project.title} preview`} />
                    </div>
                    {project.images.length > 1 && (
                        <div className="thumbnail-strip">
                            {project.images.map((img, index) => (
                                <img 
                                    key={index} 
                                    src={img} 
                                    alt={`Thumbnail ${index + 1}`}
                                    className={activeImage === index ? 'active' : ''}
                                    onClick={() => setActiveImage(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="modal-body">
                    <p>{project.description}</p>
                    <div className="modal-tags">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="modal-footer">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                            GitHub Repository
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;