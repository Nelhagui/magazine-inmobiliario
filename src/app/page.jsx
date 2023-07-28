import Image from 'next/image'
import styles from './page.module.css'
import { cajitas, noticias } from './data.js'
import Newsletter from './components/Home/NewsLetter/Newsletter'
import SobreNosotros from './components/Home/SobreNosotros/SobreNosotros'
import NoticiaHome from './components/Home/NoticiaHome/NoticiaHome'

export default function Home() {
  return (
    <main className={styles.main}>
       <div className={`${styles.header} d-flex mx-auto`} style={{background: "url('/header.png')"}}>
        <div className={`${styles.bgRgba} d-flex flex-column justify-content-center align-items-center text-light text-center`} >
          <h1 className={`${styles.titleHeader} pb-2`}>Todo lo que necesitas para tu hogar</h1>
          <div className="container-fluid " >
            <form action="" className={`${styles.header.form} row rounded pb-2 pe-2 mb-3 mx-auto d-flex justify-content-center gy-2`} style={{backgroundColor: "rgba(234, 234, 234, 0.6)",}}>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control ps-4"
                  style={{paddingBlock: "12px", borderRadius: "25px"}}
                  placeholder="Ej, seguridad, alquiler, reparación"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className="form-control ps-4"
                  style={{paddingBlock: "12px", borderRadius: "25px"}}
                  placeholder="Tu barrio..."
                />
              </div>
              <button className={`${styles.btnRed} btn fw-semibold rounded-5 col-md-2`} style={{paddingBlock: "10px", maxWidth: "150px"}}>Buscar</button>
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
