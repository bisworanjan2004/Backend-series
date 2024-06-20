require('dotenv').config()

const express =require('express');
// import express from "express"; another way of writting the require methode
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/Service',(req,res)=>{
    res.send('Welcome to the service page');
});
app.get('/Hi',(req,res)=>{
    res.send("<h1>Hello Everyone!</h1>");
});

app.listen(process.env.PORT,()=>{
    console.log(`Example app listining on port ${port}`);
})