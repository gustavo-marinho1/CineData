import { LoadingCircle } from "../assets/loading-circle"

export const SearchLoading = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        
        <div className="flex-shrink-0">
          <LoadingCircle />
        </div>
        
        <div className="w-full animate-pulse text-lg">
          Searching
        </div>

      </div>
    </div>
  )
}