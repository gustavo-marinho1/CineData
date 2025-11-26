import type { MovieType } from "@/lib/movie";

export const MovieTopInfo = ({data}: {data: MovieType}) => {
  return (
    <div id="movie-top-info" className="w-full flex flex-col gap-6 text-left">

      <div className="flex flex-col gap-3">
        <p className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-white">{data.Title}</p>
        <p className="text-gray-300 text-base font-normal leading-normal">{data.Year}</p>
        <p className="text-gray-300 text-base font-normal leading-normal">{data.Genre}</p>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex flex gap-2 items-center bg-[rgba(255,230,0,1)] text-black rounded-sm w-fit py-1 px-2">
          <p className="text-md font-bold">IMDb</p>
          <p className="text-lg font-extrabold">{data.imdbRating}</p>
        </div>
        <p className="text-md text-gray-400">Votes: {data.imdbVotes}</p>
      </div>

      <div id="movie-top-info-rating" className="grid grid-cols-1 gap-4 text-white">
        {(data.Ratings.length > 0) && data.Ratings.map((r, index) => (
          <div key={index}>
            <Rating
              source={r.Source}
              value={r.Value}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

const Rating = ({source, value}: { source: string, value: string }) => {
  return (
    <div className="flex flex-col gap-0">
      <p className="text-md">{source}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  )
}