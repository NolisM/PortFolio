import React from 'react'
import Typed from "react-typed"
import cv from '../images/cv.png'

const Header = () => {
    return (
        <div className='headerpage d-flex justify-content-center align-items-center mb-5'>
            <div className='info text-center'>
                <p className='textheader'>Full Stack Web Developer</p>
                <h1 className="text-center  titleAbout">
                    Nolis Maldonado
                </h1>
                <Typed
                    className='typed_text text-transformer mt-3 mb-3'
                    strings={["Web Design", "Web Development", "FrontEnd Developer", "Backend Developer"]}
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