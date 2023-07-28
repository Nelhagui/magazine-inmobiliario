import React from 'react'
import "./cardServicios.css"

function CardServicios(props) {
  return (
    <div className="card rounded-3 col-sm-6 px-0" style={{maxWidth: "350px", height: "max-content", minWidth: "340px"}}>
        <div className="img-container">
          <a href="/" className="category-badge">{props.tag}</a>
          <div className='border-top rounded-top'>
            <a href="/servicios/servicio">
              <img src={props.img} className="card-img-top rounded-top" height="230" width="550" alt={props.title}/>
            </a>
          </div>
        </div>
        <div className="card-body-servicios d-flex flex-column gap-1 border-top">
          <p className='my-1 noticia-autor fw-normal'>{props.ciudad}</p>
          <a href="/servicios/servicio">
            <h4 className="card-title noticia-titulo mt-1 fw-bold efecto-hover">{props.title}</h4>
          </a>
          <p className="card-text noticia-texto pb-1 fw-medium" style={{fontSize: "1rem"}}>Desde 1970, trabajando con Seriedad, respeto y confianza.</p>
          <div className='border-top d-flex justify-content-between pt-3 px-1'>
            <div className='d-flex efecto-hover'>
              <i className="fa-solid fa-share-nodes fs-4 efecto-hover"></i>
            </div>
            <div className='d-flex efecto-hover'>
              <a href="/"><i className="fa-brands fa-whatsapp servicios fs-4"></i></a>    
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardServicios