import { useState, useEffect } from "react";
import Logo from "../../public/mt.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "reviews",
        "packages",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      // Update scrolled state for navbar styling
      setScrolled(window.scrollY > 50);

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full py-3 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#111816]/92 backdrop-blur-md border-b border-[#33423c] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center rounded-full border border-[#33423c] bg-[#1a2320]/92 px-4 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="ConsCode Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="text-base font-bold tracking-tight leading-none">
              <span className="text-[#e8f0ea]">Cons</span>
              <span className="text-[#35624a]">Code</span>
            </div>
          </div>

          <div className="hidden lg:flex text-md space-x-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "Tentang Kami" },
              { id: "services", label: "Layanan" },
              { id: "portfolio", label: "Portofolio" },
              { id: "reviews", label: "Testimoni" },
              { id: "packages", label: "Paket" },
              { id: "faq", label: "FAQ" },
              { id: "contact", label: "Kontak" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeSection === id
                    ? "bg-[#2a3733] text-[#9bcab2]"
                    : "text-[#c7d6cf] hover:text-[#9bcab2] hover:bg-[#25312d]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="lg:hidden p-2 text-[#9bcab2] hover:bg-[#2a3733] rounded-full transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${
                isMenuOpen ? "fa-xmark" : "fa-bars"
              } text-xl transition-transform duration-200`}
            ></i>
          </button>
        </div>

        <div
          className={`lg:hidden absolute left-4 right-4 top-full mt-2 rounded-2xl bg-[#1a2320] backdrop-blur-md border border-[#33423c] shadow-lg transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-3">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "Tentang Kami" },
              { id: "services", label: "Layanan" },
              { id: "portfolio", label: "Portofolio" },
              { id: "reviews", label: "Testimoni" },
              { id: "packages", label: "Paket" },
              { id: "faq", label: "FAQ" },
              { id: "contact", label: "Kontak" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left px-4 py-3 font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? "text-[#9ecfb5] bg-[#2a3733]"
                    : "text-[#c7d6cf] hover:text-[#9ecfb5] hover:bg-[#25312d]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
