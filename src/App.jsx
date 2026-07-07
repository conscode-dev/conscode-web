import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LazySection from "./components/LazySection";

// pages/sections
import Hero from "./Sections/Hero";

const About = lazy(() => import("./Sections/About"));
const Services = lazy(() => import("./Sections/Services"));
const Portfolio = lazy(() => import("./Sections/Portfolio"));
const ProjectDetail = lazy(() => import("./Sections/ProjectDetail"));
const Reviews = lazy(() => import("./Sections/Reviews"));
const Packages = lazy(() => import("./Sections/Packages"));
const FAQ = lazy(() => import("./Sections/FAQ"));
const Contact = lazy(() => import("./Sections/Contact"));

function App() {
  return (
    <main className="min-h-screen relative text-[#080B10]">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>

                <LazySection id="about" minHeight="56rem">
                  <About />
                </LazySection>

                <LazySection id="services" minHeight="42rem">
                  <Services />
                </LazySection>

                <LazySection id="portfolio" minHeight="48rem">
                  <Portfolio />
                </LazySection>

                <LazySection id="reviews" minHeight="34rem">
                  <Reviews />
                </LazySection>

                <LazySection id="packages" minHeight="58rem">
                  <Packages />
                </LazySection>

                <LazySection id="faq" minHeight="40rem">
                  <FAQ />
                </LazySection>

                <LazySection id="contact" minHeight="36rem">
                  <Contact />
                </LazySection>
              </>
            }
          />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}

export default App;
