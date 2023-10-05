import { Divider } from '@mui/material';
import React from 'react'
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import "./buynow.css";


const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        <div className='left_buy'>
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className='leftbuyprice'>Price</span>
            <Divider/>

            <div className='item_container'>
                <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"></img>
                <div className='item_details'>
                    <h3>Molife Sense 500 Smartwatch  (Black Strap, Freesize)</h3>
                    <h3>Smart Watches</h3>
                    <h3 className='differentprice'>₹4049.00</h3>
                    <p className='unusuall'>Usually dispatched in 8 days.</p>
                    <p>Eligible for Free Shipping</p>
                    {/* <img src=""></img> */}
                    <Option/>
                </div>
                    <h3 className='item_price'>₹4049.00</h3>
            </div>
            <Divider/>
            <Subtotal/>
        </div>
        <Right/>
      </div>
    </div>
  )
}

export default Buynow
