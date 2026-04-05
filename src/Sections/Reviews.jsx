import { useState, useEffect } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="section-shell py-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="pill">Testimoni</span>
          <h2 className="section-title mt-5">Apa kata client kami</h2>
          <p className="section-subtitle mx-auto mt-4 text-lg">
            Pengalaman langsung dari client yang sudah bekerja bersama tim ConsCode.
          </p>
        </div>

        <div className="max-w-4xl mx-auto soft-card p-5 md:p-8 overflow-hidden">
          <div
            className="flex will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] items-stretch"
            style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
          >
            {reviews.map((review) => (
              <div key={review.name} className="w-full flex-none px-0">
                <div className="rounded-2xl border border-[#33423c] bg-[#1a2320] p-6 md:p-8 shadow-sm h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-[#2a3733]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#e8f0ea]">{review.name}</h3>
                      <p className="text-sm text-[#9fb2aa]">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-[#b7c9c1] leading-relaxed text-[1.05rem] max-w-3xl">
                    “{review.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-[#517fbf]" : "w-2.5 bg-[#42524c] hover:bg-[#5b7068]"}`}
                aria-label={`Pindah ke testimoni ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
