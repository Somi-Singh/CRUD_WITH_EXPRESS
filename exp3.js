const express=require("express");
const app=express();
app.get("/a",(req,res)=>{
    res.send("hello world");
});
app.get("/api/courses",(req,res)=>{
    res.send([1,2,3])
});
app.listen(5000,()=>console.log("listing on port 5000..."));