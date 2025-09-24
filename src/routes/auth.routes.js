import { Router } from "express";
import { checkEmail, createPassword, loginWithPassword,requestOTP,verifyOTP,requestForgotPassword,verifyForgotPasswordOtp,resetForgotPassword, logout, getCurrentUser } from "../controllers/auth.controllers.js";
import {authMiddleware} from '../middleware/auth.middleware.js'

const authRouter = Router();


//public routes
authRouter.post("/verify-email",checkEmail);
authRouter.post("/login-with-password",loginWithPassword);
authRouter.post("/login/request-otp", requestOTP);
authRouter.post("/login/verify-otp", verifyOTP);
authRouter.post("/create-password", createPassword);

//forgot password routes
authRouter.post("/forgot-password/request", requestForgotPassword);
authRouter.post("/forgot-password/verify", verifyForgotPasswordOtp);  //reset-token aayega isme bina token paass reset nahi hoga
authRouter.post("/forgot-password/reset", resetForgotPassword);

authRouter.get("/logout", logout);

authRouter.get('/current',getCurrentUser)

export default authRouter;