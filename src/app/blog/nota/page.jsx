"use client"

import React from 'react'
import SidebarTags from '../../components/Blog/SidebarTags/SidebarTags'
import SidebarCategorias from '../../components/Blog/SidebarCategorias/SidebarCategorias'
import SidebarNews from '../../components/Blog/SidebarNews/SidebarNews'
import "./nota.css"
import FormComentarios from '../../components/Blog/FormComentarios/FormComentarios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faPinterest, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Nota() {
  return (
    <div className='pt-4'>
    <div className='container pt-4'>
        <div className="row">
            <div className="col-md-8 col-lg-8 d-flex flex-column nota-main" style={{color:"#707a88"}}>
                <p className='fs-6 mb-2'>Magazine Inmobiliario / Culture / Feel Like A Pro With The Help Of These 7 Tips</p>
                <h1 className="fw-bold mb-2 title">Easy Ways To Learn Everything About Construction</h1>
                <div className="d-flex gap-2 py-1">
                    <div className='d-none gap-2 d-md-flex d-xl-flex'>
                        <p className="fs-6">Katen Doe</p>
                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: "4px", marginTop: "11px" }}/>
                    </div>
                    <p className="fs-6">Culture</p>
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "4px", marginTop: "11px" }}/>
                    <p className="fs-6">August 23, 2022</p>
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: "4px", marginTop: "11px" }}/>
                    <p className="fs-6 ms-1"><FontAwesomeIcon icon={faComment} />(0)</p>
                </div>
                <div style={{ width: "auto" }} className='pb-2'>
                    <img src="https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" className="rounded rounded-3" style={{ width: "100%" }} alt="" />
                </div>
                <div className="nota-text border-bottom mb-3 pb-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum perspiciatis sequi itaque reiciendis earum doloribus distinctio corporis quae, cum voluptatem deleniti adipisci molestias nobis sapiente, praesentium voluptatum voluptas cupiditate!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi quod rem modi eum sint. Iusto voluptate delectus, sapiente, facilis recusandae repellendus qui provident, harum cumque quae a excepturi distinctio.</p>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum perspiciatis sequi itaque reiciendis earum doloribus distinctio corporis quae, cum voluptatem deleniti adipisci molestias nobis sapiente, praesentium voluptatum voluptas cupiditate!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi quod rem modi eum sint. Iusto voluptate delectus, sapiente, facilis recusandae repellendus qui provident, harum cumque quae a excepturi distinctio.</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="share">
                        <p className="mb-1">Share this:</p>
                        <ul className="social-icons list-inline">
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            </li>
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                            </li>
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            </li>
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faPinterest}/></a>
                            </li>
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faTelegramPlane}/></a>
                            </li>
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                            </li>
                        </ul>
                    </div>
                    <div className="tags nota">
                        <a href="/">#Content</a>
                        <a href="/">#Image</a>
                        <a href="/">#Pic</a>
                    </div>
                </div>
                <div className='row nextprev-post-wrapper justify-content-between py-3 gy-2 px-2'>
                    <div className='col-md-5 col-12 nextprev-post prev border bg-white'>
                        <p className='mb-0'>Previous Post</p>
                        <h5 className='mt-1 efecto-hover'>How To Buy Bulb On a Tight Budget</h5>
                    </div>
                    <div className='col-md-5 col-12 nextprev-post next text-end border bg-white'>
                        <p className='mb-0'>Next Post</p>
                        <h5 className='mt-1 efecto-hover'>Your Light Is About To Stop Being Relevant</h5>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <h3 className='section-title'>Deja un comentario</h3>
                        <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#e63946"></stop>
                                    <stop offset="100%" stopColor="#FFA387"></stop>
                                </linearGradient>
                            </defs>
                            <path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path>
                        </svg>
                    </div>
                    <FormComentarios />
                </div>
            </div>
            <div className="col-md-4 col-lg-4 pt-5 nota-sidebar">
                <SidebarNews title="Últimas Noticias" />
                <SidebarCategorias />
                <SidebarTags/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Nota