import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    Number: {
        type: Number,
        required: true
    },
    otp: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    token: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
}, { timestamps: true })
const User = mongoose.model("users", UserSchema)
export default User