import express from "express";
import http from "http";
import { Server } from "socket.io";
import { CommentsController } from "./controllers/commentsController.js";

import cors from "cors";

const app = express();
app.use(cors("http://localhost:5173/"));
const server = http.createServer(app);

const io = new Server(server, {
  pingInterval: 2000,
  pingTimeout: 5000,
  cors: "http://localhost:5173",
});

const port = 5000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/comments", async (req, res) => {
  res.send(await CommentsController.get());
});

io.on("connection", async (socket) => {
  socket.on("newComment", async (body) => {
    io.emit("newComment", await CommentsController.new(body));
  });
});
