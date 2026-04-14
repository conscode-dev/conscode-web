import webgis from "../assets/Projects/WebGis/webgis.jpeg";
import unibookstore from "../assets/Projects/unibookstore/unibookstore.jpeg";
import suratDesa from "../assets/Projects/Sistem Informasi Pelayanan Surat Desa/sistem pelayanan surat desa.jpeg";
import cloneWeb from "../assets/Projects/Clone Web Design/clone web.jpeg";
import taniaPortfolio from "../assets/Projects/tania portfolio/tania portfolio.png";

const projects = [
  {
    title: "WebGIS Gunungkidul",
    image: webgis,
    description:
      "Sistem informasi geografis berbasis web untuk memetakan distribusi fasilitas pendidikan.",
    liveUrl: "https://webgis-kelompok1.vercel.app/",
    },
  {
    title: "UNIBOOKSTORE",
    image: unibookstore,
    description:
      "Sistem manajemen toko buku berbasis web untuk inventaris, penerbit, dan pengadaan.",
  },
  {
    title: "Sistem Surat Desa",
    image: suratDesa,
    description:
      "Aplikasi pelayanan surat desa online dengan alur verifikasi dan unduh PDF.",
  },
  {
    title: "Clone Web Design",
    image: cloneWeb,
    description:
      "Studi tampilan web dengan fokus pada layout yang bersih dan visual yang rapi.",
    liveUrl: "https://one-page-ruddy.vercel.app/",
  },
  {
    title: "Tania Portfolio",
    image: taniaPortfolio,
    description:
      "Portofolio personal dengan presentasi yang modern dan mudah dipahami.",
    liveUrl: "https://tania-portofolio.vercel.app/",
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
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#3f4d47] bg-[#23302c] px-4 py-2 text-sm font-semibold text-[#9bcab2] transition-all duration-300 hover:bg-[#2a3733] hover:text-[#e8f0ea]"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Lihat Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
