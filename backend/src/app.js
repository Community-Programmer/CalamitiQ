import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';


config();

const app = express();

app.use(
    cors({
        credentials:true,
        origin: process.env.FRONTEND_URL,
    })
);


app.get("/", (req, res, next) => {
    res.json({ message: "Welcome to Disaster Management App Backend - Devloped By hackgeniuses" });
});



export default app;