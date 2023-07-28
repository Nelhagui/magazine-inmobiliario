"use client"

import React, { useEffect, useState } from 'react'
import "./propiedad.css"
import FormPropiedad from '../../components/Propiedad/FormPropiedad/FormPropiedad'
import PropiedadSimilar from '../../components/Propiedad/PropiedadSimilar/PropiedadSimilar'
import Carousel from '@/app/components/Propiedad/Carousel/Carousel'

function Propiedad() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        // Check the window width and set the state accordingly
        setIsDesktop(window.innerWidth >= 768);
      };
  
      // Set initial state based on window width on component mount
      handleResize();
  
      // Add event listener to update state when window is resized
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
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
                 <span className="material-symbols-outlined" style={{fontSize:"15px"}}>
                     arrow_forward_ios
                 </span>
                 <h6 className='my-auto'>Tristan Suarez</h6>
                 <span className="material-symbols-outlined" style={{fontSize:"15px"}}>
                     arrow_forward_ios
                 </span>
                 <h6 className='my-auto'>Casas en Tristan Suarez</h6>
             </div>
             <div className='d-flex justify-content-evenly'>
                 <div className='col-7'>
                     <Carousel/>
                     <div className='py-4 px-2'>
                         <h4 className='border-top border-bottom py-2'>U$D 30.000</h4>
                         <h5>Casa en Tristan Suarez</h5>
                         <p>Barrio Tranquilo, se respira a verde!!  OPORTUNIDAD!!</p>
                         <p>La casa es una construcción de material techo vigueta de características sencilla a la cual le faltan terminaciones  edificación sobre lote 10x30 con rejas al frente con entrada para auto y cercado en todo su perímetro  consta de 2 dormitorios amplios 4x4 mts2  y 3.4x 4 mts.2 baño totalmente equipado 2x1.5 mts.2 living  5 x 3.4 mts2 cocina comedor  3.3x3.4mts.2  y galeria cubierta de 7.6x 1.7 mts.2 en la parte trasera de la casa consta un pequeño galpón -------DOCUMENTACIÓN PERFECTA!!!!!!</p>
                     </div>
                     <div>
                         <h4>Ubicación</h4>
                         <p>Hernan Cortez 1258, Tristán Suárez</p>
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.787837283488!2d-58.51178013022461!3d-34.61814369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d1593c9e23%3A0x12bbcca2d4c0246f!2sAv.%20%C3%81lvarez%20Jonte%204543%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1689615880524!5m2!1ses-419!2sar" width="600" height="200" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                 </div>
                 <FormPropiedad/>
             </div>
             <div className='py-5'>
                 <h4 className='px-3 text-center'>Propiedades similares</h4>
                 <div className='d-flex gap-3 py-2 justify-content-center'>
                     <PropiedadSimilar/>
                     <PropiedadSimilar/>
                     <PropiedadSimilar/>
                 </div>
             </div>
         </div>
          ) : (
            <div>
            <div className='d-flex ps-3 py-2 align-items-center gap-2 fw-semibold small'>
                <h6 className='my-auto'>Inicio</h6>
                <span className="material-symbols-outlined" style={{fontSize:"15px"}}>
                    arrow_forward_ios
                </span>
                <h6 className='my-auto'>Tristan Suarez</h6>
                <span className="material-symbols-outlined" style={{fontSize:"15px"}}>
                    arrow_forward_ios
                </span>
                <h6 className='my-auto'>Casas en Tristan Suarez</h6>
            </div>
            <div className='d-flex flex-column px-2'>
                <Carousel/>
                <div className='py-4 px-2'>
                    <h4 className='border-top border-bottom py-2'>U$D 30.000</h4>
                    <h5>Casa en Tristan Suarez</h5>
                    <p>Barrio Tranquilo, se respira a verde!!  OPORTUNIDAD!!</p>
                    <p>La casa es una construcción de material techo vigueta de características sencilla a la cual le faltan terminaciones  edificación sobre lote 10x30 con rejas al frente con entrada para auto y cercado en todo su perímetro  consta de 2 dormitorios amplios 4x4 mts2  y 3.4x 4 mts.2 baño totalmente equipado 2x1.5 mts.2 living  5 x 3.4 mts2 cocina comedor  3.3x3.4mts.2  y galeria cubierta de 7.6x 1.7 mts.2 en la parte trasera de la casa consta un pequeño galpón -------DOCUMENTACIÓN PERFECTA!!!!!!</p>
                </div>
                <div className='d-flex flex-column px-3'>
                    <h4>Ubicación</h4>
                    <p>Hernan Cortez 1258, Tristán Suárez</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.787837283488!2d-58.51178013022461!3d-34.61814369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d1593c9e23%3A0x12bbcca2d4c0246f!2sAv.%20%C3%81lvarez%20Jonte%204543%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1689615880524!5m2!1ses-419!2sar"  width="330" height="200" className="mx-auto" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='pt-3 px-2 d-flex justify-content-center'>
                    <FormPropiedad/>
                </div>
            </div>
            <div className='py-5'>
                <h4 className='px-3 text-center'>Propiedades similares</h4>
                <div className='d-flex flex-wrap gap-3 py-2 justify-content-center'>
                    <PropiedadSimilar/>
                    <PropiedadSimilar/>
                    <PropiedadSimilar/>
                </div>
            </div>
        </div>
          )}
        </div>
      );
    };

export default Propiedad