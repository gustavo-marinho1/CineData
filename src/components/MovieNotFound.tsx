import { SearchIcon } from "../assets/search-icon"

export const MovieNotFound = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center text-white gap-0">

      <div className="mb-5">
        <SearchIcon width="50" height="50" />
      </div>

      <h3 className="text-lg font-medium">Movie not found</h3>

    </div>
  )
}