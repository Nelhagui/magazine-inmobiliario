'use client'

import styles from './page.module.css'
import { cajitas, noticias } from './data.js'
import Newsletter from './components/Home/NewsLetter/Newsletter'
import SobreNosotros from './components/Home/SobreNosotros/SobreNosotros'
import NoticiaHome from './components/Home/NoticiaHome/NoticiaHome'
import { faCouch, faHandHoldingDollar, faHandshake, faHouseChimney, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import PropiedadSimilar from './components/Propiedad/PropiedadSimilar/PropiedadSimilar'

export default function Home() {
  const [operacionSeleccionada, setOperacionSeleccionada] = useState()
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState()
  const [ambienteSeleccionado, setAmbienteSeleccionado] = useState()
  const [tipoPropiedadSeleccionada, setTipoPropiedadSeleccionada] = useState()
  return (
    <main className={styles.main}>
       <div className={`${styles.header} d-flex mx-auto`} style={{background: "url('/header.png')"}}>
        <div className={`${styles.bgRgba} d-flex flex-column justify-content-center align-items-center text-light text-center`} >
          <div className={`${styles.titleHeader} w-50`}>
            <h1 className="pb-2">Todo lo que necesitas para tu <span>hogar</span> en <span>un solo click</span></h1>
            <p>Usa nuestro <span>buscador</span> para encontrar <span>propiedades o servicios</span></p>
          </div>
          <div className="container-fluid" >
            <div className={`d-flex mx-auto`}>
              <div className={`${styles.bgTransparent} d-flex gap-4 px-4 pt-2 rounded-top-3`}>
                <h6>Propiedades</h6>
                <h6>Servicios</h6>
              </div>
            </div>
            <form action="" className={`${styles.header.form} rounded py-3 pe-2 mb-3 gap-3 mx-auto d-flex justify-content-center align-items-center gy-2`} >
              <div className={`${styles.customSelectContainer} ps-2`} >
                <FontAwesomeIcon icon={faLocationDot}/>
                <select className={`${styles.customSelect} pe-5`} aria-label="Default select example" value={localidadSeleccionada} defaultValue={"placeholder"} onChange={(e) => setLocalidadSeleccionada(e.target.value)}>
                  <option disabled value={"placeholder"}>Localidad</option>
                  <option value={"small"}>Compra</option>
                  <option value={"big"}>Venta</option>
                  <option value={"big"}>Alquiler</option>
                </select>
                
              </div>
              <div className={`${styles.customSelectContainer} ps-2`} >
                <FontAwesomeIcon icon={faHouseChimney}/>
                <select className={`${styles.customSelect} pe-5`} aria-label="Default select example" value={tipoPropiedadSeleccionada} defaultValue={"placeholder"} onChange={(e) => setTipoPropiedadSeleccionada(e.target.value)}>
                  <option disabled value={"placeholder"}>Tipo de Propiedad</option>
                  <option value={"small"}>Compra</option>
                  <option value={"big"}>Venta</option>
                  <option value={"big"}>Alquiler</option>
                </select>
                
              </div>
              <div className={`${styles.customSelectContainer} ps-2`}>
                <FontAwesomeIcon icon={faCouch}/>
                <select className={`${styles.customSelect} pe-5`} aria-label="Default select example" value={ambienteSeleccionado} defaultValue={"placeholder"} onChange={(e) => setAmbienteSeleccionado(e.target.value)}>
                  <option disabled value={"placeholder"}>Ambientes</option>
                  <option value={"small"}>Compra</option>
                  <option value={"big"}>Venta</option>
                  <option value={"big"}>Alquiler</option>
                </select>
                
              </div>
              <div className={`${styles.customSelectContainer} ps-2`}>
                <FontAwesomeIcon icon={faHandshake}/>
                <select className={`${styles.customSelect} pe-5`} aria-label="Default select example" value={operacionSeleccionada} defaultValue={"placeholder"} onChange={(e) => setOperacionSeleccionada(e.target.value)}>
                  <option disabled value={"placeholder"}>Operación</option>
                  <option value={"small"}>Compra</option>
                  <option value={"big"}>Venta</option>
                  <option value={"big"}>Alquiler</option>
                </select>
                
              </div>
              <button className={`${styles.btnRed} btn fw-semibold px-3 py-2`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='fs-6 me-2'/>
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
              <div className={`${styles.tags} d-flex flex-wrap justify-content-center gap-3 py-4`}>
                  {
                      cajitas.map(({title}, index) => {
                          return (
                              <a key={index} className={`${styles.tagsHome} px-3 py-2 fs-6`} href="/servicios">{title}</a>
                          )
                      })
                  }
              </div>
          </div>
      </div>
      <div className='container-xl py-5'>
          <div className='d-flex justify-content-between'>
            <h4 className='px-3'>Propiedades Destacadas</h4>
            <p>Ver todas</p>
          </div>
          <div className='d-flex flex-wrap gap-4 py-2 justify-content-center'>
              <PropiedadSimilar/>
              <PropiedadSimilar/>
              <PropiedadSimilar/>
          </div>
      </div>
      <div id="projects" className="cards-2 pt-2 pb-4 bg-light">
            <div className="container-fluid">
                <div className="d-flex flex-column text-center">
                    <h3 className="mb-1">Novedades y Tips</h3>
                    <p>Revisa las últimas novedades de nuestro blog.</p>
                </div>
                <div className="d-flex row gap-3 justify-content-center py-3 mx-1">
                    {
                        noticias.map(({img, title, date, text, category}, index) => {
                            return (
                              <NoticiaHome key={index} img={img} title={title} date={date} text={text} category={category}/>
                            )   
                        })
                    } 
                </div>
            </div> 
        </div>
      <Newsletter />
      <SobreNosotros/> 
    
    </main>
  )
}
