import { ciudades, tiposPropiedad } from '@/app/data';
import React, { useState } from 'react'
import "./filtrosPropiedades.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function FiltrosPropiedades() {
    const [ambientesSeleccionado, setAmbientesSeleccionada] = useState('Ambientes');
    const [operacionSeleccionado, setOperacionSeleccionada] = useState('Operación');
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Localidad');
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Tipo de Propiedad');
  return (
    <div className='formHeader d-flex justify-content-center align-items-center mx-auto gap-2 pt-3 pb-2'>
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
      <div className="dropdown d-flex justify-content-md-end justify-content-center ">
        <button className="dropdown-toggle filtros-propiedades" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {ambientesSeleccionado}
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
          {operacionSeleccionado}
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
      <button className="btn-red btn fw-semibold px-3 py-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 me-2' />
          Buscar
      </button>
    </div>
  )
}

export default FiltrosPropiedades