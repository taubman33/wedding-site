import React from 'react'
import P10 from '../photos/IMG_0596.jpg'

export default function () {
return (
    <div className="home">

        <h2> Welcome to our site!</h2>


        <div className="photo-container">
     <img src={P10} className="photo" id="auburnhair"/>

        </div>

        <div className="home-text-container">
        <div className="home-text">
            <h3> After a few weeks of chatting through the dating app Bumble, we had our first date in May of 2018, where we 
                danced by the beach and caught fireworks over the ocean. Within 10 steps of walking and laughing together, Jeremy knew that he had found The One. 
                
                <br/>
                After a few seasons of traveling between Queens and Long Beach, a fire at Jeremy's apartment brought the two closer together. In the Spring of 2018,
                 the two moved in together a few blocks from the beach (but if Michael or Anne Marie ask, they still sleep in separate rooms). On November 7, 2020,
                the couple went for a walk by the beach to enjoy the unusually warm and sunny afternoon. Just a few blocks from where they had first met and had their first dance under the boardwalk lights,
                Jeremy proposed to Alyssa. 
                <br/>
                And for reasons he still can not fully understand, she said Yes. 
                <br/>
                We plan to have a small ceremony for the immediate families sometime in 2021 or 2022, 
                with a celebration gathering sometime in the following year when able. </h3>
                </div>
         </div>
    </div>



)

}