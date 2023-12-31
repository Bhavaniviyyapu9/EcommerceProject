require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connection");

const Products = require("./models/productSchema");

const DefaultData =  require("./defaultdata")

app.use(express.json());


const cors = require("cors");
const router = require("./routes/router");



app.use(cors());
app.use(router);



const port = 9271;

app.listen(port,()=>{
    console.log('server is running on port number $(port)');
});


DefaultData();
