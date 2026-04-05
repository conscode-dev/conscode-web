import AnimatedSection from "../components/AnimatedSection";

const packages = [
  {
    name: "Starter Package",
    price: "Rp 5 Juta",
    description: "Paket ideal untuk bisnis baru atau personal branding yang ingin online.",
    features: [
      "Landing page 1 halaman",
      "Desain responsif modern",
      "SEO basic & quick setup",
      "Domain & hosting 1 tahun",
      "Revisi hingga 3 kali",
      "Support 2 minggu",
      // Hosting & Server
      "Shared hosting terpercaya",
      "Storage 100GB",
      "Bandwidth unlimited",
      "SSL Certificate included",
      "99% uptime guarantee",
    ],
    highlight: false,
    cta: "Mulai Sekarang",
  },
  {
    name: "Business Package",
    price: "Rp 15 Juta",
    description: "Solusi lengkap untuk perusahaan yang perlu online presence profesional.",
    features: [
      "Website 5-8 halaman",
      "Desain UI/UX custom",
      "SEO optimization & blog setup",
      "Contact form & email integration",
      "Domain & hosting 1 tahun",
      "Revisi hingga 5 kali",
      "Support 1 bulan",
      "Dashboard simple management",
      // Hosting & Server
      "Managed hosting dengan backup otomatis",
      "Storage 500GB",
      "Bandwidth unlimited",
      "Premium SSL Certificate",
      "99.5% uptime guarantee",
      "CDN global included",
      "Email hosting @ domain Anda 5 user",
    ],
    highlight: true,
    cta: "Pilih Paket Ini",
  },
  {
    name: "E-Commerce Package",
    price: "Rp 25 Juta",
    description: "Toko online lengkap dengan sistem pembayaran dan inventory management.",
    features: [
      "E-commerce website full",
      "Product management system",
      "Payment gateway integration",
      "Inventory & order tracking",
      "Customer dashboard",
      "SEO optimization khusus toko",
      "Domain & hosting 1 tahun",
      "Revisi hingga 7 kali",
      "Support 2 bulan",
      "Training tim Anda",
      // Hosting & Server
      "Dedicated server resources",
      "Storage 1TB",
      "Bandwidth unlimited",
      "Premium SSL + wildcard",
      "99.9% uptime guarantee",
      "Global CDN + edge cache",
      "Email hosting unlimited",
      "Daily automated backups",
      "Priority server support",
    ],
    highlight: false,
    cta: "Konsultasi Gratis",
  },
];

const Packages = () => {
  return (
    <section id="packages" className="section-shell py-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="slide-in-bottom" className="text-center mb-16">
          <span className="pill">Paket & Harga</span>
          <h2 className="section-title mt-5">
            Paket bundling sesuai <span className="gradient-text">kebutuhan bisnis</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-lg">
            Pilih paket yang paling cocok untuk mengembangkan online presence Anda.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <AnimatedSection
              key={pkg.name}
              animation={
                pkg.highlight
                  ? "scale-up"
                  : index === 0
                  ? "slide-in-left"
                  : "slide-in-right"
              }
              className={`relative ${pkg.highlight ? "md:scale-105" : ""}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#517fbf] text-[#e8f0ea] px-4 py-1 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div
                className={`soft-card p-8 h-full flex flex-col ${
                  pkg.highlight ? "border-2 border-[#517fbf]" : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-[#e8f0ea] mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-[#8ec5aa]">{pkg.price}</p>
                  <p className="text-sm text-[#a6bbb1]">One-time payment</p>
                </div>

                <p className="text-[#a6bbb1] mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="mb-8 flex-grow">
                  <p className="text-sm font-semibold text-[#e8f0ea] mb-4 uppercase">
                    Fitur Included
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <i className="fa-solid fa-check text-[#8ec5aa] mt-1 text-sm flex-shrink-0"></i>
                        <span className="text-[#b7c9c1] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20tertarik%20dengan%20paket%20bisnis%20ConsCode."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-[#517fbf] text-[#e8f0ea] hover:bg-[#5189d4] hover:shadow-lg hover:shadow-[#517fbf]/50"
                      : "bg-[#2a3733] text-[#8ec5aa] border border-[#517fbf]/30 hover:bg-[#323d39] hover:border-[#517fbf]"
                  }`}
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>
                  {pkg.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ / Additional Info */}
        <AnimatedSection animation="slide-in-bottom">
          <div className="soft-card p-8 md:p-10 bg-[#1a2320]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#e8f0ea] mb-3">
                  Apa yang sudah included?
                </h4>
                <ul className="space-y-2 text-[#a6bbb1]">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#8ec5aa]"></i>
                    Design & development lengkap
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#8ec5aa]"></i>
                    Domain & hosting 1 tahun
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#8ec5aa]"></i>
                    Mobile responsive
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#8ec5aa]"></i>
                    Basic SEO optimization
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#e8f0ea] mb-3">
                  Ada pertanyaan?
                </h4>
                <p className="text-[#a6bbb1] mb-4">
                  Setiap paket bisa dikustomisasi sesuai kebutuhan spesifik Anda. Hubungi kami untuk konsultasi lebih detail.
                </p>
                <a
                  href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20tentang%20paket%20website%20ConsCode."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#8ec5aa] text-[#234637] font-semibold rounded-lg hover:bg-[#a3d5b9] transition-all"
                >
                  <i className="fa-solid fa-comments"></i>
                  Chat Dengan Tim
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Packages;
