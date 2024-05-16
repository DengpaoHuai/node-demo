import express from "express";
import moviesRouter from "./routers/movies.router.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/movies");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World 3 ");
});

app.use("/movies", moviesRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
