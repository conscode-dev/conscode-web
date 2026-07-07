import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Images } from "lucide-react";
import { webProjects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = webProjects.find((item) => item.slug === slug);
  const galleryImages = useMemo(
    () => (project ? [project.image, ...project.gallery] : []),
    [project]
  );
  const [activeImage, setActiveImage] = useState(project?.image);

  if (!project) {
    return <Navigate to="/#portfolio" replace />;
  }

  const selectedImage = activeImage || project.image;

  return (
    <section className="section-shell min-h-screen py-28 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <Link
          to="/#portfolio"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E7EDF5] bg-white px-4 py-2 text-sm font-extrabold text-[#384359] transition-all hover:-translate-y-0.5 hover:text-[#2F7CF6]"
        >
          <ArrowLeft size={17} />
          Kembali ke Portfolio
        </Link>

        <div className="mb-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="pill">Detail Project</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-[#080B10] md:text-5xl">
              {project.title}
            </h1>
          </div>
          <p className="section-subtitle text-base md:text-lg lg:justify-self-end">
            {project.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-[1.8rem] border border-[#E7EDF5] bg-white shadow-[0_18px_48px_rgba(56,67,89,0.08)]">
              <img
                src={selectedImage}
                alt={project.title}
                loading="eager"
                decoding="async"
                className="h-[22rem] w-full object-cover object-top md:h-[34rem]"
              />
            </div>

            <div className="mt-5 rounded-[1.35rem] border border-[#E7EDF5] bg-white p-4 shadow-[0_12px_30px_rgba(56,67,89,0.05)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Images size={18} className="text-[#2F7CF6]" />
                  <h2 className="text-base font-extrabold text-[#080B10]">
                    Gallery Project
                  </h2>
                </div>
                <span className="text-sm font-bold text-[#90A4B2]">
                  {galleryImages.length} gambar
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${project.slug}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`overflow-hidden rounded-2xl border bg-[#F9FAFD] transition-all ${
                      selectedImage === image
                        ? "border-[#2F7CF6] ring-2 ring-[#2F7CF6]/20"
                        : "border-[#E7EDF5] hover:border-[#CFE0F7]"
                    }`}
                    aria-label={`Tampilkan gambar ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-28 w-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[1.35rem] border border-[#E7EDF5] bg-white p-5 shadow-[0_12px_30px_rgba(56,67,89,0.05)]">
              <h2 className="text-lg font-extrabold text-[#080B10]">
                Tentang Project
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6F7F8F]">
                {project.description}
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-[#E7EDF5] bg-white p-5 shadow-[0_12px_30px_rgba(56,67,89,0.05)]">
              <h2 className="text-lg font-extrabold text-[#080B10]">
                Teknologi
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#E7EDF5] bg-[#F9FAFD] px-3 py-1.5 text-xs font-bold text-[#384359]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-[#E7EDF5] bg-white p-5 shadow-[0_12px_30px_rgba(56,67,89,0.05)]">
              <h2 className="text-lg font-extrabold text-[#080B10]">
                Fitur Utama
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-[#E7EDF5] bg-[#F9FAFD] px-3 py-1.5 text-xs font-bold text-[#384359]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
