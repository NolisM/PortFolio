import React, { useState, useRef, useEffect } from 'react'
import About from "./About";
import Contact from "./Contact";
import MyWork from "./MyWork";
import Skills from "./Skills";
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [hamburguer, setHamburguer] = useState(false)
    const boxesRef = useRef([]);
    console.log(boxesRef)
    console.log('este', window.addEventListener("scroll", checkBoxes))

    useEffect(() => {
        console.log('entro al useefect')
        window.addEventListener("scroll", checkBoxes);
        checkBoxes();

        return () => {
            window.removeEventListener("scroll", checkBoxes);
        };
    }, []);

    const handleClickHamburguer = () => {
        setHamburguer(!hamburguer)
    }


    function checkBoxes() {
        const boxes = boxesRef.current;
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach((box) => {

            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add("show");
            } else {
                box.classList.remove("show");
            }
        });
    }
    return (
        <div className='navbarContainer'>
            <nav className=" navbar sticky-top navbar-expand-lg navbar-dark  scrolling-navbar">

                <div className='Container d-flex justify-content-between'>

                    <a className="navbar-brand  font-italic font-weight-bold titulonav ml-auto pt-3" href="#">Nolis Maldonado</a>
                    <button
                        onClick={handleClickHamburguer}
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded={hamburguer}
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} style={{ color: 'orange' }} />
                    </button>
                    <div className={`${!hamburguer && 'collapse'} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="#header">Home</a>
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

            <div id="about" className=" box" ref={(el) => (boxesRef.current[0] = el)}>
                <About title="About Me" className="about" />
            </div>
            <div id="skills" style={{ marginRight: '10%', marginLeft: '10%' }} className=" box" ref={(el) => (boxesRef.current[1] = el)}>
                <Skills title="My Skills" className="skills " />
            </div>
            <div id="work" style={{ marginRight: '10%', marginLeft: '10%' }} className=" box" ref={(el) => (boxesRef.current[2] = el)}>
                <MyWork title="My Work" className="container " />
            </div>
            <div id="contact" style={{ marginRight: '10%', marginLeft: '10%' }} className=" box" ref={(el) => (boxesRef.current[3] = el)}>
                <Contact title="Contact Me" className="contact " />
            </div>
        </div>
    )
}

export default Navbar