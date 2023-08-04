import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TabServicios() {
    return (
        <form action="" className="formHeader rounded py-3 mb-3 px-4 d-flex mx-auto justify-content-between gap-3">
            <div className='d-flex align-items-center' style={{width: "80%"}}>
                <input className="form-control w-100 customSelect py-3 ps-4" type="search" placeholder="Buscar Servicios..." aria-label="Search" />
            </div>
            <div>
                <button className="btn-red btn fw-semibold py-3 px-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 me-2' />
                    Buscar
                </button>
            </div>
        </form>
    )
}

export default TabServicios