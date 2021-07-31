import React from 'react'
import Nav from './nav';
import Crousel from './crousel';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Collection from './collection';
import Reminisce from './reminisce';
import Chinoiserie from './Chinoiserie';
import Limeroad from './limeroad';
import Peakaboo from './peakaboo';


export default function layout() {
    return (
        <div>
            
            <div className="jumbo jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="vaishali display-4">Vaishali <span className='bisht'>Bisht</span></h1>
                </div>
            </div>
        
            <Router>
            <Nav/>

        <Route path='/home'><Crousel/></Route>
        <Route path='/collection'><Collection/></Route>
        <Route path='/reminisce'><Reminisce/></Route>
        <Route path='/chinoiserie'><Chinoiserie/></Route>
        <Route path='/limeroad'><Limeroad/></Route>
        <Route path='/peakaboo'><Peakaboo/></Route>




        
      </Router>


        </div>
    )
}
