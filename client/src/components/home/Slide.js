import { Divider } from '@mui/material';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { products } from "./Productdata.js";
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

  
  

const Slide = ({ title, products }) => {
 if(products){
  return (
    <div className='products_section'>

        <div className='products_deal'>
            <h3>{title}</h3>
            <button className='view_btn'>View All</button>
        </div>

        <Divider/>

        <Carousel

            responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={true}
            showDots={false}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            >
                {
                    products.map((e)=>{
                    
                        return(
                          
                            <div className='products_items'>
                            <div className='product_img'>
                                <img src={e.url} alt='productitem'></img>
                            </div>
                            <p className='products_name'>{e.title.shortTitle}</p>
                            <p className='products_offer'>{e.discount}</p>
                            <p className='products_explore'>{e.tagline}</p>

                            </div>
                            
                        )
                    })
                }

        </Carousel>

    </div>
)

} else {
      return (products); // Return null or some fallback content when products are not available
    }
}
export default Slide





// import { Divider } from '@mui/material';
// import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./slide.css";
// import { NavLink, useNavigate } from 'react-router-dom';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

// const Slide = ({ title, products }) => {
//   const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

//   if (products) {
//     return (
//       <div className='products_section'>
//         <div className='products_deal'>
//           <h3>{title}</h3>
//           <button className='view_btn'>View All</button>
//         </div>
//         <Divider/>
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           draggable={false}
//           swipeable={true}
//           showDots={false}
//           centerMode={true}
//           autoPlay={true}
//           autoPlaySpeed={4000}
//           keyBoardControl={true}
//           removeArrowOnDeviceType={["tablet", "mobile"]}
//           dotListClass="custom-dot-list-style"
//           itemClass="carousel-item-padding-40-px"
//           containerClass="carousel-container"
//         >
//           {products.map((e) => (
//             <NavLink to={`/getproductsone/${e.id}`} key={e.id}>
//               <div className='products_items'>
//                 <div className='product_img'>
//                   <img src={e.url} alt='productitem'></img>
//                 </div>
//                 <p className='products_name'>{e.title.shortTitle}</p>
//                 <p className='products_offer'>{e.discount}</p>
//                 <p className='products_explore'>{e.tagline}</p>
//               </div>
//             </NavLink>
//           ))}
//         </Carousel>
//       </div>
//     );
//   } else {
//     return (products); // Return null or some fallback content when products are not available
//   }
// };

// export default Slide;
