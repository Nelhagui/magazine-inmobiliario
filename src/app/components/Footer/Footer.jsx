import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className='d-flex flex-column justify-content-center align-items-center bg-white pt-5 pb-2'>
        <div className="social d-flex gap-3 py-2">
            <a href="#"><i className="fa-brands fa-whatsapp fs-4"></i></a>    
            <a href="#"><i className="fa-brands fa-instagram fs-4"></i></a>
            <a href="#"><i className="fa-brands fa-facebook fs-4"></i></a>
        </div>
        <p className='mb-1 fw-medium'>Copyright © 2023 Magazine Inmobiliario.</p>
        <p>Desarrollado por <a href="https://github.com/romartinez927">romartinez927</a></p>
    </footer>
  )
}

export default Footer