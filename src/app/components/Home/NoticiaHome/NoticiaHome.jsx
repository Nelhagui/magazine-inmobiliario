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
            <svg className="efecto-hover noticia-link" width="24" height="24" viewBox="0 0 24 24">
              <path 
                  d="M18,6 L6,12 L18,18"
                  stroke="#707a88"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
              />
              <circle cx="18" cy="6" r="3" fill="#707a88" />
              <circle cx="6" cy="12" r="3" fill="#707a88" />
              <circle cx="18" cy="18" r="3" fill="#707a88" />
            </svg>
            <a href="/blog/nota" className='noticia-link'>
                <svg className="efecto-hover" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16"> <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /> </svg>
            </a>
          </div>
        </div>
    </div>
  )
}

export default NoticiaHome