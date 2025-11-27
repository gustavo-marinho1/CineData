import { LoadingCircle } from "../assets/loading-circle"

export const SearchLoading = () => {
  return (
    <div className="h-full flex items-center justify-center text-white">
      <div className="flex flex-col gap-4 items-center">
        
        <div className="flex-shrink-0">
          <LoadingCircle />
        </div>
        
        <h3 className="text-lg font-medium">Searching</h3>

      </div>
    </div>
  )
}