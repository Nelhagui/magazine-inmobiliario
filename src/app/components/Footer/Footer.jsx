import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='d-flex flex-column justify-content-center align-items-center bg-white pt-5 pb-2'>
      <div className="social d-flex gap-3 py-2">
        <a href="https://www.tiktok.com/@magazine.inmobiliario" target='_blank'><FontAwesomeIcon className="fs-4 text-dark" icon={faTiktok} /></a>
        <a href="https://www.facebook.com/people/Magazine-Inmobiliario/100064423220442/?paipv=0&eav=Afb_68nA_qNdngdquGytsH_u7zqz66SVIkKDX-yl2BFj_0CX5mddIvCd1fFutPzxscc&_rdr" target='_blank'><FontAwesomeIcon icon={faFacebook} className='fs-4' /></a>
        <a href="#"><FontAwesomeIcon icon={faWhatsapp} className='fs-4 fa-whatsapp ' /></a>
        <a href="https://www.instagram.com/apicemagazineinmobiliario/?hl=es-la" className='faInstagram' target='_blank'><FontAwesomeIcon icon={faInstagram} className='fs-4 faInstagram' /></a>
        <a href="https://www.youtube.com/channel/UCdanG5rtUJFehZ9zgZcGohg" target='_blank'><FontAwesomeIcon className="fs-4 faYoutube" icon={faYoutube} /></a>
      </div>
      <p className='mb-1 fw-medium'>Copyright © 2023 Magazine Inmobiliario.</p>
      <p>Desarrollado por <a href="https://github.com/romartinez927">Rosario Martínez</a></p>
    </footer>
  )
}

export default Footer