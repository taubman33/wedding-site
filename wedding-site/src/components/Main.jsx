import React from 'react'
import { Route, Link } from 'react-router-dom'
import Photos from './Photos'
import Home from './Home'
import Reg from './Reg'
import Info from './Info'

export default function Main () {
return (

<div className="Main">


    <Route exact path ="/" component={Home}/>
    <Route exact path ="/photos" component={Photos}/>
    <Route exact path ="/registry" component={Reg}/>
    <Route exact path ="/info" component={Info}/>


</div>



)


}