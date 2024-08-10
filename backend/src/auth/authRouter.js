import express from "express";
import path from "node:path";
import { createUser, loginUser, logoutUser, verifyUser } from "./authController.js";


const authRouter = express.Router();


// routes for authentication
authRouter.post("/signup", createUser);
authRouter.post("/login", loginUser);
authRouter.post("/verify", verifyUser);
authRouter.post("/logout", logoutUser);


export default authRouter;