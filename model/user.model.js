import mongoose from "mongoose";


export const UserSchema = new mongoose.Schema({
    Number:{
        type:Number,
        required:true
    },
    otp:{
        type:Number,
        required:false 
    },
    name:{
        type:String,
        required:false
    },
    token:{
        type:String,
        required:false
    },
    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    },
    createAt:{
        type:Date,default:Date.now
    },
    updateAt:{
        type:Date,default:Date.now
    },
    Is_Number_Verified:{
        type:String,
        default:false
    }
})

const User = mongoose.model("users",UserSchema)

export default User