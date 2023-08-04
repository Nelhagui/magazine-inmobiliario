'use client'

import { faCouch, faHandshake, faHouseChimney, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import "./Tabs.css"

function TabPropiedades() {
    const [operacionSeleccionada, setOperacionSeleccionada] = useState()
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState()
    const [ambienteSeleccionado, setAmbienteSeleccionado] = useState()
    const [tipoPropiedadSeleccionada, setTipoPropiedadSeleccionada] = useState()
    return (
        <form action="" className="formHeader rounded py-3 pe-2 mb-3 gap-2 mx-auto d-flex justify-content-evenly align-items-center gy-2"  >
            <div className="customSelectContainer ps-2" >
                <FontAwesomeIcon icon={faLocationDot} />
                <select className="pe-5 customSelect" aria-label="Default select example" value={localidadSeleccionada} defaultValue={"placeholder"} onChange={(e) => setLocalidadSeleccionada(e.target.value)}>
                    <option disabled value={"placeholder"}>Localidad</option>
                    <option value={"small"}>Villa Urquiza</option>
                    <option value={"big"}>Venta</option>
                    <option value={"big"}>Alquiler</option>
                </select>

            </div>
            <div className="customSelectContainer ps-2" >
                <FontAwesomeIcon icon={faHouseChimney} />
                <select className="pe-5 customSelect" aria-label="Default select example" value={tipoPropiedadSeleccionada} defaultValue={"placeholder"} onChange={(e) => setTipoPropiedadSeleccionada(e.target.value)}>
                    <option disabled value={"placeholder"}>Tipo de Propiedad</option>
                    <option value={"small"}>Compra</option>
                    <option value={"big"}>Venta</option>
                    <option value={"big"}>Alquiler</option>
                </select>

            </div>
            <div className="customSelectContainer ps-2" >
                <FontAwesomeIcon icon={faCouch} />
                <select className="pe-5 customSelect" aria-label="Default select example" value={ambienteSeleccionado} defaultValue={"placeholder"} onChange={(e) => setAmbienteSeleccionado(e.target.value)}>
                    <option disabled value={"placeholder"}>Ambientes</option>
                    <option value={"small"}>Compra</option>
                    <option value={"big"}>Venta</option>
                    <option value={"big"}>Alquiler</option>
                </select>

            </div>
            <div className="customSelectContainer ps-2" >
                <FontAwesomeIcon icon={faHandshake} />
                <select className="pe-5 customSelect" aria-label="Default select example" value={operacionSeleccionada} defaultValue={"placeholder"} onChange={(e) => setOperacionSeleccionada(e.target.value)}>
                    <option disabled value={"placeholder"}>Operación</option>
                    <option value={"small"}>Compra</option>
                    <option value={"big"}>Venta</option>
                    <option value={"big"}>Alquiler</option>
                </select>

            </div>
            <button className="btn-red btn fw-semibold px-3 py-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 me-2' />
                Buscar
            </button>
        </form>
    )
}

export default TabPropiedades