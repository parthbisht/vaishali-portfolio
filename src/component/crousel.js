import React from 'react'
import naini from '../assets/nainital.jpg'
import dow from '../assets/download.jpg'

export default function crousel() {
    return (
        <div>
             <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block " width='600px' src={naini} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block " width='600px' src={dow} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block " src="..." alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
        </div>
    )
}
