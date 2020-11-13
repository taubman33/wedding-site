import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
    return (


        <div className = "Nav">
        <div className="navbar-link">
                  <Link to= '/'><h4> • Home</h4> </Link>
                  </div>
            
                  <div className="navbar-link">
                  <Link to= '/photos'><h4> • Photos</h4> </Link>
                  </div>
               
                  <div className="navbar-link">
                  <Link to= '/registry'><h4> • Registry</h4> </Link>
                  </div>

                  <div className="navbar-link">
                  <Link to= '/info'><h4> • Information</h4> </Link>
                  </div>

        </div>
    )
}