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
                danced by the beach, and caught fireworks over the ocean. Within 10 steps of walking and laughing together, Jeremy knew that he had found The One. 
                After a few seasons of travelling between Queens and Long Beach, a disaster at Jeremy's apartment brought the two together in the Spring of 2018. On November 7, 2020,
                the two went for a walk by the beach to enjoy the unseasonable warmth and sun. Just a few blocks from where they had first met, and had their first dance under the boardwalk streelights,
                Jeremy proposed to Alyssa. And for reasons he still can not fully understand, she said Yes.  </h3>
                </div>
         </div>
    </div>



)

}