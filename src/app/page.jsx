import styles from './page.module.css'
import { cajitas, noticias } from './data.js'
import Newsletter from './components/Home/NewsLetter/Newsletter'
import SobreNosotros from './components/Home/SobreNosotros/SobreNosotros'
import NoticiaHome from './components/Home/NoticiaHome/NoticiaHome'
import PropiedadSimilar from './components/Propiedad/PropiedadSimilar/PropiedadSimilar'
import Tabs from './components/Home/Tabs/Tabs'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

  return (
    <main className={styles.main}>
       <div className={`${styles.header} d-flex mx-auto`}>
        <img className={styles.imgHeader} src="/header.png" alt="" />
        <div className={`${styles.bgRgba}`} >
          <div className={`${styles.titleHeader} `}>
            <h1 className={`${styles.titleHeaderh1}`}>Todo lo que necesitás para</h1>
            <h1 className={`${styles.titleHeaderh1} pb-2`}>tu <span>hogar</span> en <span>un solo click</span></h1>
            <p className={`${styles.headerp}`}>Usá nuestro <span>buscador</span> para encontrar <span>propiedades o servicios</span></p>
          </div>
          <Tabs/>
        </div>
      </div>
      <div className="container" >
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
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className='ps-5'>Nuevos Ingresos</h3>
            <div className='d-flex gap-2 align-items-center mt-3 pe-5 me-2 '>
              <p className='text-dark'>Ver todas <FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon></p> 
            </div>
          </div>
          <div className='d-flex flex-wrap py-2 justify-content-evenly'>
              <PropiedadSimilar localidad={"José León Suárez"} precio={"85.000"} propiedad={"Casa"} img={"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}/>
              <PropiedadSimilar localidad={"San Martín"} precio={"70.000"} propiedad={"Departamento"} img={"https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80"}/>
              <PropiedadSimilar localidad={"Villa Ballester"} precio={"120.000"} propiedad={"Departamento"} img={"https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}/>
          </div>
      </div>
      <div id="projects" className="cards-2 pt-2 pb-4 bg-light">
            <div className="container-fluid container-xl">
                <div className="d-flex flex-column ps-5 pt-2">
                    <h3 className="mb-1">Nuestro Blog de Notas</h3>
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
