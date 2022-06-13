import React, { useState } from 'react'
import About from "./About";
import Contact from "./Contact";
import MyWork from "./MyWork";
import Skills from "./Skills";
import Header from "./Header";
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar=()=>{
    const [hamburguer, setHamburguer] = useState(false)

    const handleClickHamburguer = () => {
        setHamburguer(!hamburguer)
    }
    return(
        <div>
    <nav className=" navbar sticky-top navbar-expand-lg navbar-dark  scrolling-navbar">
    
        <div className='Container'>

            <a className="navbar-brand  font-italic font-weight-bold titulonav " href="#">Nolis Maldonado</a>
                <button 
                    onClick={handleClickHamburguer} 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded={hamburguer} 
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} style={{color:'orange'}}/>
                </button>
            <div className={`${!hamburguer && 'collapse'} navbar-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white"  href="#header">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#about">Sobre Mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#skills">Mis Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#work">Mis Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#contact">Contacto</a>
                    </li>

                </ul>

            </div>
        </div>
       
    </nav>
    <div id='header'>
        <Header/>
    </div>
    <div id="about">
        <About title="About Me" className="about"  />
    </div>
    <div id="skills">
        <Skills title="My Skills" className="skills" />
    </div>
    <div id="work">
        <MyWork title="My Work" className="container" />
    </div>
    <div id="contact">
        <Contact title="Contact Me" className="contact" />
    </div>
    </div>
    )
}

export default Navbar