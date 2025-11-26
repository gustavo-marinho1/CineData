import axios from "axios";
import { apikey } from "./api";

export type ItemSearch = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

type Search = {
  Response: boolean,
  Search: ItemSearch[],
  totalResults: number
}

export const searchMovies = async (s: string, p: number) => {
  try {
    const res = await axios.get(`https://www.omdbapi.com/?s=${s}&page=${p}&apikey=${apikey}`);
    return res.data as Search;
  }
  catch {
    return {
      Response: false,
      Search: [],
      totalResults: 0
    } as Search;
  }
}