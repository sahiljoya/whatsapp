import mongoose from "mongoose";

export const connectDB = async (req,res)=>{
    const database = await mongoose.connect("mongodb+srv://product:7KTQbeEbk8575K9q@cluster0.fhesput.mongodb.net/whatsapp")
    console.log("database-----",database.connection.host)
}

export default connectDB;