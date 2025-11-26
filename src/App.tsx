import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Searching } from './pages/Searching';
import { Movie } from './pages/Movie';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen flex flex-col bg-gradient-to-bl from-slate-900 to-gray-950 overflow-y-auto">

        <Header />

        <div className="flex-1 w-full font-display flex flex-col">

          <main className="w-full h-full p-10 flex justify-center">
            <div className="max-w-7xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Searching />} />
                <Route path="/movie" element={<Movie />} />
              </Routes>
            </div>
          </main>

          <Footer />

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
