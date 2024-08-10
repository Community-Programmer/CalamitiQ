import express from "express";
import path from "node:path";
import { createUser, loginUser } from "./authController.js";


const authRouter = express.Router();


// routes for authentication
authRouter.post("/signup", createUser);
authRouter.post("/login", loginUser);


export default authRouter;