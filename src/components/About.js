import React from 'react';
import fotoperfil from '../images/fotoperfil.jpg';
import './about.css';
import Header from './Header';
import lkd from '../images/icons8-linkedin-32.png'
import GH from '../images/icons8-github-32.png'

const About = () => {
    return (
        <div className=" about px-3">
            <div className='ImageRedes'>
                <img
                    src={fotoperfil}
                    className="mi-foto mx-auto align-middle"
                    alt="Foto de perfil"
                />
                <div className='redes'>

                    <div className=''>
                        <a href="https://www.linkedin.com/in/nolis-maldonado/" >
                            <img src={lkd} className="img-rounded  " alt="..." />
                        </a>
                    </div>
                    <div className=''>
                        <a href="https://github.com/NolisM" >
                            <img src={GH} className="img-rounded  " alt="..." />
                        </a>
                    </div>
                </div>

            </div>
            <div className="text-content mx-2">
                <Header />
                <p className="text-about my-2">
                    Desarrolladora apasionada, proactiva, comprometida y en constante aprendizaje.
                    Con habilidades blandas muy valoradas en el mundo laboral.
                </p>
                <p className="text-about">
                    Con gran habilidad para estar actualizada en un mundo tecnológico en constante evolución y compromiso con la excelencia en el trabajo.

                </p>

            </div>
        </div>
    );
};

export default About;

