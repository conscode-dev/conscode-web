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
    <footer className="section-shell text-[#f7fbff]">
      <AnimatedSection animation="slide-in-bottom">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[#f7fbff]">Cons</span>
                <span className="text-[#4988c4]">Code</span>
              </h3>
              <p className="text-[#d7edf4] text-sm leading-relaxed">
                Website development dengan pendekatan clean design dan hasil yang terukur.
              </p>
            </div>

            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4 text-[#f7fbff]">
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
                            className="text-[#d7edf4] hover:text-[#bde8f5] transition-colors text-sm flex items-center gap-2"
                          >
                            {section.icons && section.icons[idx] && (
                              <i className={`fa-brands ${section.icons[idx]} text-[#d7edf4]`}></i>
                            )}
                            {item}
                          </a>
                        ) : (
                          <span className="text-[#d7edf4] text-sm flex items-center gap-2">
                            {section.icons && section.icons[idx] && (
                              <i className={`fa-solid ${section.icons[idx]} text-[#d7edf4]`}></i>
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

          <div className="border-t border-[#4988c4] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#d7edf4] text-sm">
              {new Date().getFullYear()} ConsCode. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-[#1c4d8d] hover:bg-[#4988c4] text-[#bde8f5] hover:text-[#0f2854] rounded-lg transition-colors text-sm"
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
