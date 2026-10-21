import './Projects.scss';
import { useState } from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import ProjectModal from '../../Components/ProjectModal/ProjectModal';
import { projectsData } from '../../Data/projectsData';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(projectsData[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-layout">
                {/* Left Container: H2 + Scrollable Cards */}
                <div className="projects-left-container">
                    <div className="projects-header">
                        <h2>Projects</h2>
                    </div>
                    <div className="projects-scroll-column">
                        {projectsData.map((project) => (
                            <div 
                                key={project.id} 
                                onClick={() => setSelectedProject(project)}
                                className={`card-item ${selectedProject?.id === project.id ? 'active' : ''}`}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Active Preview */}
                <div className="projects-preview-column">
                    {selectedProject && (
                        <div className="preview-card" onClick={() => setIsModalOpen(true)}>
                            <div className="preview-image-wrapper">
                                <img src={selectedProject.images[0]} alt={selectedProject.title} />
                            </div>
                            <div className="preview-caption">
                                <span className="preview-category">{selectedProject.category}</span>
                                <h3>{selectedProject.title}</h3>
                                <p>Click preview to view full gallery & details</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setIsModalOpen(false)} 
                />
            )}
        </section>
    );
}

export default Projects;