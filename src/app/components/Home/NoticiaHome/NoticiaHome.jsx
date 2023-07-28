import { faCircle, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function NoticiaHome(props) {
  return (
    <div className="card rounded-3 col-sm-6 col-3 px-0" style={{minWidth: "320px", maxWidth: "350px"}}>
        <div className="img-container">
          <a href="/blog" className="category-badge">{props.category}</a>
          <div className='border-top rounded-top'>
            <Link href="/blog/nota">
                <img src={props.img} className="card-img-top rounded-top" height="230" alt={props.title}/>
            </Link>
          </div>
        </div>
        <div className="card-body py-3 d-flex flex-column justify-content-between gap-1">
          <div className='d-flex justify-content-start gap-3'>
          <p className='my-1 noticia-autor fw-normal'>Katen Doe</p>
          <FontAwesomeIcon icon={faCircle} style={{ width: "4px" }} className="my-1" />
          <p className='my-1 noticia-autor fw-normal'>{props.date}</p>
          </div>
          <Link href="/blog/nota">
            <h5 className="card-title noticia-titulo mt-1 efecto-hover pb-1">{props.title}</h5>
          </Link>
          <div className='border-top d-flex justify-content-between pt-3'>
          <FontAwesomeIcon icon={faShareNodes} className='efecto-hover fs-4'/>
            <a href="/blog/nota" className='noticia-link'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots efecto-hover" viewBox="0 0 16 16"> <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /> </svg>
            </a>
          </div>
        </div>
    </div>
  )
}

export default NoticiaHome