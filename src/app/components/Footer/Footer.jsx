import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='d-flex flex-column justify-content-center align-items-center bg-white pt-5 pb-2'>
        <div className="social d-flex gap-3 py-2">
            <a href="#"><FontAwesomeIcon icon={faFacebook} className='fs-4'/></a>    
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} className='fs-4 fa-whatsapp '/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className='fs-4 fa-instagram'/></a>
        </div>
        <p className='mb-1 fw-medium'>Copyright © 2023 Magazine Inmobiliario.</p>
        <p>Desarrollado por <a href="https://github.com/romartinez927">Rosario Martínez</a></p>
    </footer>
  )
}

export default Footer