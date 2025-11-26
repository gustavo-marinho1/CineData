import type { MovieType } from "@/lib/movie";

export const MovieDetails = ({data}: {data: MovieType}) => {
  return (
    <div className="flex flex-col gap-10 items-start text-left mt-10">
      <Detail title="Plot" description={data.Plot} />
      <Detail title="Director" description={data.Director} />
      <Detail title="Writer" description={data.Writer} />
      <Detail title="Actors" description={data.Actors} />
      <Detail title="Awards" description={data.Awards} />
      <Detail title="BoxOffice" description={data.BoxOffice} />
    </div>
  )
}

const Detail = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-2xl font-bold text-white mb-4 leading-[0]">{title}</h2>
      <p className="text-lg text-gray-300 leading-relaxed leading-[0]">{description}</p>
    </div>
  )
}