import React from 'react'

function PropiedadSimilar() {
  return (
    <div className="card mb-2" style={{width: "auto", maxWidth: "350px"}}>
        <img src="https://www.zonaprop.com.ar/noticias/wp-content/uploads/2016/08/depto.jpg" className="card-img-top" alt="imagen"/>
        <div className="card-body">
            <h5 className='fs-5 pt-1'>$ 163.700</h5>
            <h5 className='mt-1 mb-2'>Venta Local en Dome Business Plaza Belgrano</h5>
            <p>Belgrano, Capital Federal</p>
            <div className='d-flex justify-content-end btn-container'>
                <button className='btn btn-home fw-medium px-3 py-2'>Contactar</button>
            </div>
        </div>
    </div>
  )
}

export default PropiedadSimilar