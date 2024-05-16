import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getMovies,
} from "../controllers/movies.controller.js";

const router = Router();

router.get("/", getMovies);
router.post("/create", createMovie);
router.delete("/:id", deleteMovie);

export default router;
