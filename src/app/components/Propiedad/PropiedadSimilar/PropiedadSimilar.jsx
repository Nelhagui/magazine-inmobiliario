import { faCouch, faHouseChimney, faLocationDot, faMagnifyingGlass, faRulerVertical, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./propiedadSimilar.css"

function PropiedadSimilar(props) {
  return (
    <div className="card mb-2" style={{width: "auto", maxWidth: "320px"}}>
        <img height="250" src={props.img} className="card-img-top propiedad-imagen" alt="imagen"/>
        <div className="card-body px-4 py-4">
            <div className='d-flex text-dark'>
              <FontAwesomeIcon icon={faHouseChimney} className='pe-2' style={{width: "20px"}}/>
              <p className='pe-2 text-dark' style={{fontSize: "14px"}}>{props.propiedad}</p>
              <FontAwesomeIcon icon={faLocationDot} className='pe-1' style={{width: "20px"}}/>
              <p className='pe-2 text-dark' style={{fontSize: "14px"}}>{props.localidad}</p>
            </div>
            <div className='d-flex text-dark'>
              <FontAwesomeIcon icon={faCouch} className='pe-2' style={{width: "18px"}}/>
              <p className='pe-3 text-dark' style={{fontSize: "14px"}}>3 Ambientes</p>
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter}  style={{height: "14px"}}/>
              <p className='pe-2 ps-1 text-dark ' style={{fontSize: "14px"}}>40 m²</p>
            </div>
            
            <div className='d-flex align-items-center justify-content-between'>
                <button className='btn btn-red fw-medium px-3 py-2'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 me-2' />
                  Más Info
                </button>
                <h5 className='fw-semibold text-dark pt-2 pe-1'>USD {props.precio}</h5>
            </div>
        </div>
    </div>
  )
}

export default PropiedadSimilar