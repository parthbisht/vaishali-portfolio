import React from 'react'
import gif from '../assets/Chinoiserie/GIF.gif'
import c0 from '../assets/Chinoiserie/c0.gif'
import c1 from '../assets/Chinoiserie/c1.jpg'
import c2 from '../assets/Chinoiserie/c2.jpg'
import c4 from '../assets/Chinoiserie/c4.jpg'
import c5 from '../assets/Chinoiserie/c5.jpg'
import c6 from '../assets/Chinoiserie/c6.jpg'



export default function Chinoiserie() {
    return (
        
             <div style={{textAlign:"center"}} className="container">
        <img className='mb-5' width='650px' height='400px' src={gif} /> 
        <img className='mb-5' width='650px' height='400px' src={c0} />   
        <img className='mb-5' width='650px' height='400px' src={c1} />   
        <img className='mb-5' width='650px' height='400px' src={c2} />   
        <img className='mb-5' width='650px' height='400px' src={c4} />  
        <img className='mb-5' width='650px' height='400px' src={c5} />  
        <img className='mb-5' width='650px' height='400px' src={c6} />  


        </div>
    )
}
