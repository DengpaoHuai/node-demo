import { Movie } from "../models/movie.schema.js";
import Joi from "joi";

export const getMovies = async (req, res) => {
  const movies = await Movie.find({});
  console.log(movies);
  res.json(movies);
};

export const createMovie = async (req, res) => {
  const movieRequest = Joi.object({
    title: Joi.string().required(),
    date: Joi.string().required(),
    rating: Joi.number().required(),
  });
  movieRequest.validate(req.body, (err) => {
    if (err) {
      res.status(400).send(err.details[0].message);
      return;
    }
  });

  const movie = new Movie(req.body);
  await movie.save();

  res.json(movie);
};

export const deleteMovie = async (req, res) => {
  const movieId = req.params.id;
  await Movie.findByIdAndDelete(movieId);

  res.json({
    message: "Movie deleted successfully",
  });
};
