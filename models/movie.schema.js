import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

export const Movie = mongoose.model("Movie", moviesSchema);
