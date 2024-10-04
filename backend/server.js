import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authroutes from "./routes/authroutes.js";
import messageroutes from "./routes/messageroutes.js";
import userrouter from "./routes/userroutes.js";

import connectTodb from "./db/connectTodb.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

// PORT = 8000;

app.use(cors({
  origin:['http://localhost:3000'],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userrouter);
app.get("/", (req, res) => {
  res.send("HEllo world");
});

server.listen(5000, () => {
  connectTodb();
  console.log(`server is running at  port`);
});
