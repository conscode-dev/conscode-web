import { Link } from "react-router-dom";
import { ArrowUpRight, Images } from "lucide-react";
import { aiProjects, webProjects } from "../data/projects";
import { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("web");
  const isWebTab = activeTab === "web";

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
            Pilih salah satu dari beberapa project pilihan kami untuk melihat detail lengkap, gallery, teknologi, dan
            fitur utama di halaman khusus.
          </p>
        </div>

        <div className="mb-8 inline-flex rounded-full border border-[#E7EDF5] bg-white p-1 shadow-[0_12px_30px_rgba(56,67,89,0.06)]">
          {[
            { id: "web", label: "Web Projects" },
            { id: "ai", label: "AI Projects" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#2F7CF6] text-white shadow-[0_10px_22px_rgba(47,124,246,0.2)]"
                  : "text-[#6F7F8F] hover:bg-[#F9FAFD] hover:text-[#080B10]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {isWebTab ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[1.55rem] border border-[#E7EDF5] bg-white shadow-[0_16px_40px_rgba(56,67,89,0.07)] transition-all hover:-translate-y-1 hover:border-[#CFE0F7]"
              >
                <Link to={`/portfolio/${project.slug}`} className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-extrabold text-[#080B10]">
                      {project.title}
                    </h3>
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#EEF5FF] text-[#2F7CF6] transition-all hover:bg-[#2F7CF6] hover:text-white"
                      aria-label={`Lihat detail ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>

                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-[#6F7F8F]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#E7EDF5] bg-[#F9FAFD] px-3 py-1 text-xs font-bold text-[#384359]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#E7EDF5] pt-4">
                    <div className="flex items-center gap-2">
                      <Images size={16} className="text-[#2F7CF6]" />
                      <span className="text-xs font-bold text-[#90A4B2]">
                        {project.gallery.length + 1} gambar
                      </span>
                    </div>
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="text-xs font-extrabold text-[#2F7CF6] hover:text-[#2952CB]"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {aiProjects.map((project) => (
              <article
                key={project.title}
                className="flex min-h-[17rem] flex-col justify-between rounded-[1.55rem] border border-dashed border-[#CFE0F7] bg-[#F9FAFD] p-6 shadow-[0_16px_40px_rgba(56,67,89,0.05)]"
              >
                <div>
                  <span className="inline-flex rounded-full bg-[#EEF5FF] px-3 py-1 text-xs font-extrabold text-[#2952CB]">
                    {project.status}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#080B10]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6F7F8F]">
                    {project.description}
                  </p>
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.12em] text-[#A1BEDB]">
                  Portfolio AI menyusul
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
