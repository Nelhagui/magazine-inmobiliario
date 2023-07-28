import Image from 'next/image'
import styles from './page.module.css'
import { cajitas, noticias } from './daja.js'

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
                                <p>{title}</p>
                            )   
                        })
                    } 
                </div>
            </div> 
        </div>

      <div className="ps-5 bg-light mb-0 py-3">
          <h3 className="mb-0">Sobre Nosotros</h3>
      </div>
      <div className="accordion-1 bg-light text-center px-5 pb-5">
          <div className="area-1 "></div>
          <div className="area-2  mx-auto">
              <div className="accordion text-start d-flex flex-column m-auto">
                  <p>Este año cumplimos 15 años, durante este tiempo pasó de todo, cambió el mundo, los avances de la tecnología nos han permitido lograr cosas que hubieran sido impensadas hace muy poco tiempo. </p>
                  <p>Junto con ella, se modificaron lo hábitos y las costumbres de la gente, desde reencontrarte con amigos a través de Facebook hasta avisar que estás en la puerta enviando un mensaje de whatsapp.</p>
                  <p>Hoy nuestro mundo es tan real como virtual y atentos a estos cambios y deseosos de seguir ayudando a nuestros clientes hemos comenzado una transformación que nos permitirá seguir un paso adelante brindando herramientas de comunicación cada vez más efectivas, enfocándonos en más y mejor contenido para estar cerca y ser útiles.</p>
                  <p>Nuestro formato Papel seguirá existiendo para continuar en contacto con el público específico que hace uso de él pero además comenzamos a explotar las posibilidades, alcance y llegada de nuestra web, las redes sociales y el canal de Youtube, que nos permiten multiplicar exponencialmente nuestros resultados transformándonos en un grupo de medios, para adaptarnos a cada usuario y sus necesidades.</p>
                  <p>Estamos evolucionando, para vos.</p>
              </div> 
          </div> 
      </div>  
    
    </main>
  )
}
