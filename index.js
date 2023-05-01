const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const route=require('./routes');

//creating dotenv
dotenv.config();

//connecting to DB
mongoose.connect(process.env.DB,{dbName:""});

app.use(express.json());


app.use('/',route);

app.listen(3000,()=>console.log('Server is Running'));
