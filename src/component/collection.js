import React from 'react'
import gif from '../assets/reminisce/gif1.gif'
import gif2 from '../assets/Chinoiserie/GIF.gif'
import lr1 from '../assets/limeroad/lr1.jpg'
import p1 from '../assets/peakaboo/p1.gif'
import {Link} from 'react-router-dom'

export default function collection() {
    return (
        <div>
            <div className='container row'>
            <div className='col-sm-4'>
            <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={gif} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">REMINISCE</h5>
          <Link to='/reminisce' ><a href="#" className="btn btn-primary">Check in</a></Link>
        </div>
      </div>
      </div>
      <div className='col-sm-4'>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={gif2} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">CHINOISERIE </h5>
         <Link to='/chinoiserie'> <a href="#" className="btn btn-primary">Check in</a></Link>
        </div>
      </div>
      </div>
      <div className='col-sm-4'>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={p1} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">PEAK-A-BOO</h5>
         <Link to='/peakaboo'> <a href="#" className="btn btn-primary">Check in</a></Link>
        </div>
      </div>
      </div>
     
            </div>

            <div className='row'>
            <div className='col-sm-4'>
            <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={lr1} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">LIMEROAD</h5>
         <Link to='limeroad'> <a href="#" className="btn btn-primary">Check in</a></Link>
        </div>
      </div>
            </div>
            </div>
            

             
     
     
        </div>
    )
}
