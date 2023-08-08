'use client'

import { faCouch, faHandshake, faHouseChimney, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import "./Tabs.css"
import Link from 'next/link'

function TabPropiedades() {
    const [operacionSeleccionada, setOperacionSeleccionada] = useState()
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState()
    const [ambienteSeleccionado, setAmbienteSeleccionado] = useState()
    const [tipoPropiedadSeleccionada, setTipoPropiedadSeleccionada] = useState()
    return (
        <form action="" className="formHeader rounded px-2 py-3 pe-2 mb-3 gap-2 mx-auto d-flex justify-content-evenly align-items-center gy-2"  >
            <div className="customSelectContainer ps-2" >
                <FontAwesomeIcon className="ps-1" icon={faLocationDot} />
                <select className="customSelect" aria-label="Default select example" value={localidadSeleccionada} defaultValue={"placeholder"} onChange={(e) => setLocalidadSeleccionada(e.target.value)}>
                    <option disabled value={"placeholder"}>Localidad</option>
                    <option value={"small"}>Villa Urquiza</option>
                    <option value={"big"}>San Martin</option>
                    <option value={"big"}>Palomar</option>
                </select>

            </div>
            <div className="customSelectContainer ps-2" >
                <FontAwesomeIcon className="ps-1" icon={faHouseChimney} />
                <select className="customSelect" aria-label="Default select example" value={tipoPropiedadSeleccionada} defaultValue={"placeholder"} onChange={(e) => setTipoPropiedadSeleccionada(e.target.value)}>
                    <option disabled value={"placeholder"}>Tipo de Propiedad</option>
                    <option value={"small"}>Casa</option>
                    <option value={"big"}>Departamento</option>
                    <option value={"big"}>Ph</option>
                </select>

            </div>
            <div className="customSelectContainer ps-2" >
                <FontAwesomeIcon className="ps-1" icon={faCouch} />
                <select className="customSelect" aria-label="Default select example" value={ambienteSeleccionado} defaultValue={"placeholder"} onChange={(e) => setAmbienteSeleccionado(e.target.value)}>
                    <option disabled value={"placeholder"}>Ambientes</option>
                    <option value={"small"}>Monoambiente</option>
                    <option value={"big"}>2 ambientes</option>
                    <option value={"big"}>3 ambientes</option>
                    <option value={"4"}>4 ambientes</option>
                    <option value={"5"}>5 o más ambientes</option>
                </select>

            </div>
            <div className="customSelectContainer ps-2" >
                <FontAwesomeIcon className="ps-1" icon={faHandshake} />
                <select className="customSelect" aria-label="Default select example" value={operacionSeleccionada} defaultValue={"placeholder"} onChange={(e) => setOperacionSeleccionada(e.target.value)}>
                    <option disabled value={"placeholder"}>Operación</option>
                    <option value={"small"}>Compra</option>
                    <option value={"big"}>Venta</option>
                    <option value={"big"}>Alquiler</option>
                </select>

            </div>
            <Link className="btn-red btn fw-semibold px-3 py-2" href="/propiedades">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 me-2' />
                Buscar
            </Link>
           
        </form>
    )
}

export default TabPropiedades