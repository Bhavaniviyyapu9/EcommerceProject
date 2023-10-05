import React from 'react'
import "./footer.css";
import Buynow from '../buynow/Buynow';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    
    <footer>
        <div className = "footer_container">
            <div className='footr_details_one'>
                <h3>Get to Know</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Ecommerce Cares</p>
            </div>

            <div className='footr_details_one'>
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>  
            </div>

            <div className='footr_details_one forres'>
                <h3>Make Money with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>

            <div className='footr_details_one forres'>
                <h3>Make Money with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>

        <div className='lastdetails'>
            <img src="https://cdn.dribbble.com/users/2948332/screenshots/5926397/4.jpg" alt=""/>
            <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
        </div>

    </footer>

    
    
    
  )
}

export default Footer
