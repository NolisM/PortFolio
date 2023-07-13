import React from 'react'
import mifoto from '../images/mifoto.jpg'
import fotoperfil from '../images/fotoperfil.jpg'
import './about.css'


const About = () => {


    return (



        <div className='Container-fluid about'>
            <h1 className='text-center p-5 mb-5 titleAbout'><u>Sobre Mi...</u></h1>
            <div className='row '>
                <img src={fotoperfil} className="  mi-foto mx-auto align-middle " alt="..." />

                <p className='text-about mx-auto'> Hola!! 👋, Soy Nolis Maldonado, Desarrolladora Web Full Stack.
                    Soy una persona apasionada, proactiva, comprometida y en constante aprendizaje, con experiencia en tecnologías de Front-End y Back-End y habilidades blandas muy valoradas en el mundo laboral. Poseo una gran capacidad para aprender y adaptarme rápidamente a nuevas tecnologías y situaciones, lo que me ha permitido abordar con éxito diferentes proyectos y desafíos técnicos. Esto demuestra mi habilidad para mantenerme actualizada en un mundo tecnológico en constante evolución y mi compromiso con la excelencia en mi trabajo.
                </p>

            </div>
        </div>

    )
}

export default About