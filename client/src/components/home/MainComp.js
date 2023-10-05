import React from 'react'
import Banner from './Banner'
import "./home.css"
import Slide from './Slide'

function MainComp() {
  return (
    <div className='home_section'>
        <div className='banner-part'>
           <Banner/>
        </div>
       <Slide/>

    </div>
  )
}

export default MainComp