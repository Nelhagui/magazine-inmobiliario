import { ciudades, tiposPropiedad } from '@/app/data';
import React, { useState } from 'react'
import "./filtrosPropiedades.css"

function FiltrosPropiedades() {
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Ingrese su ciudad');
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Propiedad');
  return (
    <div className='d-flex justify-content-center gap-2 pt-3 pb-2'>
      <div className="dropdown d-flex justify-content-md-end justify-content-center ">
        <button className="dropdown-toggle filtros-propiedades" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {localidadSeleccionada}
        </button>
        <ul className="dropdown-menu">
          {
              ciudades.map(ciudad => (
                <li key={ciudad} >
                  <button className="dropdown-item" type="button">{ciudad}</button>
                </li>   
              ))
          }
        </ul>
      </div>
      <div className="dropdown d-flex justify-content-md-start justify-content-center ">
        <button className="dropdown-toggle filtros-propiedades" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {tipoSeleccionado}
        </button>
        <ul className="dropdown-menu">
          {
              tiposPropiedad.map(tipo => (
                <li key={tipo} >
                  <button className="dropdown-item" type="button">{tipo}</button>
                </li>  
              ))
            } 
        </ul>
      </div>
    </div>
  )
}

export default FiltrosPropiedades