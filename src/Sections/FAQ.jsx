import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apa saja layanan yang ditawarkan ConsCode?",
      answer:
        "ConsCode menawarkan berbagai layanan pengembangan web seperti pembuatan website responsif, aplikasi web full-stack, e-commerce, landing pages, dan sistem manajemen konten. Kami juga menyediakan layanan UI/UX design dan maintenance website.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Landing page sederhana bisa selesai dalam 1-2 minggu, website company profile 2-4 minggu, sedangkan aplikasi web kompleks bisa memakan waktu 2-6 bulan. Kami akan memberikan timeline yang jelas di awal proyek.",
    },
    {
      question: "Teknologi apa saja yang digunakan ConsCode?",
      answer:
        "Kami menggunakan teknologi modern seperti React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, dan berbagai tools development terkini. Kami selalu mengikuti best practices dan teknologi terbaru di industri.",
    },
    {
      question: "Apakah website yang dibuat mobile-friendly?",
      answer:
        "Tentu saja! Semua website yang kami buat menggunakan responsive design yang memastikan tampilan optimal di semua perangkat - desktop, tablet, dan smartphone. Kami juga memperhatikan performance dan user experience di mobile.",
    },
    {
      question: "Bagaimana sistem pembayaran dan harga untuk proyek?",
      answer:
        "Sistem pembayaran biasanya dibagi menjadi beberapa tahap: 30% di awal, 40% saat development selesai, dan 30% saat website live. Harga bervariasi mulai dari 2 juta untuk landing page hingga 50 juta+ untuk aplikasi kompleks. Konsultasi gratis untuk estimasi harga!",
    },
    {
      question: "Apakah ada garansi dan maintenance setelah website selesai?",
      answer:
        "Ya! Kami memberikan garansi 3 bulan untuk bug fixing dan maintenance gratis. Setelah itu, tersedia paket maintenance bulanan yang mencakup backup, security updates, dan minor modifications. Kami juga menyediakan hosting dan domain management.",
    },
    {
      question: "Bisakah client ikut terlibat dalam proses development?",
      answer:
        "Sangat bisa! Kami menerapkan agile development dimana client dapat melihat progress secara real-time, memberikan feedback, dan request perubahan di setiap milestone. Communication is key untuk hasil yang memuaskan.",
    },
    {
      question: "Apakah ConsCode bisa handle proyek skala besar?",
      answer:
        "Absolutely! Tim kami berpengalaman menangani proyek dari startup hingga enterprise. Kami memiliki sistem project management yang solid, tim developer yang scalable, dan partnership dengan berbagai technology providers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-shell py-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="slide-in-bottom">
          <div className="text-center mb-16">
            <span className="pill">FAQ</span>
            <h2 className="section-title mt-5">Pertanyaan yang sering ditanyakan</h2>
            <p className="section-subtitle text-lg mx-auto mt-4 leading-relaxed">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang
              layanan dan proses kerja ConsCode
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-in-bottom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="soft-card overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#202925] transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-[#e8f0ea] pr-8">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#23302c] border border-[#c9d7ca] transition-all duration-300 ${openIndex === index
                          ? "rotate-180 bg-[#31433d]"
                          : "hover:scale-105"
                        }`}
                    >
                      <svg
                        className="w-4 h-4 text-[#8ec5aa]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out ${openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                      } overflow-hidden`}
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-[#33423c] mb-4"></div>
                      <p className="text-[#a6bbb1] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="soft-card p-8">
                <h3 className="text-2xl font-bold text-[#e8f0ea] mb-4">
                  Masih ada pertanyaan lain?
                </h3>
                <p className="text-[#a6bbb1] mb-6">
                  Jangan ragu untuk menghubungi kami! Tim ConsCode siap membantu
                  menjawab pertanyaan dan kebutuhan proyek Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20website%20ConsCode."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
