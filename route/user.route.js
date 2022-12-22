import { ResendCode, Singup, VerifyCode } from "../controller/user.controller.js";
import Express from "express";

export const UserRouter = Express.Router()

UserRouter.route("/singup/user").post(Singup);
UserRouter.route("/verifycode/user").post(VerifyCode);
UserRouter.route("/resendcode/user").post(ResendCode);




export default UserRouter;