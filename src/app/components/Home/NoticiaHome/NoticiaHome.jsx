import React from 'react'

function NoticiaHome(props) {
  return (
    <div className="card rounded-3 col-sm-6 col-3 px-0" style={{minWidth: "320px", maxWidth: "350px"}}>
        <div className="img-container">
          <a href="/blog" className="category-badge">{props.category}</a>
          <div className='border-top rounded-top'>
            <a href="/blog/nota">
                <img src={props.img} className="card-img-top rounded-top" height="230" alt={props.title}/>
            </a>
          </div>
        </div>
        <div className="card-body py-3 d-flex flex-column justify-content-between gap-1">
          <div className='d-flex justify-content-start gap-3'>
          <p className='my-1 noticia-autor fw-normal'>Katen Doe</p>
          <i className="fa-solid fa-circle my-auto" style={{fontSize:"4px"}}></i>
          <p className='my-1 noticia-autor fw-normal'>{props.date}</p>
          </div>
          <a href="/blog/nota">
            <h5 className="card-title noticia-titulo mt-1 efecto-hover pb-1">{props.title}</h5>
          </a>
          <div className='border-top d-flex justify-content-between pt-3'>
            <i className="fa-solid fa-share-nodes fs-5 efecto-hover"></i>
            <a href="/blog/nota" style={{color: "#707a88"}}>
                <i className="fa-solid fa-ellipsis fs-5 efecto-hover"></i>
            </a>
          </div>
        </div>
    </div>
  )
}

export default NoticiaHome