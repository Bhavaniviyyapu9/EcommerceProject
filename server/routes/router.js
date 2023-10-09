
const express = require("express");
const router = new express.Router(); 
const Products = require("../models/productSchema");
const USER=require("../models/userSchema");




router.get("/getproducts",async(req,res)=>{
    try {
        const productsdata= await Products.find();

        // console.log("console the data" + productsdata)
        res.status(201).json(productsdata);
        
    } catch (error) {
       
        console.log("error"+error.message);
    }
});

router.get("/getproductsone/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        // console.log(id);
        const individualdata = await Products.findOne({id:id})
        // console.log(individualdata + "individual data");
        res.status(201).json(individualdata);
    } catch (error) {
       res.status(400).json(individualdata) ;
       console.log("error" + error.message);
    }
});

// register data

router.post("/register",async(req,res)=>{
    console.log(req.body);
})


module.exports = router;