import React from 'react'
import mifoto from '../images/mifoto.jpg'
import fotoperfil from '../images/fotoperfil.jpg'
import './about.css'


const About=()=>{
    
   
    return(

        
      
            <div className='Container-fluid about'>
                    <h1 className='text-center p-5 mb-5 titleAbout'><u>Sobre Mi...</u></h1>
            <div className='row '>
                <img src={fotoperfil} className="  mi-foto mx-auto align-middle " alt="..."/> 

                <p className='text-about mx-auto'> Hola!! 👋, Mi nombre es Nolis Maldonado, Desarrolladora Web Full Stack. Soy de Córdoba,Argentina.
                    De chica siempre me gusto mucho la programación, me fascina la idea de poder desarrollar proyectos 
                    que simplifiquen las necesidades de las personas.
                    Es por eso que decidí enfocarme, aprender y crecer en este hermoso mundo IT.
                    Soy una persona Proactiva, que le gusta mucho los desafios, afrontarlos y superarlos.
                    No creo que existan problemas que no tengan soluciones, es por eso que me encanta investigar e implementar siempre cosas nuevas. 
                    
                    Me gusta trabajar mucho en equipo y creo que la base para eso es la buena comunicación 
                    y por supuesto siempre la empatía hacia el prójimo.
                </p>
                
            </div>
            </div>
       
    )
}

export default About