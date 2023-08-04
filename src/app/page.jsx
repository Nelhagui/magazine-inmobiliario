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
       <div className={`${styles.header} d-flex mx-auto`} style={{background: "url('/header.png')"}}>
        <div className={`${styles.bgRgba} d-flex flex-column justify-content-center align-items-center text-light text-center`} >
          <div className={`${styles.titleHeader} `}>
            <h1 className={`${styles.titleh1}`}>Todo lo que necesitás para</h1>
            <h1 className={`${styles.titleh1} pb-2`}>tu <span>hogar</span> en <span>un solo click</span></h1>
            <p className={`${styles.headerp}`}>Usá nuestro <span>buscador</span> para encontrar <span>propiedades o servicios</span></p>
          </div>
          <Tabs/>
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
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className='px-3'>Propiedades Destacadas</h3>
            <div className='d-flex gap-2 align-items-center'>
              <p>Ver todas <FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon></p> 
              
            </div>
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
