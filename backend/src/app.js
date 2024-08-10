import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import http from "http";
import { Server } from "socket.io";
import authRouter from './auth/authRouter.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';

config();


const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

app.use(express.json());

app.use(
    cors({
        credentials:true,
        origin: process.env.FRONTEND_URL,
    })
);


app.get("/", (req, res, next) => {
    res.json({ message: "Welcome to Disaster Management App Backend - Devloped By hackgeniuses" });
});

app.use('/api/v1/auth',authRouter)

app.use(globalErrorHandler);

export { server, io };