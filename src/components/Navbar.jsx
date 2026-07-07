import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "../../public/mt.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const scrollToSection = useCallback((sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }

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
  }, [location.pathname, navigate]);

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (!sectionId || location.pathname !== "/") return undefined;

    const timeout = window.setTimeout(() => {
      scrollToSection(sectionId);
      navigate("/", { replace: true, state: {} });
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [location.pathname, location.state, navigate, scrollToSection]);

  return (
    <nav
      className={`fixed w-full py-4 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_36px_rgba(56,67,89,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center rounded-[28px] border border-[#E7EDF5] bg-white/92 px-4 py-3 shadow-[0_18px_48px_rgba(56,67,89,0.08)]">
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="ConsCode Logo"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-9 w-auto object-contain"
            />
            <div className="text-base font-extrabold tracking-tight leading-none">
              <span className="text-[#080B10]">Cons</span>
              <span className="text-[#2F7CF6]">Code</span>
            </div>
          </div>

          <div className="hidden lg:flex text-sm items-center gap-1">
            {[
              { id: "about", label: "Tentang Kami" },
              { id: "services", label: "Layanan" },
              { id: "portfolio", label: "Portofolio" },
              { id: "reviews", label: "Testimoni" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3.5 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeSection === id
                    ? "bg-[#EEF5FF] text-[#2952CB]"
                    : "text-[#6F7F8F] hover:text-[#080B10] hover:bg-[#F2F6FB]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#2F7CF6] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(47,124,246,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2952CB]"
          >
            Kontak Kami
            <ArrowRight size={16} strokeWidth={2.4} />
          </button>

          <button
            className="lg:hidden p-2 text-[#080B10] hover:bg-[#F2F6FB] rounded-full transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`lg:hidden absolute left-4 right-4 top-full mt-2 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E7EDF5] shadow-[0_18px_48px_rgba(56,67,89,0.12)] transition-all duration-300 ${
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
                    ? "text-[#2952CB] bg-[#EEF5FF]"
                    : "text-[#384359] hover:text-[#080B10] hover:bg-[#F2F6FB]"
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
