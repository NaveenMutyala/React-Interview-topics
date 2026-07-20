const express = require('express');
const axios = require('axios')
const {Worker} = require('worker_threads');


const app = express();
const port = process.env.PORT || 4000;

app.get("/photos",async (req, res)=>{
    console.log("photos end point hit");
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos"); 
    return res.json(data);
})


app.get("/non-blocking",(req, res)=>{
    const worker = new Worker("./worker.js");
    worker.on("message",(counter)=>{
        res.status(200).json({message:"This is a non blocking end point",counter});
    })

    return res.status(200).json({message:"This is a non blocking end point"});
})

app.get("/blocking",(req, res)=>{
    return res.status(200).json({message:"This is a blocking end point"});
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})