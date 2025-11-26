import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { type MovieType, searchMovieById } from "../lib/movie";
import { MovieNotFound } from "../components/MovieNotFound";
import { MovieTopInfo } from "@/components/MovieTopInfo";
import { MovieTopPoster } from "@/components/MovieTopPoster";
import { MovieDetails } from "@/components/MovieDetails";

export const Movie = () => {

  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const [data, setData] = useState<MovieType>();
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const i = params.get("i");
    if (i) {
      getMovie(i);
    }
    else {
      navigate("/");
    }
  }, []);

  const getMovie = async (i: string) => {
    const m = await searchMovieById(i);
    if (m.Response === "True") {
      setData(m);
    }
    else {
      setNotFound(true);
    }
  }

  return (
    <div className="w-full h-full">

      {notFound && (
        <MovieNotFound />
      )}

      {data && (
        <div className="flex flex-col">

          <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-6xl">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <MovieTopPoster poster={data.Poster} />
                <MovieTopInfo data={data} />
                Sa
              </div>
            </div>
          </section>

          <section className="w-full max-w-6xl">
            <MovieDetails data={data} />
          </section>

        </div>
      )}

    </div>
  )
}