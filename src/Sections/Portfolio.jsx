import porto1 from "../assets/images/porto1.jpeg";
import porto2 from "../assets/images/porto2.jpeg";
import porto3 from "../assets/images/porto3.jpeg";
import porto4 from "../assets/images/porto4.jpeg";
import porto5 from "../assets/images/porto5.jpeg";
import porto6 from "../assets/images/porto6.jpeg";

const projects = [
  {
    title: "E-Commerce Fashion",
    image: porto1,
    description: "Toko online dengan alur checkout sederhana dan cepat.",
  },
  {
    title: "Landing Page Product",
    image: porto2,
    description: "Halaman promosi fokus konversi untuk campaign produk.",
  },
  {
    title: "Corporate Website",
    image: porto3,
    description: "Website profil perusahaan dengan struktur informasi yang jelas.",
  },
  {
    title: "Booking Platform",
    image: porto4,
    description: "Sistem reservasi dengan tampilan yang mudah digunakan pelanggan.",
  },
  {
    title: "Education Website",
    image: porto5,
    description: "Portal edukasi dengan navigasi yang nyaman untuk siswa.",
  },
  {
    title: "Dashboard Internal",
    image: porto6,
    description: "Dashboard operasional untuk memantau data bisnis harian.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-shell py-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="pill">Portofolio</span>
          <h2 className="section-title mt-5">Hasil kerja yang rapi dan relevan</h2>
          <p className="section-subtitle mx-auto mt-4 text-lg">
            Beberapa project pilihan yang menunjukkan gaya kerja kami: clean,
            fungsional, dan berorientasi pengguna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="soft-card overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#e8f0ea]">{project.title}</h3>
                <p className="text-sm text-[#a6bbb1] mt-2">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
