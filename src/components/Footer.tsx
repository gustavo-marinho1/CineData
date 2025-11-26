import { Logo } from "../assets/logo"

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-background-dark/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-3 text-white">
              <div className="size-7 text-primary">
                <Logo />
              </div>
              <h2 className="text-white text-lg font-bold">CineData</h2>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#">
              <span className="text-white hover:text-gray-300 transition-colors">About us</span>
            </a>
            <a href="#">
              <span className="text-white hover:text-gray-300 transition-colors">Contact</span>
            </a>
            <a href="#">
              <span className="text-white hover:text-gray-300 transition-colors">Privacy Policy</span>
            </a>
            <a href="#">
              <span className="text-white hover:text-gray-300 transition-colors">Service Terms</span>
            </a>
          </nav>

        </div>
      </div>
    </footer>
  )
}