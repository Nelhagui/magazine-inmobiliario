import React from 'react'
import "./noticia.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faShareNodes } from '@fortawesome/free-solid-svg-icons'

function Noticia(props) {
    return (
        <div className="card rounded-3 col-sm-6 px-0 bg-white" style={{ maxWidth: "350px", height: "max-content", minWidth: "340px" }}>
            <div className="img-container">
                <a href="/" className="category-badge">{props.category}</a>
                <div className='border-top rounded-top'>
                    <Link href="/blog/nota" className='noticia-link'>
                        <img src={props.img} className="card-img-top rounded-top" height="230" width="550" alt={props.title} />
                    </Link>
                </div>
            </div>
            <div className="card-body d-flex flex-column gap-1">
                <div className='d-flex justify-content-start gap-3'>
                    <p className='my-1 noticia-autor fw-normal'>Katen Doe</p>
                    <FontAwesomeIcon icon={faCircle} className="my-1" style={{ width: "4px" }}/>
                    <p className='my-1 noticia-autor fw-normal'>{props.date}</p>
                </div>
                <Link href="/blog/nota" className='noticia-link'>
                    <h5 className="card-title noticia-titulo mt-1 efecto-hover">{props.title}</h5>
                </Link>
                <p className="card-text noticia-texto pb-1 fw-medium" style={{ fontSize: "1rem" }}>{props.text}</p>
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

export default Noticia