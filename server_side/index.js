require('dotenv').config();

//import express from 'express';
//import cors from 'cors';
//import mongoose from 'mongoose';


const express = require("express");
//const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
//import 'dotenv/config'
// middleware
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose
//MONGODB_URL='mongodb+srv://s19420:ikkFdlU4siScn7zo@webproject1.nzdhc.mongodb.net/'
mongoose
  .connect(
   // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@domo-foodi-client.eqs1v9d.mongodb.net/demo-foodi-client?retryWrites=true&w=majority`
 MONGODB_URL='mongodb+srv://s19420:ikkFdlU4siScn7zo@webproject1.nzdhc.mongodb.net/'

 
  )
  .then(
    console.log("MongoDB Connected Successfully!")
  )
  .catch((error) => console.log("Error connecting to MongoDB", error));

  


//   import routes here
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
const { default: userRouter } = require("./api/routes/userRoutes");
//const userRoutes = require('./api/routes/userRoutes')
app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes);
app.use('api/routes/users', userRouter);


app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
