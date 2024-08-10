import express from "express";
import { getAIResponse } from "./chatBotController.js";



const chatBotRouter = express.Router();


// routes for chatbot
chatBotRouter.post("/getresponse", getAIResponse);



export default chatBotRouter;