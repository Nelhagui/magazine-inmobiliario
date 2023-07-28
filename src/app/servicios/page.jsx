import React from 'react'
import { servicios } from '../data'
import CardServicios from '../components/Servicios/CardServicios/CardServicios'
import Pagination from '../components/Pagination/Pagination'
import "./servicios.css"

function Servicios() {
  return (
    <div className='pt-2 container-xl'>
        <div className='align-items-center justify-content-between px-4 servicios-header'>
            <div className='servicios-title d-flex flex-column'>
                <h3 className='mb-0 '>Servicios</h3>
                <svg className='mb-2' width="33" height="6" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#e63946"></stop><stop offset="100%" stopColor="#FFA387"></stop></linearGradient></defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path></svg>
            </div>
            <div className='search-box pt-4 rounded'>
                <form className="d-flex search-form" role="search">
                    <input className="form-control me-2 search-text" type="search" placeholder="Search" aria-label="Search" />
                    <button className="search-button mt-4" type="submit">Buscar</button>
                </form>
            </div>
        </div>
        <div className="container-fluid">
            <div className='d-flex row gap-3 justify-content-center py-3 mx-1'>
                {
                    servicios.map(({img, title, tag, ciudad}, index) => {
                        return (
                            <CardServicios key={index} img={img} title={title} tag={tag} ciudad={ciudad}/>
                        )   
                    })
                } 
            </div>
        </div>
        <Pagination/>
    </div>
  )
}

export default Servicios