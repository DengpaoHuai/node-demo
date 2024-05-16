import { Router } from "express";
import { createMovie, getMovies } from "../controllers/movies.controller.js";

const router = Router();

router.get("/", getMovies);
router.post("/create", createMovie);

export default router;
