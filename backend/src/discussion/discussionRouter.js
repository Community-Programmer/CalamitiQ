import express from "express";
import { createDiscussion, createreply, fetchDiscussion } from "./discussionController.js";
import authenticateUser from "../middlewares/authUser.js";





const discussionRouter = express.Router();

// Discussion Routes
discussionRouter.post("/",authenticateUser,createDiscussion);
discussionRouter.get("/",fetchDiscussion);
discussionRouter.post("/:id/replies",authenticateUser,createreply);


export default discussionRouter;
