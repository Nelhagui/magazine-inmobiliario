import React from 'react'

function SidebarCategorias() {
    return (
        <div className='mt-3 border rounded masLeidos widget bg-white'>
            <div className='text-center'>
                <h3 className='fw-bold mb-0'>Categorías</h3>
                <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#e63946"></stop><stop offset="100%" stopColor="#FFA387"></stop></linearGradient></defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path></svg>
            </div>
            <ul>
                <li className='cat-item'>
                    <a href="/blog" className='efecto-hover'><i className="fa-solid fa-angle-right pe-3"></i>Casas</a>
                    <span className="widget-count">(2)</span>
                </li>
                <li className='cat-item'>
                    <a href="/blog" className='efecto-hover'><i className="fa-solid fa-angle-right pe-3"></i>Decoración</a>
                    <span className="widget-count">(2)</span>
                </li>
                <li className='cat-item'>
                    <a href="/blog" className='efecto-hover'><i className="fa-solid fa-angle-right pe-3"></i>Estilo de Vida</a>
                    <span className="widget-count">(2)</span>
                </li>
                <li className='cat-item'>
                    <a href="/blog" className='efecto-hover'><i className="fa-solid fa-angle-right pe-3"></i>Higiene</a>
                    <span className="widget-count">(2)</span>
                </li>
                <li className='cat-item'>
                    <a href="/blog" className='efecto-hover'><i className="fa-solid fa-angle-right pe-3"></i>Inmobiliarias</a>
                    <span className="widget-count">(2)</span>
                </li>
                <li className='cat-item'>
                    <a href="/blog" className='efecto-hover'><i className="fa-solid fa-angle-right pe-3"></i>Sin categoría</a>
                    <span className="widget-count">(2)</span>
                </li>
            </ul>
        </div>
    )
}

export default SidebarCategorias