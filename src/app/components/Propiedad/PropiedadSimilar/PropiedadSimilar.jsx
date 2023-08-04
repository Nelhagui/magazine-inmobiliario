import { faCouch, faHouseChimney, faLocationDot, faMagnifyingGlass, faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PropiedadSimilar() {
  return (
    <div className="card mb-2" style={{width: "auto", maxWidth: "320px"}}>
        <img height="250" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="imagen"/>
        <div className="card-body px-3 py-4">
            <div className='d-flex text-dark'>
              <FontAwesomeIcon icon={faLocationDot} className='pe-1' style={{width: "20px"}}/>
              <p className='pe-2 text-dark' style={{fontSize: "14px"}}>Departamento</p>
              <FontAwesomeIcon icon={faHouseChimney} className='pe-2' style={{width: "20px"}}/>
              <p className='pe-2 text-dark' style={{fontSize: "14px"}}>San Martin</p>
            </div>
            <div className='d-flex text-dark'>
              <FontAwesomeIcon icon={faCouch} className='pe-2' style={{width: "18px"}}/>
              <p className='pe-2 text-dark' style={{fontSize: "14px"}}>3 Ambientes</p>
              <FontAwesomeIcon icon={faRulerVertical}  style={{width: "20px"}}/>
              <p className='pe-2 text-dark' style={{fontSize: "14px"}}>40 m²</p>
            </div>
            
            <div className='d-flex align-items-center justify-content-between'>
                <button className='btn btn-red fw-medium px-3 py-2'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 me-2' />
                  Más Info
                </button>
                <h6 className='pt-1 fw-semibold text-dark'>USD 80.000</h6>
            </div>
        </div>
    </div>
  )
}

export default PropiedadSimilar