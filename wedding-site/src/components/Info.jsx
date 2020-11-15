import React from 'react'
import P8 from '../photos/photo8.jpg'

export default function Info () {
    return (
        <div className ="Info"
         style={{paddingBottom:"3rem"}}>
         
            <h2> No information scheduled yet, check back for updates!</h2>
            <img src={P8} className="photo" alt ="image" id="infopic"/>
        </div>
 



    )
}