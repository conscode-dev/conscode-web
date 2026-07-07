import { Brush, Code2, Compass } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import TeamCard from "../components/ui/TimCard";
import storyImage from "../assets/images/porto2.jpeg";
import teamImage from "../assets/images/porto3.jpeg";
import img1 from "../assets/images/marquee/haqul.jpeg";
import img2 from "../assets/images/marquee/syahril.png";
import img3 from "../assets/images/marquee/iffo.jpg";
import img4 from "../assets/images/marquee/ibad.jpeg";
import img5 from "../assets/images/marquee/hakiky.jpeg";

const features = [
  {
    title: "Product Strategy",
    desc: "Mengubah ide menjadi produk digital yang selaras dengan tujuan bisnis.",
    icon: Compass,
  },
  {
    title: "UI/UX & Design Systems",
    desc: "Merancang interface yang konsisten, mudah dipakai, dan siap berkembang.",
    icon: Brush,
  },
  {
    title: "Dev-Ready Delivery",
    desc: "Solusi siap dikembangkan dengan struktur kode yang efisien dan stabil.",
    icon: Code2,
  },
];

const teamData = [
  { name: "Haqqul Amal", role: "AI Engineer", photo: img1 },
  { name: "Syahril Caesa", role: "Frontend Developer", photo: img2 },
  { name: "Iffo Elsande", role: "AI Engineer", photo: img3 },
  { name: "Choirul Ibad", role: "Backend Developer", photo: img4 },
  { name: "Khusai Hakiky", role: "UI/UX Designer", photo: img5 },
];

const About = () => {
  return (
    <section className="section-shell py-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="slide-in-bottom" className="text-center mb-16">
          <h2 className="section-title">
            Why Companies Choose ConsCode
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-base md:text-lg">
            Kami menggabungkan strategi, desain, dan engineering supaya website
            Anda tidak hanya terlihat modern, tetapi juga bekerja untuk bisnis.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection
                key={feature.title}
                animation="slide-in-bottom"
                className="text-center"
                threshold={0.12}
              >
                <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#2F7CF6] shadow-[0_14px_34px_rgba(56,67,89,0.12)]">
                  <Icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-extrabold text-[#080B10]">
                  {feature.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#6F7F8F]">
                  {feature.desc}
                </p>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-end mb-24">
          <AnimatedSection animation="slide-in-left" className="space-y-6">
            <h2 className="section-title">
              Where Strategy Meets <span className="gradient-text">Technology.</span>
            </h2>
            <img
              src={teamImage}
              alt="Proses kerja tim ConsCode"
              loading="lazy"
              decoding="async"
              className="h-[18rem] w-full rounded-[1.7rem] object-cover shadow-[0_18px_50px_rgba(56,67,89,0.1)]"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" className="space-y-7">
            <img
              src={storyImage}
              alt="Website dan aplikasi yang dikerjakan ConsCode"
              loading="lazy"
              decoding="async"
              className="h-[18rem] w-full rounded-[1.7rem] object-cover shadow-[0_18px_50px_rgba(56,67,89,0.1)]"
            />
            <div className="soft-card p-6 md:p-7">
              <p className="text-[#6F7F8F] leading-relaxed">
                Berdiri sejak 2023, ConsCode membantu bisnis membangun website
                yang kredibel, mudah dirawat, dan nyaman digunakan. Setiap
                project dimulai dari pemahaman kebutuhan, lalu diterjemahkan ke
                desain dan implementasi yang rapi.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center rounded-full bg-[#2F7CF6] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2952CB]"
              >
                Start a Project
              </a>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="scale-up" className="text-center mb-10">
          <h3 className="text-3xl font-extrabold text-[#080B10]">Tim Profesional</h3>
          <p className="text-[#6F7F8F] mt-2">
            Orang-orang di balik website yang Anda banggakan.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {teamData.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
