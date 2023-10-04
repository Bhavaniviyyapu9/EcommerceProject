import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css";

const data = [
    "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg?ts=1606113265",
    "https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHAVUFPG13p91jTPF8r1Fu33ozkq2yLnjlw&usqp=CAU"

]

function Banner() {
  return (
    <Carousel className='carasueal'
    autoPlay={true}
    amimation="slide"
    indicators={false}
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    navButtonsProps={
        {
            style:{
                backgroundcolor:"#fff",
                color: "#494949",
                borderRadious:0,
                marginTop:-22,
                height:"104px"

            }
        }
    }
    >
    {
        data.map((imag,i)=>{
            return (
                <>
                <img src={imag} alt="" className='banner_img'></img>
                </>
            
            )
        })
        
    }

</Carousel>
  )
}

export default Banner