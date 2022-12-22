import User from "../model/user.model.js";
import jwt from "jsonwebtoken"
export const Singup = async (req,res)=>{
   // res.send("yes")
    try{
        var isnumberexist = await User.findOne({Number:req.body.Number})
        if(isnumberexist){
            res.send({
                status:false,
                msg:"number is already exist",
                data:{}
            })
        }else{
         var data =(req.body)
          var otp = Math.floor(1000+Math.random()*9000)
         console.log("otp-----",otp)
         data.otp = otp
          
    var user = await User.create(req.body)
    if(user){
         user.token = await jwt.sign({time:Date,userId:10},"whatsapp")
        //res.send(token)
        res.send({
            status:true,
            msg:"singup succesfully",
            data:user
        })
    }
}
}catch(err){
    res.send({
        status:false,
        msg:"something wrong",
        data:err
    })
}
}



export const VerifyCode = async (req,res)=>{
    var checkNumber = await User.findOne({Number:req.body.Number,otp:req.body.otp})
    if(checkNumber){
     var numberverified = {}
     numberverified.Is_Number_Verified = true
     await User.findOneAndUpdate({Number:checkNumber.Number},numberverified)
     numberverified.Is_Number_Verified = true
     res.send({
        status:true,
        msg:"code verified succefully",
        data:checkNumber
     })
    }else{
        res.send({
            status:false,
            msg:"invalid number or otp given",
            data:{}
        })
    }
}

export const ResendCode = async (req,res)=>{
    var otp =  Math.floor(10000+Math.random()*900000)
    req.body.otp = otp
    var data = await User.findByIdAndUpdate({_id:req.body._id},req.body)
    data.otp = req.body.otp
    if(data){
        res.send({
            status:true,
            msg:"code send succefully",
            data:data
        })
    }else{
        res.send({
            status:false,
            msg:"resend code",
            data:{}
        })
    }
}