const express= require ('express');
const mongoose= require("mongoose")
const app=express();

const bodyParser=require('body-parser');

//Used in PUT and POST method
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log("Service has started");
    
})
//Creating a Route 

//GET request
app.get("/",(req,res)=>{
    res.send("Welcome to the homepage")
    
    

})

//POST request can only be seen using a postman 
//Using a Body Parser to parse the data into the req.body object

app.post('/api/course',(req,res)=>{
    const {courseName,instructorName}=req.body;
    console.log(courseName)
    console.log(instructorName);
    res.send("Data Submitted"); 

})
require('./config/db')



