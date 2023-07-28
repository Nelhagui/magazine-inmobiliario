import React from 'react'

function Carousel() {
  return (
    <div>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img src="https://staticbp.com/img/prop_new_b/510/00510896-02.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://staticbp.com/img/prop_new_b/510/00510896-03.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://staticbp.com/img/prop_new_b/510/00510896-02.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel