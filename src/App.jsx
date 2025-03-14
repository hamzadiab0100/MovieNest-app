import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Nav from "./components/Nav";
import Foter from "./components/Foter";
import "./App.css";




const Home = lazy(() => import("./pages/Home"));
const Movies =lazy(()=> import("./pages/Movies"));
const ShowsDetails =lazy(() => import("./components/ShowsDetails"));
const MoviesDatails =lazy(()=> import("./components/MoviesDatails"));
const Support = lazy (()=> import ("./pages/Support"));
const Subscription = lazy (()=> import ("./pages/Subscription"));

function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={   <div className="flex items-center justify-center min-h-screen bg-[#000000]">
      <div className="relative w-6 h-6">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
          className="absolute w-6 h-3 bg-[#E50000] before:content-[''] before:absolute before:border-x-6 before:border-b-[6px] before:border-t-0 before:border-transparent before:top-[-6px] before:left-0 before:right-0 before:border-b-[#5c111100] after:content-[''] after:absolute after:border-x-6 after:border-t-[6px] after:border-b-0 after:border-transparent after:bottom-[-6px] after:left-0 after:right-0 after:border-t-[#5c111100] animate-honeycomb"
            style={{
              animationDelay: `${i * 0.1}s`,
              left: ["-28px", "-14px", "14px", "28px", "14px", "-14px", "0px"][
                i
              ],
              top: ["0", "22px", "22px", "0", "-22px", "-22px", "0"][i],
            }}
          />
        ))}
      </div>
    </div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path="/shows/:id" element={<ShowsDetails />} />
          <Route path="/movies/:id" element={<MoviesDatails />} />
          <Route path='/support' element={<Support />} />
          <Route path='/subscription' element={<Subscription />} />
          
        </Routes>
      </Suspense>
      <Foter/>
    </Router>
  );
}

export default App;
