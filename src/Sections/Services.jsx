import AnimatedSection from "../components/AnimatedSection";
import MarqueeIcon from "../components/ui/IconMarquee";

const services = [
  {
    title: "Website Company Profile",
    description:
      "Membantu bisnis Anda tampil kredibel lewat website profil perusahaan yang informatif dan mudah dipahami.",
    features: ["Desain modern", "Responsif", "SEO friendly", "CMS mudah"],
  },
  {
    title: "E-Commerce Website",
    description:
      "Bangun toko online dengan pengalaman belanja yang nyaman, cepat, dan siap berkembang.",
    features: ["Pembayaran", "Manajemen produk", "Keranjang", "Tracking order"],
  },
  {
    title: "Custom Web Application",
    description:
      "Aplikasi web khusus untuk alur bisnis Anda, dari dashboard hingga sistem internal.",
    features: ["Sistem custom", "Integrasi API", "Database scalable", "Keamanan"],
  },
  {
    title: "Website Maintenance",
    description:
      "Perawatan berkala agar website tetap aman, stabil, dan performanya terjaga.",
    features: ["Update rutin", "Backup data", "Monitoring", "Support teknis"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-shell py-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="slide-in-bottom" className="text-center mb-14">
          <span className="pill">Layanan</span>
          <h2 className="section-title mt-5">
            Solusi digital dari <span className="gradient-text">awal hingga live</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-lg">
            Setiap layanan kami dirancang supaya bisnis Anda tampil profesional
            dan siap bertumbuh.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              className="soft-card p-7"
            >
              <h3 className="text-2xl font-bold text-[#e8f0ea] mb-3">{service.title}</h3>
              <p className="text-[#a6bbb1] mb-5 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-[#c9d7ca] bg-[#23302c] px-3 py-1 text-sm text-[#8ec5aa]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale-up" className="mt-14 soft-card p-8 text-center">
          <h3 className="text-2xl font-bold text-[#e8f0ea]">Tech Stack yang Kami Gunakan</h3>
          <p className="text-[#a6bbb1] mt-2">Teknologi modern untuk hasil website yang stabil dan mudah dikembangkan.</p>
          <MarqueeIcon />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
