import { Link } from "react-router";
import { FormSearch } from "./FormSearch";
import { SidebarTrigger } from "./ui/sidebar";
import { Logo } from "./Logo";
import { MyListButton } from "./MyListButton";
import { FormSearchMobile } from "./FormSearchMobile";

export const Header = () => {
  return (
    <header className="h-16 sticky top-0 z-50 flex items-center justify-center border-b border-white/10 bg-gray-950/90 px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-7xl items-center justify-between">

        <div className="flex gap-4">
          <div className="sm:hidden">
            <SidebarTrigger className="text-white hover:text-white" />
          </div>

          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/my-list" className="hidden sm:block">
            <MyListButton />
          </Link>

          <FormSearch />
        </div>

        <FormSearchMobile />

      </div>
    </header>
  )
}