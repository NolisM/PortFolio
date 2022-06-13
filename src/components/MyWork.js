import React from 'react'
import pidogs from '../images/pidogs.png'
import appclima from '../images/appclima.png'
import ecommerce from '../images/ecommerce.png'
import "./mywork.css"

const MyWork=()=>{
    return(
      
      <div className='container-fluid carrousel'>

          <div className='text-center m-0'>
              <h1><u>Mis Proyectos</u></h1>
          </div>

          <div id="carouselExampleDark" className="carousel carousel-dark slide justify-content-center tamcarrousel border borded" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div>
                <img src={appclima} className="d-block w-100" alt="..."/>
                  
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='app'>Aplicacion del clima</h5>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div>
                  <img src={pidogs} className="d-block w-100" alt="..."/>

                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='app'>Proyecto Individual</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ecommerce} className="d-block w-100 " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='app'>Proyecto Grupal / E-commerce</h5>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className='mt-5'>
              <div className="row justify-content-evenly">
                  <div className="col-3  border border-warning rounded">
                    <h3><u>Aplicacion del clima</u></h3>
                    <p className="text-break">Esta app consiste en consumir los datos de una Api Externa. En ella se puede buscar El clima de diferentes Ciudades filtrandolas por el nombre y una vez que no se requiere dicha informacion se puede eliminarla del listado.</p>
                    <div className='demos'>
                      <a href='https://vimeo.com/700143137/731e64b27b' >Ver Demo</a>
                      <a href=''>Ir Github</a>

                    </div>
                  </div>
                  <div className="col-3  border border-warning rounded">
                  <h3><u>Proyecto Individual - The Dogs</u></h3>
                  <p>Este Proyecto Individual fue realizado en #Henry. El cual consistía consumir datos de una Api externa de perros, buscarlos, filtrarlos u ordenarlos, mostrar detalles y crear perros nuevos, interactuando con una base de datos local.</p>
                  <div className='demos'>
                      <a href='https://vimeo.com/700141945' >Ver Demo</a>
                      <a href='https://github.com/NolisM/Proyecto-Individual'>Ir Github</a>

                    </div>
                  </div>
                  <div className="col-3 colum border border-warning rounded md-4 overflow-auto">
                  <h3><u>Proyecto Grupal - E-commerce - Pet Shop</u></h3>
                  <p>Utilizando React-Redux y Firebase, desarrollamos un Petshop con funcionalidades propias de un E-Commerce como seria el filtrado, búsqueda, compras mediante Mercado Pago, Reviews, etc. Que además, tiene incorporado un apartado para potenciar la adopción de mascotas, buscar una mascota perdida o publicar una que encontraste.</p>
                  <div className='demos'>
                      <a href='https://www.youtube.com/watch?v=p41kBZhSRVg' >Ver Demo</a>
                      <a href='https://github.com/NolisM/PetShop'>Ir Github</a>
                      <a href='https://petshop-35b9a.web.app'>Ver Deploy</a>

                    </div>
                  </div>
               </div>
          </div>
      </div>
    )
}

export default MyWork