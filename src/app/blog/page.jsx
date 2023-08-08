import React from 'react'
import SidebarCategorias from '../components/Blog/SidebarCategorias/SidebarCategorias'
import SidebarNews from '../components/Blog/SidebarNews/SidebarNews'
import Noticia from '../components/Blog/Noticia/Noticia'
import { noticiasBlog } from '../data'
import Pagination from '../components/Pagination/Pagination'
import "./blog.css"

function Blog() {
  return (
    <div className="container-xl post-container pt-4 mx-auto">
    <div className="row gy-4">
      <div className="col-lg-8 col-md-7 mx-auto">
        <div className="row gy-4 d-flex justify-content-evenly gap-1">
          {
            noticiasBlog.map(({ title, img, text, category, date }, index) => {
              return (
                <Noticia key={index} title={title} date={date} img={img} text={text} category={category} />
              )
            })
          }
        </div>
        <Pagination />
      </div>
      <div className="col-lg-4 col-md-5 col-12 blog-sidebar">
        <SidebarCategorias/>
        <SidebarNews title="Últimas Noticias"/>
        <SidebarNews title="Las más Leídas"/>
      </div>
    </div>
  </div>
  )
}

export default Blog