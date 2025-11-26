import { Link } from "react-router";
import { Logo } from "../assets/logo";
import { SearchForm } from "./SearchForm";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-white/10 bg-gray-950/90 px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-7xl items-center justify-between">

        <Link to="/">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8 text-primary text-cyan-500">
              <Logo />
            </div>
            <h1 className="text-white font-bold leading-tight tracking-tight" style={{fontSize: "25px"}}>CineData</h1>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/my-list">
            <span className="text-gray-300 hover:text-white text-sm font-medium transition-colors">My List</span>
          </Link>
          <SearchForm />
        </div>

      </div>
    </header>
  )
}