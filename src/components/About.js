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
                        <h3>Full Stack Developer con màs de3 años de experiencia</h3>

                        <p>
                            Me gusta crear soluciones digitales que <strong>optimizan procesos y mejoran la eficiencia operativa</strong>.
                            Mi enfoque combina el desarrollo técnico con una comprensión de las necesidades del negocio,
                            buscando siempre traducir requerimientos complejos en herramientas funcionales y escalables.
                        </p>
                        <p>
                            He trabajado en <strong>entornos laborales reales</strong> desarrollando sistemas de gestión interna,
                            automatizaciones para equipos comerciales y herramientas administrativas. También participé
                            en proyectos desde cero hasta producción, colaborando en equipos multidisciplinarios con
                            diseñadores, QAs y product managers.
                        </p>
                        <p>
                            Disfruto del <strong>trabajo colaborativo</strong>, la mejora continua y construir productos que
                            realmente marquen la diferencia en el día a día de las personas.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;