import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-background-dark/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

          <Logo />

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