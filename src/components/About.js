import React from 'react';
import fotoperfil from '../images/fotoperfil.jpg';
import './about.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">Sobre Mí</h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src={fotoperfil} alt="Nolis Maldonado" className="profile-image" />
                        <div className="social-links">
                            <a href="https://github.com/NolisM" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href="https://linkedin.com/in/nolis-maldonado" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="about-text">
                        <p>
                            Me especializo en construir <strong>herramientas digitales que resuelven problemas reales </strong> 
                            y mejoran el trabajo de los equipos. Me gusta crear soluciones que combinan 
                            <strong> tecnología limpia con impacto tangible</strong> en el día a día de las personas.
                        </p>
                        <p>
                            He trabajado en <strong>proyectos desde cero hasta producción</strong>, colaborando con 
                            diseñadores, QAs y product managers. Me motiva la <strong>mejora continua</strong>, 
                            aprender nuevas tecnologías y <strong>enfrentar desafíos que me hagan crecer </strong> 
                            como profesional.
                        </p>
                        <p>
                            Busco formar parte de un <strong>equipo donde pueda aportar mi experiencia </strong> 
                            en automatización, desarrollo web y resolución de problemas, 
                            mientras <strong>sigo aprendiendo y desarrollándome</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;