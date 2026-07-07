import { Star } from "lucide-react";
import photo1 from "../assets/images/cewe1.jpeg";
import photo2 from "../assets/images/cowo1.jpeg";
import photo3 from "../assets/images/cowo2.jpeg";

const reviews = [
  {
    name: "Ina Zohana",
    role: "CEO TechStart",
    image: photo1,
    text: "Tim ConsCode sangat rapi dalam komunikasi dan hasil website-nya benar-benar membantu brand kami terlihat lebih profesional.",
  },
  {
    name: "David Nur",
    role: "Founder Fashion Store",
    image: photo2,
    text: "Proses pengerjaannya jelas, cepat, dan setiap revisi ditangani dengan baik. Hasil akhirnya sesuai ekspektasi.",
  },
  {
    name: "Afif Bagus",
    role: "Marketing Director",
    image: photo3,
    text: "Desainnya clean, performanya ringan, dan timnya mudah diajak diskusi. Sangat recommended untuk project bisnis.",
  },
];

const Reviews = () => {
  return (
    <section className="section-shell py-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto mt-4 text-base md:text-lg">
            Pengalaman langsung dari client yang sudah bekerja bersama tim ConsCode.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="soft-card p-6">
              <div className="mb-5 flex gap-1 text-[#F6C945]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="min-h-[7rem] text-sm leading-relaxed text-[#384359]">
                "{review.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-extrabold text-[#080B10]">
                    {review.name}
                  </h3>
                  <p className="text-xs font-medium text-[#90A4B2]">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
