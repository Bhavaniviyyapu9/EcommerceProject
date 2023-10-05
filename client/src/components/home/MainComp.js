import React from 'react'
import Banner from './Banner'
import "./home.css"
import Slide from './Slide'
// import "./slide.css";

function MainComp() {
  return (
    <div className='home_section'>
        <div className='banner_part'>
           <Banner/>
        </div>
        <div className='slide_part'>
           <div className='left_slide'>
           <Slide title="deal's of the day"/>
           </div>
             <div className='right_slide'>
             <h4  style={{marginTop:"80px",fontSize:"20px"}}>Festive launches latest</h4>
             <img style={{height:"450px"}} src="https://image4.slideserve.com/7707206/amazon-great-indian-festival-sale-2017-l.jpg" alt='...'></img>
             <a href='#'>see more</a>
           </div>
        </div>
        <br></br>
        <br></br>
        <div>
        <Slide title="today's deals"/>
        </div>
           <div className='center_img'>
           <img src='https://thegood.com/wp-content/uploads/image3-4-1024x583.png' alt='...'></img>
           </div>
       <Slide title="best sellers"/>
       <Slide title="up to 80% off"/>


    </div>
  )
}

export default MainComp