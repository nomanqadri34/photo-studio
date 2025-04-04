import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopupCard from "./components/PopupCard"; // ✅ Import Pop-up Component

// Lazy load main pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Photography = lazy(() => import("./pages/Photography"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

// ✅ Lazy load photography sub-pages with correct paths
const PreWedding = lazy(() => import("./pages/photography/PreWedding.jsx"));
const Wedding = lazy(() => import("./pages/photography/Wedding.jsx"));
const Destination = lazy(() => import("./pages/photography/Destination.jsx"));
const Kids = lazy(() => import("./pages/photography/Kids.jsx"));
const FilmDocumentary = lazy(() => import("./pages/photography/FilmDocumentary.jsx"));

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* ✅ Add the pop-up component here */}
      <PopupCard />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photography" element={<Photography />} />

          {/* ✅ Photography Dropdown Pages */}
          <Route path="/photography/pre-wedding" element={<PreWedding />} />
          <Route path="/photography/wedding" element={<Wedding />} />
          <Route path="/photography/destination" element={<Destination />} />
          <Route path="/photography/kids" element={<Kids />} />
          <Route path="/photography/film-documentary" element={<FilmDocumentary />} />

          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;




