import React from 'react'
import gif1 from '../assets/reminisce/gif1.gif'
import gif from '../assets/Chinoiserie/GIF.gif'
import p1 from '../assets/peakaboo/p1.gif'

export default function crousel() {
    return (
        <div className="m-5">
             <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div style={{textAlign:"center"}} className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block img-fluid " width='600px' height="400px" src={gif1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid " width='600px' height="400px" src={gif} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src={p1} height="400px" alt="Third slide" />
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
