import React, { useState } from 'react';
import './projectCard.css';

const ProjectCard = ({ project }) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className={`project-card ${project.highlight ? 'highlight-card' : ''}`}>
            {project.highlight && (
                <div className="card-badge">
                    ⭐ Experiencia laboral real
                </div>
            )}

            <div className="project-image">
                <img src={project.image} alt={project.title} />
                {project.impact && (
                    <span className="project-impact">{project.impact}</span>
                )}
            </div>

            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-company">{project.company}</span>
                </div>

                <p className="project-description">{project.description}</p>

                {project.features && (
                    <div className="project-features">
                        <h4>✨ Funcionalidades destacadas:</h4>
                        <ul>
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="project-links">
                    {project.demo && (
                        <button
                            onClick={() => setShowVideo(!showVideo)}
                            className="btn-demo"
                        >
                            {showVideo ? 'Ocultar Demo' : 'Ver Demo'} ▶
                        </button>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                            🌐 Demo Online
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                            📁 Código
                        </a>
                    )}
                </div>

                {showVideo && project.demo && (
                    <div className="project-video">
                        {project.demo.includes('vimeo') || project.demo.includes('youtube') ? (
                            <iframe
                                src={project.demo}
                                title={`${project.title} demo`}
                                width="100%"
                                height="200"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video controls width="100%">
                                <source src={project.demo} type="video/mp4" />
                            </video>
                        )}
                        {project.company.includes('Agroquía') && (
                            <p className="video-note">
                                *Datos sensibles pixelados por confidencialidad
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;