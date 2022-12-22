import express from "express";

const app = express()
app.use(express.json())

app.listen(5000,(req,res)=>{
    console.log("ur server is connected")
})