import express from "express";
import connectDB from "./config/Db.js";
import UserRouter from "./route/user.route.js";
const app = express()
app.use(express.json())
connectDB()
app.use(UserRouter)
app.listen(5000,(req,res)=>{
    console.log("ur server is connected")
})