import express from "express";
import  router  from "./routes/auth.route.js";
import mongoose from 'mongoose'


const app= express();
const port = 3000;
app.use(express.json())
app.use('/api/auth',router)
const string = "mongodb+srv://albincl128:albin@2004@jackerman.rludzjt.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=jackerman"

//app.get("/test",(req,res)=>{
//    res.send("success");
//});
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
});

mongoose.connect(string)
