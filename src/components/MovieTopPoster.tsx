export const MovieTopPoster = ({poster}: {poster: string}) => {
  return (
    <div id="movie-top-poster" className="w-full h-full flex justify-center md:justify-end">
      <img src={poster} className="w-full h-full rounded-xl" />
    </div>
  )
}