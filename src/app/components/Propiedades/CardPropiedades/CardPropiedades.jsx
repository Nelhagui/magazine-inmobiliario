import React, { useEffect, useState } from 'react'
import "./cardPropiedades.css"
import { faBath, faBed, faCar, faHouse, faMapLocationDot, faRulerVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

function CardPropiedades(props) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 835);
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
        <div className='d-flex px-4 pt-3 justify-content-center' style={{ lineHeight: "20px" }}>
          <div className='d-flex bg-white justify-content-between border propiedad-listado rounded-4'>
            <div className='image-container'>
              <Link  href="/propiedades/propiedad">
                <img src={props.img} className='responsive-image' alt="imagen" style={{ maxWidth: "360px" }} />
              </Link>
            </div>
            <div className='cardPropiedades d-flex flex-column'>
              <Link className="nav-link" href="/propiedades/propiedad">
                <div className='cardPropiedadesUno'>
                  <div className='d-flex gap-4'>
                    <h5 className='cardPropiedadesTitle'>USD 80.000</h5>
                    <div className='d-flex flex-column border-start ps-3'>
                      <h5 className='cardPropiedadesTitle'>Av. Libertador al 1234</h5>
                      <p className='cardPropiedadesText'>Palermo, Capital Federal</p>
                    </div>
                  </div>
                  <div className='d-flex gap-3 pt-2 mb-0 pb-0'>
                    <p><FontAwesomeIcon icon={faRulerVertical} className='me-2' style={{ width: "20px" }} />182 m²</p>
                    <p><FontAwesomeIcon icon={faBath} className='me-2' style={{ width: "20px" }} />1 baño</p>
                    <p><FontAwesomeIcon icon={faHouse} className='me-2' style={{ width: "20px" }} />4 amb.</p>
                    <div className='propiedades-icons gap-3'>
                      <p><FontAwesomeIcon icon={faBed} className='me-2' style={{ width: "20px" }} />2 dorm.</p>
                      <p><FontAwesomeIcon icon={faCar} className='me-2' style={{ width: "20px" }} />1 coch.</p>
                    </div>
                  </div>
                  <div>
                    <h5 className='mt-0 pt-0 cardPropiedadesSubtitle'>Venta Local 182 m2 en Dome Business Plaza Italia</h5>
                    <p className='cardPropiedadesText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium rem dolorum.</p>
                  </div>
                </div>
              </Link>
              <div className='cardPropiedadesDos'>
                <div className='inmobiliaria-logo d-flex'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp19TXD1dJBK0V7HJ7MO9fp5Mv4UIb2KJdBA&usqp=CAU" alt="" />
                </div>
                <div className='cardPropiedadesContacto'>
                  <div className='d-flex gap-2'>
                    <button className='btn-location'>
                      <FontAwesomeIcon icon={faMapLocationDot}/>
                    </button>
                    <button className='btn-envelope'>
                      <FontAwesomeIcon icon={faEnvelope}/>
                    </button>
                    <button className='btn-wp fw-medium py-2'>
                      <FontAwesomeIcon icon={faWhatsapp} style={{ color: "white" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card mx-auto mb-4 bg-white" style={{ maxWidth: "700px", width:"100%"}}>
            <div className='image-container'>
              <Link className="nav-link" href="/propiedades/propiedad">
                <img src={props.img} className='responsive-image' alt="imagen" style={{maxHeight: "300px"}}/>
              </Link>
            </div>
            <div className="card-body">
              <Link className="nav-link" href="/propiedades/propiedad">
                <div className="d-flex justify-content-between">
                  <div className='d-flex gap-5 pt-1'>
                    <div className='d-flex flex-column' style={{ lineHeight: "10px" }}>
                      <h6 className='fs-5 pt-1'>USD 80.000</h6>
                      <h6 className='pt-2 mb-2'>Av. Libertador al 5000</h6>
                      <p>Belgrano, Capital Federal</p>
                    </div>
                  </div>
                  <div className='inmobiliaria-logo-mobile d-flex'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp19TXD1dJBK0V7HJ7MO9fp5Mv4UIb2KJdBA&usqp=CAU" alt="" />
                  </div>
                </div>
                <div className='d-flex gap-2 pt-1'>
                  <p><FontAwesomeIcon icon={faRulerVertical} className='me-2' style={{ width: "20px" }} />182 m²</p>
                  <p><FontAwesomeIcon icon={faBath} className='me-2' style={{ width: "20px" }} />1 baño</p>
                  <p><FontAwesomeIcon icon={faHouse} className='me-2' style={{ width: "20px" }} />4 amb.</p>
                  <div className='propiedades-icons-sm'>
                    <p><FontAwesomeIcon icon={faBed} className='me-2' style={{ width: "20px" }} />2 dorm.</p>
                  </div>
                </div>
                <h6>Venta Local 192 m2 en Dome Business Plaza Italia</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </Link>
              <div className='cardPropiedadesContacto'>
                <div className='d-flex gap-2'>
                  <button className='btn-location'>
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                  </button>
                  <button className='btn-envelope'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </button>
                  <button className='btn-wp fw-medium py-2'>
                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: "white" }} />
                  </button>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default CardPropiedades

