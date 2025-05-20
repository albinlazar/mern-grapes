import express from "express";

const app= express();
const port = 3000;
app.get("/test",(req,res)=>{
    res.send("success");
});
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
});
