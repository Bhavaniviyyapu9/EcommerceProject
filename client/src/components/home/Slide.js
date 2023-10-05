import { Divider } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {products} from "./Productdata.js"
import "./slide.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Slide() {
  return (
    <div className='products_section'>
        <div className='products_deal'>
           <h3>Deal of the day</h3>
           <button className='view-btn'>view all</button>
        </div>

        <Divider/>

        <Carousel
            responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={true}
            showDots={false}
            centermode={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carasueal-container"
            >
                {
                    products.map((e)=>{
                        return(
                            <div className='product_items'>
                            <div className='product_img'>
                                <img src={e.url} alt='productitem'></img>
                            </div>
                            <p className='product_name'>{e.title.shortTitle}</p>
                            <p className='product_offer'>{e.discount}</p>
                            <p className='product_explore'>{e.tagline}</p>

                            </div>
                        )
                    })
                }


        </Carousel>

    </div>
  )
}
export default Slide