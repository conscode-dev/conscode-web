import { ArrowUpRight } from "lucide-react";
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
    <section className="section-shell py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.88fr_1fr] lg:items-end">
          <div>
            <span className="pill">Portofolio</span>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.08] text-[#080B10] md:text-5xl">
              Hasil kerja yang rapi dan relevan
            </h2>
          </div>
          <p className="section-subtitle max-w-2xl text-base md:text-lg lg:justify-self-end">
            Beberapa project pilihan yang menunjukkan gaya kerja kami: clean,
            fungsional, dan berorientasi pengguna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[1.55rem] border border-[#E7EDF5] bg-white shadow-[0_16px_40px_rgba(56,67,89,0.07)]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-extrabold text-[#080B10]">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#EEF5FF] text-[#2F7CF6] transition-all hover:bg-[#2F7CF6] hover:text-white"
                      aria-label={`Buka ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#6F7F8F]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
