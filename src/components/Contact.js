import React from 'react'
import {useState} from 'react'
import emailjs from "@emailjs/browser";
import emailkeys from '../emailkeys';
import swal from 'sweetalert';
import "./contact.css"

const Contact=()=>{
  const [input,setInput]=useState({
    nombre: "",
    apellido: "",
    email: "",
    phone: "",
    mensaje: "",
  })
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('input',input)
    emails(input.nombre,input.apellido,input.email,input.phone,input.mensaje)
  }



  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    console.log('como va guardando el input',input);
  }



const emails = async (nombre,apellido,email,phone,mensaje) => {
              
        var templateParams = {
          from_name: nombre,
          from_email: email,
          reply_to:email,
          message: `¡Hola! 👋
      
                    📢 ${nombre} Te  ha escrito el siguiente mensaje desde tu portfolio. 
                    ${mensaje}. 
                    nombre:${nombre}
                    apellido:${apellido}
                    telefono:${phone}
                  🐾🥰
      
                    Suerte!!!😉`,
        };
      
        emailjs
          .send(
            emailkeys.service_id,
            emailkeys.templateMp_id,
            templateParams,
            emailkeys.public_key
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              swal({
                text: "tu mensaje ha sido enviado, gracias!",
              });
              setInput({
                nombre: "",
                apellido: "",
                email: "",
                phone: "",
                mensaje: "",
              })
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      };
    return(
            
            <div className='container-fluid contactpage mt-0 mh-100'>
                <h1 className='textcontact p-5' ><u>Contactame!!...</u></h1>
                

            
            <form  onSubmit={(e)=>handleSubmit(e)}  className='row border border-warning border-5 rounded col-md-11 p-3 g-3 m-5  ms-5 justify-content-center'>
                <div className='col-md-6'>
                    <label  name='nombre' className='form-Label'>Nombre</label>
                    <input type='text' name='nombre' value={input.nombre}  onChange={(e) => handleChange(e)} className='form-control' id='nombre' required/>
                </div>
                <div className='col-md-6'>
                    <label  name='apellido' className='form-Label'>Apellido</label>
                    <input type='text' name='apellido'  value={input.apellido}  onChange={(e) => handleChange(e)}  className='form-control' id='apellido' required/>
                </div>
                <div className='col-md-8'>
                    <label  name='email' className='form-Label'>E-mail</label>
                    <input type='email' name='email' value={input.email}  onChange={(e) => handleChange(e)}  className='form-control' id='email' required/>
                </div>
                <div className='col-md-4'>
                    <label  name='phone' className='form-Label'>Telefono</label>
                    <input type='text' name="phone" value={input.phone}  onChange={(e) => handleChange(e)}  className='form-control' id='phone' placeholder='+54(351)3899755' />
                </div>
                <div className='col-md-12'>
                    <label  name='mensaje' className='form-Label'>Mensaje</label>
                    <textarea className='form-control' name='mensaje' value={input.mensaje}  onChange={(e) => handleChange(e)}  id='mensaje' required></textarea>
                </div>
                <div className='col-md-12'>
                    <button type='submit' className='btn btn-primary btn-submit'>Enviar</button>
                    
                </div>
            </form>
        </div>

    )
}

export default Contact