import express from "express";
import moviesRouter from "./routers/movies.router.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import { Worker } from "worker_threads";
app.use(cors());

mongoose.connect("mongodb://localhost:27017/movies");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World 3 ");
});

app.get("/test", (req, res) => {
  const worker = new Worker("./worker.js");

  worker.on("message", (result) => {
    console.log(`Le résultat de la tâche longue est : ${result}`);
    res.status(200).json(result);
  });

  worker.postMessage("start");
});
app.use("/movies", moviesRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
