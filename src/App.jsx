import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

// pages/sections
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Portfolio from "./Sections/Portfolio";
import Reviews from "./Sections/Reviews";
import Packages from "./Sections/Packages";
import FAQ from "./Sections/FAQ";
import Contact from "./Sections/Contact";

function App() {
  return (
    <main className="min-h-screen relative text-[#e8f0ea]">
      <Router>
        <CustomCursor />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>

                <section id="about">
                  <About />
                </section>

                <section id="services">
                  <Services />
                </section>

                <section id="portfolio">
                  <Portfolio />
                </section>

                <section id="reviews">
                  <Reviews />
                </section>

                <section id="packages">
                  <Packages />
                </section>

                <section id="faq">
                  <FAQ />
                </section>

                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}

export default App;
