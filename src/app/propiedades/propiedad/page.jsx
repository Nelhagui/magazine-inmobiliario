"use client"

import React, { useEffect, useState } from 'react'
import "./propiedad.css"
import FormPropiedad from '../../components/Propiedad/FormPropiedad/FormPropiedad'
import PropiedadSimilar from '../../components/Propiedad/PropiedadSimilar/PropiedadSimilar'
import Carousel from '@/app/components/Propiedad/Carousel/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBath, faBed, faCar, faChevronCircleRight, faChevronRight, faHouse, faMapLocationDot, faRulerVertical } from '@fortawesome/free-solid-svg-icons'

function Propiedad() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 850);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div>
          {isDesktop ? (
             <div className='container-fluid pt-4'>
             <div className='d-flex ps-5 py-2 align-items-center gap-2'>
                 <h6 className='my-auto'>Inicio</h6>
                 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:"15px"}}/>
                 <h6 className='my-auto'>Tristan Suarez</h6>
                 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:"15px"}}/>
                 <h6 className='my-auto'>Casas en Tristan Suarez</h6>
             </div>
             <div className='d-flex justify-content-evenly'>
                 <div className='col-7'>
                     <Carousel/>
                     <div className='py-4 px-2'>
                         <h4 className='border-top border-bottom py-2'>U$D 30.000</h4>
                         <h5>Casa en Tristan Suarez</h5>
                         <div className='d-flex gap-3 pt-2'>
                            <p><FontAwesomeIcon icon={faRulerVertical} className='me-2' style={{ width: "20px" }} />182 m²</p>
                            <p><FontAwesomeIcon icon={faBath} className='me-2' style={{ width: "20px" }} />1 baño</p>
                            <p><FontAwesomeIcon icon={faHouse} className='me-2' style={{ width: "20px" }} />4 amb.</p>
                            <p><FontAwesomeIcon icon={faBed} className='me-2' style={{ width: "20px" }} />2 dorm.</p>
                            <p><FontAwesomeIcon icon={faCar} className='me-2' style={{ width: "20px" }} />1 coch.</p>
                         </div>
                         <p>Barrio Tranquilo, se respira a verde!!  OPORTUNIDAD!!</p>
                         <p>La casa es una construcción de material techo vigueta de características sencilla a la cual le faltan terminaciones  edificación sobre lote 10x30 con rejas al frente con entrada para auto y cercado en todo su perímetro  consta de 2 dormitorios amplios 4x4 mts2  y 3.4x 4 mts.2 baño totalmente equipado 2x1.5 mts.2 living  5 x 3.4 mts2 cocina comedor  3.3x3.4mts.2  y galeria cubierta de 7.6x 1.7 mts.2 en la parte trasera de la casa consta un pequeño galpón -------DOCUMENTACIÓN PERFECTA!!!!!!</p>
                     </div>
                     <div>
                         <h4>Ubicación</h4>
                         <p>Hernan Cortez 1258, Tristán Suárez</p>
                         <button className='btn-location'>
                            <FontAwesomeIcon icon={faMapLocationDot}/>
                        </button>
                     </div>

                 </div>
                 <div className='col-md-4 col-sm-10 form-prueba'>
                    <div className='mt-3 border rounded widget bg-white d-flex align-items-center justify-content-evenly' style={{padding: "15px"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp19TXD1dJBK0V7HJ7MO9fp5Mv4UIb2KJdBA&usqp=CAU" alt="" height="60"/>
                        <h4>Rocchio Propiedades</h4>
                    </div>
                    <FormPropiedad/>
                 </div>
                 
             </div>
             <div className='container-xl py-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className='ps-5'>Nuevos Ingresos</h3>
                    <div className='d-flex gap-2 align-items-center mt-3 pe-5 me-2 '>
                    <p className='text-dark'>Ver todas <FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon></p> 
                    </div>
                </div>
                <div className='d-flex flex-wrap py-2 justify-content-evenly'>
                    <PropiedadSimilar localidad={"José León Suárez"} precio={"85.000"} propiedad={"Casa"} img={"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}/>
                    <PropiedadSimilar localidad={"San Martín"} precio={"70.000"} propiedad={"Departamento"} img={"https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80"}/>
                    <PropiedadSimilar localidad={"Villa Ballester"} precio={"120.000"} propiedad={"Departamento"} img={"https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}/>
                </div>
            </div>
         </div>
          ) : (
            <div>
                <div className='d-flex flex-column px-2 pt-2'>
                    <div className='d-flex py-2 align-items-center gap-2'>
                        <h6 className='my-auto'>Inicio</h6>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:"15px"}}/>
                        <h6 className='my-auto'>Tristan Suarez</h6>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:"15px"}}/>
                        <h6 className='my-auto'>Casas</h6>
                    </div>
                    <Carousel/>
                    <div className='py-4 px-2'>
                        <h4 className='border-top border-bottom py-2'>U$D 30.000</h4>
                        <h5>Casa en Tristan Suarez</h5>
                        <div className='d-flex flex-wrap pt-2'>
                            <p className='me-3'><FontAwesomeIcon icon={faRulerVertical} className='me-2' style={{ width: "20px" }} />182 m²</p>
                            <p className='me-3'><FontAwesomeIcon icon={faBath} className='me-2' style={{ width: "20px" }} />1 baño</p>
                            <p className='me-3'><FontAwesomeIcon icon={faHouse} className='me-2' style={{ width: "20px" }} />4 amb.</p>
                            <p className='me-3'><FontAwesomeIcon icon={faBed} className='me-2' style={{ width: "20px" }} />2 dorm.</p>
                            <p className='me-3'><FontAwesomeIcon icon={faCar} className='me-2' style={{ width: "20px" }} />1 coch.</p>
                         </div>
                        <p>Barrio Tranquilo, se respira a verde!!  OPORTUNIDAD!!</p>
                        <p>La casa es una construcción de material techo vigueta de características sencilla a la cual le faltan terminaciones  edificación sobre lote 10x30 con rejas al frente con entrada para auto y cercado en todo su perímetro  consta de 2 dormitorios amplios 4x4 mts2  y 3.4x 4 mts.2 baño totalmente equipado 2x1.5 mts.2 living  5 x 3.4 mts2 cocina comedor  3.3x3.4mts.2  y galeria cubierta de 7.6x 1.7 mts.2 en la parte trasera de la casa consta un pequeño galpón -------DOCUMENTACIÓN PERFECTA!!!!!!</p>
                    </div>
                    <div className='d-flex flex-column px-3'>
                        <h4>Ubicación</h4>
                        <p>Hernan Cortez 1258, Tristán Suárez</p>
                        <button className='btn-location'>
                            <FontAwesomeIcon icon={faMapLocationDot}/>
                        </button>
                    </div>
                    <div className='pt-3 px-2 d-flex justify-content-center'>
                        <FormPropiedad/>
                    </div>
                </div>
            </div>
          )}
        </div>
      );
    };

export default Propiedad