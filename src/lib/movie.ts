import axios from "axios";
import { apikey, type ApiError } from "./api";

type Rating = {
  Source: string,
  Value: string
}

export type MovieType = {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: Rating[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: string
}

export const searchMovieById = async (i: string) => {
  try {
    const res = await axios.get(`https://www.omdbapi.com/?i=${i}&apikey=${apikey}`);
    return res.data as MovieType | ApiError;
  }
  catch {
    return {
      Response: "False",
      Error: "Incorrect IMDb ID."
    } as ApiError;
  }
}