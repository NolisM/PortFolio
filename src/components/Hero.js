import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-greeting">👋 Hola, soy</span>
                        <h1 className="hero-name">Nolis Maldonado</h1>
                        <h2 className="hero-title">Full Stack Developer</h2>
                        <p className="hero-description">
                            Full Stack Developer con mas de 3 años de experiencia creando soluciones digitales.
                            Actualmente colaboro en el desarrollo de herramientas de automatización
                            en entornos laborales reales.
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn-primary">Ver Proyectos</a>
                            <a href="#contact" className="btn-secondary">Contactame</a>
                            <a href="/pdf/NolisMaldonadoCV.pdf" download className="btn-outline">
                                📄 Descargar CV
                            </a>
                        </div>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-card">
                            <span className="stat-number">+3</span>
                            <span className="stat-label">Años experiencia</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">+10</span>
                            <span className="stat-label">Proyectos</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">+5</span>
                            <span className="stat-label">Tecnologías</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;