import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function TabServicios() {
    return (
        <form action="" className="formHeader rounded py-3 mb-3 px-4 d-flex mx-auto justify-content-between gap-3">
            <div className='tabServicios d-flex align-items-center'>
                <input className="form-control w-100 customSelect py-3 ps-4" type="search" placeholder="Buscar Servicios..." aria-label="Search" />
            </div>
            <div className='m-auto'>
                <Link className="btn-red btn fw-semibold px-3 py-2" href="/servicios">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 me-2' />
                    Buscar
                </Link>
            </div>
        </form>
    )
}

export default TabServicios