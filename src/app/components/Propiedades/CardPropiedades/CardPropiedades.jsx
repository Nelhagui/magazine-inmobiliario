import React, { useEffect, useState } from 'react'
import "./cardPropiedades.css"
import Link from 'next/link';
import { faBath, faBed, faCar, faHouse, faRulerVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardPropiedades() {
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
        <div className='d-flex px-4 pt-3 justify-content-center' style={{ lineHeight: "20px" }}>
          <Link href="/propiedades/propiedad" className='propiedad-link'>
            <div className='d-flex bg-white justify-content-between gap-2 border propiedad-listado rounded'>
              <div className='image-container'>
                <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className='responsive-image' alt="imagen" />
              </div>
              <div className='d-flex flex-column justify-content-center p-1 '>
                <div className='d-flex gap-4 pt-1 ps-2'>
                  <h5 className='pt-2'>$ 100.000</h5>
                  <div className='d-flex flex-column border-start ps-3' style={{ lineHeight: "10px" }}>
                    <h5 className='pt-2 mb-3'>Av. Libertador al 1234</h5>
                    <p>Palermo, Capital Federal</p>
                  </div>
                </div>
                <div className='d-flex gap-3 pt-4 mb-0 pb-0'>
                  <p><FontAwesomeIcon icon={faRulerVertical} className='me-2' style={{width: "20px"}}/>182 m²</p>
                  <p><FontAwesomeIcon icon={faBath} className='me-2' style={{width: "20px"}}/>1 baño</p>
                  <p><FontAwesomeIcon icon={faHouse} className='me-2' style={{width: "20px"}}/>4 amb.</p>
                  <p><FontAwesomeIcon icon={faBed} className='me-2' style={{width: "20px"}}/>2 dorm.</p>
                  <div className='propiedades-icons gap-3'>
                    <p><FontAwesomeIcon icon={faCar} className='me-2' style={{width: "20px"}}/>1 coch.</p>
                  </div>
                </div>
                <h5 className='mt-0 pt-0'>Venta Local 182 m2 en Dome Business Plaza Italia</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium rem dolorum.</p>
                <div className='d-flex justify-content-end btn-container me-3'>
                  <button className='btn btn-red fw-medium px-3 py-2'>Contactar</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="card mx-4 mb-4 bg-white" style={{ width: "auto" }}>
          <Link href="/propiedades/propiedad">
            <img src="https://www.zonaprop.com.ar/noticias/wp-content/uploads/2016/08/depto.jpg" className="card-img-top" alt="imagen" />
            <div className="card-body">
              <div className='d-flex gap-5 pt-1'>
                <div className='d-flex flex-column' style={{ lineHeight: "10px" }}>
                  <h5 className='fs-5 pt-1'>$ 163.700</h5>
                  <h5 className='pt-2 mb-3'>Av. Libertador al 5000</h5>
                  <p>Belgrano, Capital Federal</p>
                </div>
              </div>
              <div className='d-flex gap-2 pt-3 '>
                <p><FontAwesomeIcon icon={faRulerVertical} className='me-2' style={{width: "20px"}}/>182 m²</p>
                <p><FontAwesomeIcon icon={faBath} className='me-2' style={{width: "20px"}}/>1 baño</p>
                <p><FontAwesomeIcon icon={faHouse} className='me-2' style={{width: "20px"}}/>4 amb.</p>
                <div className='propiedades-icons-sm'>
                  <p><FontAwesomeIcon icon={faBed} className='me-2' style={{width: "20px"}}/>2 dorm.</p>
                </div>
              </div>
              <h5 className='mt-1 mb-2'>Venta Local 192 m2 en Dome Business Plaza Belgrano Cochera Opcional</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium rem dolorum.</p>
              <div className='d-flex justify-content-end btn-container'>
                <button className='btn btn-red fw-medium px-3 py-2'>Contactar</button>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardPropiedades

