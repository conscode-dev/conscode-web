import AnimatedSection from "../components/AnimatedSection";
import mobile from "../../public/mobile.png";

const Hero = () => {
  return (
    <section className="section-shell min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#4988c4] blur-3xl"></div>
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1c4d8d] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection
            animation="slide-in-left"
            className="space-y-6 stagger-child text-center md:text-left items-center md:items-start flex flex-col"
            threshold={0.1}
          >
            <span className="pill">Freelance Digital Partner</span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#f7fbff]">
              Website yang <span className="gradient-text">clean</span>,
              modern, dan terasa natural.
            </h1>

            <p className="text-lg text-[#d7edf4] max-w-xl">
              ConsCode membantu bisnis dan personal brand tampil lebih percaya
              diri lewat website yang rapi, cepat, dan fokus pada pengalaman
              pengguna.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20website%20ConsCode."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Mulai Konsultasi
              </a>

              <a href="#portfolio" className="btn-outline">
                Lihat Portofolio
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-md pt-2">
              {[
                { value: "50+", label: "Project" },
                { value: "100%", label: "Client Puas" },
                { value: "24/7", label: "Support" },
              ].map((item) => (
                <div key={item.label} className="soft-card p-3 text-center">
                  <p className="text-xl font-bold text-[#bde8f5]">{item.value}</p>
                  <p className="text-xs text-[#bde8f5]">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-in-right"
            className="relative hidden md:block"
            threshold={0.1}
          >
            <div className="relative soft-card p-6 lg:p-8">
              <div className="absolute -top-8 -right-8 h-28 w-28 rounded-2xl bg-[#4988c4] -z-10 rotate-12"></div>
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[#1c4d8d] -z-10"></div>

              <img
                src={mobile}
                alt="ConsCode Web Development"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="relative z-10 md:w-[18rem] lg:w-[28rem] mx-auto h-auto rounded-2xl"
              />

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  "Design yang rapi",
                  "Loading ringan",
                  "SEO siap pakai",
                ].map((text) => (
                    <div key={text} className="rounded-xl border border-[#4988c4] bg-[#0b2145] p-3 text-xs text-[#f7fbff]">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
