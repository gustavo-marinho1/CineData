export const CardSearch = ({imageUrl, title, description}: {
  imageUrl: string,
  title: string,
  description: string
}) => {

  return (
    <div className="w-full aspect-2/3 group relative overflow-hidden rounded-xl" data-alt={`Movie poster for ${title}`}>

      <div className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102">
        <img alt={`Movie poster for ${title}`} src={imageUrl} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-3 text-white">
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-xs text-gray-300">{description}</p>
      </div>

    </div>
  )
}