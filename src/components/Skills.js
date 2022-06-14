import React from 'react'
import github from '../images/github.png'
import javascript from '../images/javascript.png'
import html from '../images/html.png'
import css3 from '../images/css3.png'
import node from '../images/Node.png'
import icreact from '../images/icreact.png'
import redux from '../images/redux.png'
import express from '../images/express.png'
import sequelize from '../images/sequelize.png'
import psql from '../images/psql.png'
import firebase from '../images/firebase.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'
import './Skills.css'

const Skills=()=>{
    return(
        <div className='container-fluid skills '>

       
            <div>
                <h1 className='text-center titleskills'><u>Mis Skills.</u></h1>
            </div>

            <div className="text mt-5 ">
                <h1 className="soft justify-content-center p-5" >Soft Skills</h1>
               
                <div className="row  iconsskills">
                    <div className="col">
                    <FontAwesomeIcon className='icon'  icon={faSpa} style={{color:'orange'}} />
                    Responsabilidad 
                    </div>
                    <div className="col">
                    <FontAwesomeIcon className='icon' icon={faSpa} style={{color:'orange'}} />
                    Trabajo en equipo
                    </div>
                    <div className="col">
                    <FontAwesomeIcon className='icon' icon={faSpa} style={{color:'orange'}} />
                    Autonomía
                    </div>
                    
                </div>
                <div class="row  iconsskills">
                    <div class="col">
                    <FontAwesomeIcon className='icon' icon={faSpa} style={{color:'orange'}} />
                    Actitud positiva 
                    </div>
                    <div class="col">
                    <FontAwesomeIcon className='icon' icon={faSpa} style={{color:'orange'}} />
                    Tolerancia a la presión
                    </div>
                    <div class="col">
                    <FontAwesomeIcon className='icon' icon={faSpa} style={{color:'orange'}} />
                    Capacidad Resolutiva
                    </div>
                    
                </div>
                <div class="row  iconsskills">
                    <div class="col">
                    <FontAwesomeIcon className='icon' icon={faSpa} style={{color:'orange',}} />
                    Empatía
                    </div>
                    <div class="col">
                    <FontAwesomeIcon className='icon' icon={faSpa} style={{color:'orange'}} />
                    Respeto a las opiniones
                    </div>
                    <div class="col">
                    <FontAwesomeIcon className='icon' icon={faSpa} style={{color:'orange'}} />
                    Resiliencia
                    </div>
                </div>
            </div>

            <div className="text mt-5 ">
                <h1 className="soft p-5">Tech Skills</h1>
                <div className='imgskills  w-100 justify-content-between '>
                    <div className='fondoimg'>
                        <img src={javascript} className="img-rounded imgS "   alt="..."/>
                        <h5 className='nameskills'>javascript</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={html} className="img-rounded imgS "   alt="..."/>
                        <h5 className='nameskills'>Html</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={css3} className="img-rounded imgS"   alt="..."/>
                        <h5 className='nameskills'>Css3</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={node} className="img-rounded imgS "   alt="..."/>
                        <h5 className='nameskills'>Node</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={icreact} className="img-rounded imgS "   alt="..."/>
                        <h5 className='nameskills'>React</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={redux} className="img-rounded imgS"   alt="..."/>
                        <h5 className='nameskills'>Redux</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={express} className="img-rounded imgS"  alt="..."/>
                        <h5 className='nameskills'>Express</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={sequelize} className="img-rounded imgS"   alt="..."/>
                        <h5 className='nameskills'>Sequelize</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={psql} className="img-rounded imgS"   alt="..."/>
                        <h5 className='nameskills'>PostgreSQL</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={firebase} className="img-rounded imgS"   alt="..."/>
                        <h5 className='nameskills'>Firebase</h5>
                    </div>
                    <div className='fondoimg'>
                        <img src={github} className="img-rounded imgS"   alt="..."/>
                        <h5 className='nameskills'>Github</h5>
                    </div>

                </div>
                
            </div>
        </div>
       
    )
}

export default Skills