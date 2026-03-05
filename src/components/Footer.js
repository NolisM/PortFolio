import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>Nolis Maldonado</h3>
                        <p>
                            Full Stack Developer con mas de 3 años de experiencia creando soluciones
                            digitales que optimizan procesos y mejoran la eficiencia operativa.
                        </p>
                        <div className="footer-badge">
                            <span className="dot"></span>
                            <span>Disponible para oportunidades</span>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#about">Sobre Mí</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Conectemos</h4>
                        <div className="social-icons">
                            <a
                                href="https://github.com/NolisM"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://linkedin.com/in/nolis-maldonado"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="mailto:nolis51maldonado@gmail.com"
                                className="social-icon"
                                aria-label="Email"
                            >
                                <i className="far fa-envelope"></i>
                            </a>
                            <a
                                href="https://wa.me/543513062877"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="WhatsApp"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>

                        <div className="footer-email">
                            <i className="far fa-envelope"></i>
                            <a href="mailto:nolis51maldonado@gmail.com">
                                nolis51maldonado@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                {/* Copyright */}
                <div className="footer-copyright">
                    <p>
                        © {currentYear} Nolis Maldonado. Todos los derechos reservados.
                        <br />
                        Diseñado y desarrollado con <span style={{ color: 'var(--primary)' }}>❤️</span> por Nolis
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;