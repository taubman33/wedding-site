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
import P10 from '../photos/photo10.jpg'
import P11 from '../photos/IMG_0596.jpg'

export default function Photos () {
return (
    <div className="photo-album">
        <h1> photos</h1>


<div className="photo-container">
     <img src={P1} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>


<div className="photo-container">
     <img src={P2} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>

<div className="photo-container">
     <img src={P3} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>


<div className="photo-container">
     <img src={P4} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>

<div className="photo-container">
     <img src={P5} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>

<div className="photo-container">
     <img src={P6} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>


<div className="photo-container">
     <img src={P7} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>

<div className="photo-container">
     <img src={P8} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>

<div className="photo-container">
     <img src={P9} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>

<div className="photo-container">
     <img src={P10} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>

<div className="photo-container">
     <img src={P11} className="photo" id="auburnhair"/>
     <h3> Some text, some year</h3>
</div>


    </div>



)

}