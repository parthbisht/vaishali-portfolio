import React from 'react'
import p1 from '../assets/peakaboo/p1.gif'
import p2 from '../assets/peakaboo/p2.jpg'
import p3 from '../assets/peakaboo/p3.jpg'
import a1 from '../assets/peakaboo/a1.jpg'
import a2 from '../assets/peakaboo/a2.jpg'
import a3 from '../assets/peakaboo/a3.jpg'


export default function peakaboo() {
    return (
        <div style={{textAlign:"center"}} className="container">
        <img className='mb-5 img-fluid' alt='' width='650px' height='400px' src={p1} /> 
        <img className='mb-5 img-fluid' alt='' width='650px' height='400px' src={p2} />   
        <img className='mb-5 img-fluid' alt='' width='650px' height='400px' src={p3} />   
        <img className='mb-5 img-fluid' alt='' width='650px' height='400px' src={a1} />   
        <img className='mb-5 img-fluid' alt='' width='650px' height='400px' src={a2} />  
        <img className='mb-5 img-fluid' alt='' width='650px' height='400px' src={a3} />  


        </div>
    )
}
