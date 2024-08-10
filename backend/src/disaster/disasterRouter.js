import express from "express";
import { addDisaster, getAllDisasters } from "./disasterController.js";
import authenticateAdmin from "../middlewares/authAdmin.js";



const disasterRouter = express.Router();


// routes for authentication
disasterRouter.get("/",  getAllDisasters);
disasterRouter.post("/",authenticateAdmin, addDisaster);


export default disasterRouter;