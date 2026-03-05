import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al hacer clic en un link (mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          Nolis Maldonado
        </a>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menú de navegación */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" onClick={handleLinkClick} className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={handleLinkClick} className="nav-link">
                Sobre Mí
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" onClick={handleLinkClick} className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={handleLinkClick} className="nav-link">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={handleLinkClick} className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;