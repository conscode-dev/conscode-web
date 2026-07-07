import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // === DATA DINAMIS ===
  const footerSections = [
    {
      title: "Social Media",
      items: ["conscod3", "conscod33", "conscod3", "conscode"],
      icons: ["fa-instagram", "fa-x-twitter", "fa-tiktok", "fa-telegram"],
      links: [
        "https://instagram.com/conscod3",
        "https://x.com/conscod33",
        "https://tiktok.com/@conscod3",
        "https://t.me/conscode",
      ],
    },
    {
      title: "Services",
      items: [
        "Website Development",
        "E-Commerce Solutions",
        "Web Applications",
        "UI/UX Design",
      ],
    },
    {
      title: "Contact",
      items: ["conscode2023@gmail.com", "(+62) 851-8933-9423", "Surabaya, Indonesia"],
      icons: ["fa-envelope", "fa-phone", "fa-location-dot"],
    },
  ];

  return (
    <footer className="section-shell text-[#080B10] border-t border-[#E7EDF5]">
      <AnimatedSection animation="slide-in-bottom">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[#080B10]">Cons</span>
                <span className="text-[#2F7CF6]">Code</span>
              </h3>
              <p className="text-[#6F7F8F] text-sm leading-relaxed">
                Website development dengan pendekatan clean design dan hasil yang terukur.
              </p>
            </div>

            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-4 text-[#080B10]">
                  {section.title}
                </h4>

                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx}>
                        {section.links && section.links[idx] ? (
                          <a
                            href={section.links[idx]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#6F7F8F] hover:text-[#2F7CF6] transition-colors text-sm flex items-center gap-2"
                          >
                            {section.icons && section.icons[idx] && (
                              <i className={`fa-brands ${section.icons[idx]} text-[#2F7CF6]`}></i>
                            )}
                            {item}
                          </a>
                        ) : (
                          <span className="text-[#6F7F8F] text-sm flex items-center gap-2">
                            {section.icons && section.icons[idx] && (
                              <i className={`fa-solid ${section.icons[idx]} text-[#2F7CF6]`}></i>
                            )}
                            {item}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-[#E7EDF5] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#6F7F8F] text-sm">
              {new Date().getFullYear()} ConsCode. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFD] hover:bg-[#EEF5FF] text-[#2952CB] rounded-full transition-colors text-sm font-semibold"
            >
              <i className="fa-solid fa-arrow-up"></i> Back to Top
            </button>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;
