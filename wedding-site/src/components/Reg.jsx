import React from 'react'
import CB from '../photos/CB.png'
import AZ from '../photos/ama2.png'
import BB from '../photos/bbb.jpg'
import BD from '../photos/BD.png'

export default function Reg(){
return (

<div className ="registry">

    <h2> Links to our registry!</h2>

    <h3> Please note that dates were required for creating the registries, the date given is not our official wedding date!</h3>



<a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549646707?selectedRLVFilters=_recommended" target="_blank" alt="LIIcon">
  <img src={BB} className="linkIcon" />
</a>

<a href="https://www.amazon.com/wedding/registry/1WORU1UUDR1PA?ref=wr_search_page_result_" target="_blank" alt="LIIcon">
  <img src={AZ} className="linkIcon" />
</a>

<a href="https://www.crateandbarrel.com/gift-registry/alyssa-markowitz-and-jeremy-taubman/r6187644" target="_blank" alt="LIIcon">
  <img src={CB} className="linkIcon" />
</a>

<a href="https://www.bloomingdales.com/registry/wedding/guest/?registryId=7228348&cm_sp=BWEDD_Find_Registry-_-View_GVR-_-n#" target="_blank" alt="LIIcon">
  <img src={BD} className="linkIcon" />
</a>


</div>



)
}