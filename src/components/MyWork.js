import React from 'react'
import pidogs from '../images/pidogs.png'
import appclima from '../images/appclima.png'
import ecommerce from '../images/ecommerce.png'
import thumbails from '../images/thumbail.png'
import tourfy from '../images/Tourfy.png'
import estudio from '../images/estudio.png'
import "./mywork.css"

const MyWork = () => {
  return (

    <div className='carrousel' >

      <div className='text-center my-4'>
        <h1><u>Proyectos</u></h1>
      </div>
      <div className='ContentCard'>
        <div className='card'>
          <h1 className='nameProyect'>The Dogs</h1>
          <div className='coverCard'>
            <img src={pidogs} alt='' />
          </div>
          <p className='description'>Este Proyecto Individual fue realizado en #Henry. El cual consistía consumir datos de una Api externa de perros, buscarlos, filtrarlos u ordenarlos, mostrar detalles y crear perros nuevos, interactuando con una base de datos local.</p>
          <div className='footerCard'>
            <a href='https://vimeo.com/700141945' >Ver Demo</a>
            <a href='https://github.com/NolisM/Proyecto-Individual'>Repositorio</a>
          </div>
        </div>
        <div className='card'>
          <h1 className='nameProyect'>Api del Clima</h1>
          <div className='coverCard'>
            <img src={appclima} alt='' />
          </div>
          <p className='description'>Esta app consiste en consumir los datos de una Api Externa. En ella se puede buscar El clima de diferentes Ciudades filtrandolas por el nombre y una vez que no se requiere dicha informacion se puede eliminarla del listado.</p>
          <div className='footerCard'>
            <a href='https://vimeo.com/700143137/731e64b27b' >Ver Demo</a>
            <a href=''>Repositorio</a>
          </div>
        </div>
        <div className='card'>
          <h1 className='nameProyect'>PetShop</h1>
          <div className='coverCard'>
            <img src={ecommerce} alt='' />
          </div>
          <p className='description'>Utilizando React-Redux y Firebase, desarrollamos un Petshop con funcionalidades propias de un E-Commerce como seria el filtrado, búsqueda, compras mediante Mercado Pago, Reviews, etc. Que además, tiene incorporado un apartado para potenciar la adopción de mascotas, buscar una mascota perdida o publicar una que encontraste.</p>
          <div className='footerCard'>
            <a href='https://github.com/NolisM/PetShop'>Repositorio</a>
            <a href='https://petshop-35b9a.web.app'>Despliegue</a>
          </div>
        </div>
        <div className='card'>
          <h1 className='nameProyect'>Generador de Imagenes</h1>
          <div className='coverCard'>
            <img src={thumbails} alt='' />
          </div>
          <p className='description'>Desarrollé una aplicación web con Next.js y React.js que permite a los usuarios cargar una imagen y generar tres miniaturas rápidamente. La herramienta, estilizada con styled-components, es fácil de usar y no requiere conocimientos técnicos. Incorpora un sistema de autenticación seguro con Auth0 para proteger la información del usuario. Se utilizó Jest y React Testing Library para asegurar la calidad del código.</p>
          <div className='footerCard'>
            <a href='https://github.com/NolisM/sinapsis-code-challenge'>Repositorio</a>
            <a href='https://sinapsis-code-challenge-u71d.vercel.app'>Despliegue</a>
          </div>
        </div>
        <div className='card'>
          <h1 className='nameProyect'>Tourfy</h1>
          <div className='coverCard'>
            <img src={tourfy} alt='' />
          </div>
          <p className='description'>Como parte de un proyecto grupal en el curso de Codo a Codo, desarrollamos una página web interactiva con HTML5, CSS3 y JavaScript (ES6) para promover el turismo en Córdoba, Argentina. La página destaca destinos populares y promociones, obteniendo la información directamente de una base de datos gestionada con SQL. El backend fue desarrollado con Python y Flask, asegurando un manejo eficiente de los datos sin depender de servicios externos.</p>
          <div className='footerCard'>
            <a href='https://github.com/NolisM/Servicios-Random'>Repositorio</a>
            <a href='https://servicios-random.vercel.app/#inicio'>Despliegue</a>
          </div>
        </div>
        <div className='card'>
          <h1 className='nameProyect'>Estudio Juridico</h1>
          <div className='coverCard'>
            <img src={estudio} alt='' />
          </div>
          <p className='description'>En un proyecto grupal, desarrollamos una página web para un estudio jurídico utilizando Next.js, Tailwind CSS, Figma, TypeScript, MongoDB, Node.js, y Express. La web permite visualizar información del estudio, profesionales y servicios. Los usuarios pueden registrarse como cliente, administrador o abogado, y realizar gestiones como solicitar información de causas, ver noticias y agendar citas con abogados.</p>
          <div className='footerCard'>
            <a href='https://estudio-juridico-nolis.vercel.app/Inicio'>Despliegue</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork

