import React from 'react'
import P1 from '../photos/photo1.jpg'
import P2 from '../photos/photo2.jpg'
import P3 from '../photos/photo3.jpg'
import P4 from '../photos/photo4.jpg'
import P5 from '../photos/photo5.jpg'
import P6 from '../photos/photo6.jpg'
import P7 from '../photos/photo7.jpg'
import P8 from '../photos/photo8.jpg'
import P9 from '../photos/photo9.jpg'
import P10 from '../photos/IMG_0596.jpg'

export default function Photos () {
return (
    <div className="photo-album">
        <h2> Photos</h2>

 <div className="photo-container">
     <img src={P6} className="photo" alt ="image" id="shuffleboard"/>
     <h3> Shuffleboarding for Tucker's 30th birthday, Summer 2018</h3>
</div>


<div className="photo-container">
     <img src={P5} className="photo" alt ="image" id="timessquare"/>
     <h3> Seeing The Office! Off Broadway, Summer 2018</h3>
</div>


<div className="photo-container">
     <img src={P3} className="photo" alt ="image" id="castlelights"/>
     <h3> "Beauty and the Beast" Magic Kingdom, Disneyworld, 2018</h3>
</div>

<div className="photo-container">
     <img src={P2} className="photo" alt ="image" id="bridge"/>
     <h3> By the Mermaid at Verrazano Bridge park, late 2018</h3>
</div>

<div className="photo-container">
     <img src={P4} className="photo" alt ="image" id="talcottmt"/>
     <h3> Talcott Mountain, Simsbury CT, 2019</h3>
</div>


<div className="photo-container">
     <img src={P7} className="photo" alt ="image"  id="apples"/>
     <h3> The apple of my eye, Suffolk County, Fall 2019</h3>
</div>

<div className="photo-container">
     <img src={P1} className="photo" alt ="image" id="fire-island"/>
     <h3> Fire Island National Seashore, Fall 2020</h3>
</div>

<div className="photo-container">
     <img src={P9} className="photo" alt ="image" id="pumpkin"/>
     <h3> Pumpkin picking out in Suffolk County, Fall 2020</h3>
</div>

<div className="photo-container">
     <img src={P8} className="photo" alt ="image" id="beach1"/>
     <h3> On the beach, about 2 weeks before the engagement, Fall 2020</h3>
</div>


<div className="photo-container">
     <img src={P10} className="photo" alt ="image" id="auburnhair"/>
     <h3> She said yes! On the beach about 2000' from where we first met, November 7, 2020</h3>
</div>


    </div>



)

}