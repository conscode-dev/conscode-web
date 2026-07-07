import { LayoutTemplate, MonitorSmartphone, Settings2, ShoppingBag } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import MarqueeIcon from "../components/ui/IconMarquee";

const services = [
  {
    title: "Website Company Profile",
    description:
      "Profil perusahaan yang kredibel, informatif, dan mudah dipahami calon pelanggan.",
    features: ["Desain modern", "Responsif", "SEO friendly", "CMS mudah"],
    icon: LayoutTemplate,
  },
  {
    title: "E-Commerce Website",
    description:
      "Toko online yang nyaman digunakan, cepat diakses, dan siap dikembangkan.",
    features: ["Pembayaran", "Manajemen produk", "Keranjang", "Tracking order"],
    icon: ShoppingBag,
  },
  {
    title: "Custom Web Application",
    description:
      "Aplikasi web khusus untuk dashboard, sistem internal, dan workflow bisnis.",
    features: ["Sistem custom", "Integrasi API", "Database scalable", "Keamanan"],
    icon: MonitorSmartphone,
  },
  {
    title: "Website Maintenance",
    description:
      "Perawatan berkala agar website tetap aman, stabil, dan performanya terjaga.",
    features: ["Update rutin", "Backup data", "Monitoring", "Support teknis"],
    icon: Settings2,
  },
];

const Services = () => {
  return (
    <section className="section-shell py-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="slide-in-bottom" className="text-center mb-14">
          <span className="pill">Layanan</span>
          <h2 className="section-title mt-5">
            Solusi digital dari <span className="gradient-text">awal hingga live</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-base md:text-lg">
            Setiap layanan dirancang agar bisnis Anda tampil profesional,
            mudah dipercaya, dan siap bertumbuh.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={service.title}
                animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                className="soft-card p-7 md:p-8"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EEF5FF] text-[#2F7CF6]">
                    <Icon size={22} strokeWidth={2.4} />
                  </span>
                  <span className="text-sm font-bold text-[#A1BEDB]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#080B10] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6F7F8F] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-[#E7EDF5] bg-[#F9FAFD] px-3 py-1.5 text-sm font-semibold text-[#384359]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection animation="scale-up" className="mt-14 soft-card p-8 text-center">
          <h3 className="text-2xl font-extrabold text-[#080B10]">
            Tech Stack yang Kami Gunakan
          </h3>
          <p className="text-[#6F7F8F] mt-2">
            Teknologi modern untuk website yang stabil dan mudah dikembangkan.
          </p>
          <MarqueeIcon />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
