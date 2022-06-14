import React from 'react'
import Typed from "react-typed"
import cv from '../images/cv.png'

const Header=()=>{
    return(
        <div className='headerpage d-flex justify-content-center align-items-center'>
            <div className='info text-center'>
                <p className='textheader'>Full Stack Web Developer</p>
                <Typed
                    className='typed_text text-transformer'
                    strings={["Web Design", "Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div>
                
                    <button className="btn-main  border bordered">
                    <a className='curriculum' href={cv} target="_blank" rel="noopener noreferrer" download="cv.png"> 
                    Descargar Curriculum Vitae
                    </a>
                    </button>
                
                </div>
                {/* <a href='#' className='btn-main contact-me'>Descargar Curriculum Vitae</a> */}
            </div>

        </div>
    )
}

export default Header