import React from 'react';
import fotoperfil from '../images/fotoperfil.jpg';
import './about.css';
import Header from './Header';
import lkd from '../images/icons8-linkedin-32.png'
import GH from '../images/icons8-github-32.png'

const About = () => {
    return (
        <div className="Container-fluid about px-3">
            <div className='ImageRedes'>
                <img
                    src={fotoperfil}
                    className="mi-foto mx-auto align-middle"
                    alt="Foto de perfil"
                />
                <div className='redes'>

                    <div className=''>
                        <a href="https://www.linkedin.com/in/nolis-maldonado/" target="_blank">
                            <img src={lkd} className="img-rounded  " alt="..." />
                        </a>
                    </div>
                    <div className=''>
                        <a href="https://github.com/NolisM" target="_blank">
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



// import React from 'react'
// import mifoto from '../images/mifoto.jpg'
// import fotoperfil from '../images/fotoperfil.jpg'
// import './about.css'


// const About = () => {


//     return (



//         <div className='Container-fluid about'>
//             <h1 className='text-center p-5 mb-5 titleAbout'><u>Sobre Mi...</u></h1>
//             <div className='text-content'>
//                 <img src={fotoperfil} className="  mi-foto mx-auto align-middle " alt="..." />

//                 <p className='text-about mx-auto'> Hola!! 👋, Soy Nolis Maldonado, Desarrolladora Web Full Stack.
//                     Soy una persona apasionada, proactiva, comprometida y en constante aprendizaje, con experiencia en tecnologías de Front-End y Back-End y habilidades blandas muy valoradas en el mundo laboral. Poseo una gran capacidad para aprender y adaptarme rápidamente a nuevas tecnologías y situaciones, lo que me ha permitido abordar con éxito diferentes proyectos y desafíos técnicos. Esto demuestra mi habilidad para mantenerme actualizada en un mundo tecnológico en constante evolución y mi compromiso con la excelencia en mi trabajo.
//                 </p>

//             </div>
//         </div>

//     )
// }

// export default About