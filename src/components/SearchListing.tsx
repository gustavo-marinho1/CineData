import { Link } from "react-router";
import type { ItemSearch } from "../lib/search";
import { CardSearch } from "./CardSearch";

export const SearchListing = ({items}: {items: ItemSearch[]}) => {
  return (
    <>
      {(items.length > 0) && (

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.map(item => (
            <Link key={item.imdbID} to={`/movie/${item.imdbID}`}>
              <CardSearch
                imageUrl={item.Poster}
                title={item.Title}
                description={item.Year}
              />
            </Link>
          ))}
        </div>

      )}
    </>
  )
}