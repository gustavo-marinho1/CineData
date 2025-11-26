export const CardHistory = ({imageUrl}: {
  imageUrl: string
}) => {
  return (
    <a className="group block" href="#">
      <div className="w-full overflow-hidden rounded-lg bg-white/5 transition-transform duration-300 group-hover:scale-105">
        <div className="w-full bg-center bg-no-repeat aspect-[2/3] bg-cover"
          data-alt="Poster for the movie The Matrix"
          style={{ backgroundImage: `url("${imageUrl}")` }}>
        </div>
      </div>
    </a>
  )
}