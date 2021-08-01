import React from 'react'
import {Link} from 'react-router-dom'

export default function nav() {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul style={{margin:"auto"}} className="navbar-nav">
            <li className="nav-item active px-5">
             <Link to="/home"> <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item px-5">
              <Link to='/collection'><a className="nav-link" href="#">COLLECTION</a></Link>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link " href="#">BLOG</a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link " href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
