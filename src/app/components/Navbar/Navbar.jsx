"use client"
import Link from "next/link";
import React, { useState } from "react";
import "./navbar.css"
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [visible, setVisible] = useState(false);
    
  const toggleDiv = () => {
    setVisible(!visible);
  }
  return (
    <nav id="nav-menu" className="container-fluid bg-white">
      <div className="row nav-border">
        <div className="d-none col-3 d-md-flex justify-content-center ">
          <a href="/" className="fw-700 my-auto logo">
            <img src="./logo.png" alt="Magazine Inmobiliario" width="140" placeholder="blur" blurdataurl={'./logo.png'} />
          </a>
        </div>
        <ul className="d-none col-9 d-md-flex justify-content-end my-auto">
          <li className="nav-item p-3">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" href="/blog">
              Blog
            </Link>
          </li>
          <li className="dropdownn p-3 nav-item">
            <a className="pruebaa nav-link">Ediciones</a>
            <ul className="dropdown-menuu">
              <li className="pt-2 pb-1">
                <a
                  className="dropdown-item text-dark"
                  href="http://magazineinmobiliario.com.ar/revista-online/2023/julio/"
                  target="_blank"
                >
                  Edición Julio 2023
                </a>
              </li>
              <li className="py-1 border-top">
                <a
                  className="dropdown-item text-dark"
                  href="http://magazineinmobiliario.com.ar/revista-online/2023/junio/"
                  target="_blank"
                >
                  Edición Junio 2023
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" href="/servicios">
              Servicios
            </Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" href="/propiedades">
              Propiedades
            </Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" href="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div className="mobile-toggler d-md-none text-end nav-border" style={{maxHeight: "55px"}}>
        <a className="d-md-none nav-border" data-bs-toggle="offcanvas" href="#mobile-nav" role="button" aria-controls="mobile-nav">
            <div className="hamburger-lines p-3">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div> 
            <label id="mobile-toggler-icon" className="hamburger">
              <div className="top-bun"></div>
              <div className="meat"></div>
              <div className="bottom-bun"></div>
            </label> 
          <div  className='menu-button p-3'></div>
        </a>
      </div>
      <div className="offcanvas offcanvas-end canvas nav-border" tabIndex="-1" id="mobile-nav" style={{ boxShadow: "-4px 0px 20px rgba(32,54,86,.1)" }}>
        <div className="offcanvas-header">
          <img src="./logo.png" width="180" alt="logo" placeholder="blur" blurdataurl={'./logo.png'} />
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body container pt-5">
          <div className="row">
            <ul className="d-flex flex-column canvas-menu">
              <li className="canvas-li" data-bs-dismiss="offcanvas">
                <Link className="nav-link" href="/" >Home</Link>
              </li>
              <li className="canvas-li" data-bs-dismiss="offcanvas">
                <Link className="nav-link" href="/blog" >Blog</Link>
              </li>
              <li className="canvas-li">
                <div className="d-flex justify-content-between me-3">
                  <Link className="nav-link" href="/">Ediciones</Link>
                  <FontAwesomeIcon icon={faAngleDown} onClick={toggleDiv} className="switch"/>
                </div>
                {
                  visible && (
                    <ul className="sub-menu d-flex flex-column gap-1">
                      <li className="menu-item pt-2 pb-1">
                        <a href="http://magazineinmobiliario.com.ar/revista-online/2023/julio/">Edición Julio 2023</a>
                      </li>
                      <li className="menu-item py-1">
                        <a href="http://magazineinmobiliario.com.ar/revista-online/2023/junio/">Edición Junio 2023</a>
                      </li>
                    </ul>
                  )

                }
              </li>
              <li className="canvas-li" data-bs-dismiss="offcanvas">
                <Link className="nav-link" href="/propiedades" >Propiedades</Link>
              </li>
              <li className="canvas-li" data-bs-dismiss="offcanvas">
                <Link className="nav-link" href="/servicios">Servicios</Link>
              </li>
              <li className="canvas-li" data-bs-dismiss="offcanvas">
                <Link className="nav-link" href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
