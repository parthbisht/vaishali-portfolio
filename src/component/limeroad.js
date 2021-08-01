import React from 'react'
import lr1 from '../assets/limeroad/lr1.jpg'
import lr2 from '../assets/limeroad/lr2.jpg'
import lr3 from '../assets/limeroad/lr3.jpg'
import lr4 from '../assets/limeroad/lr4.jpg'
import lr5 from '../assets/limeroad/lr5.jpg'
import lr6 from '../assets/limeroad/lr6.jpg'
import lr7 from '../assets/limeroad/lr7.jpg'


export default function limeroad() {
    return (
        <div>
                <div style={{textAlign:"center"}} className="container">
        <img className='mb-5' alt=''  width='650px' height='400px' src={lr1} /> 
        <img className='mb-5' alt='' width='650px' height='400px' src={lr2} />   
        <img className='mb-5' alt='' width='650px' height='400px' src={lr3} />   
        <img className='mb-5' alt='' width='650px' height='400px' src={lr4} />   
        <img className='mb-5' alt='' width='650px' height='400px' src={lr5} />  
        <img className='mb-5' alt='' width='650px' height='400px' src={lr6} />  
        <img className='mb-5' alt='' width='650px' height='400px' src={lr7} />  


        </div>
        </div>
    )
}
