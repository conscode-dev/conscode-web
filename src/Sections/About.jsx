import AnimatedSection from "../components/AnimatedSection";
import TeamCard from "../components/ui/TimCard";
import img1 from "../assets/images/marquee/haqul.jpeg";
import img2 from "../assets/images/marquee/syahril.png";
import img3 from "../assets/images/marquee/iffo.jpg";
import img4 from "../assets/images/marquee/ibad.jpeg";
import img5 from "../assets/images/marquee/jahfal.jpeg";

const features = [
  {
    title: "Performa Cepat",
    desc: "Optimasi loading dan struktur konten supaya pengunjung nyaman sejak detik pertama.",
  },
  {
    title: "Desain Responsif",
    desc: "Tampilan tetap rapi di desktop, tablet, maupun smartphone tanpa kompromi.",
  },
  {
    title: "Komunikasi Jelas",
    desc: "Setiap tahap kerja transparan, jadi Anda tahu progres dan arah project.",
  },
];

const teamData = [
  {
    name: "Haqqul Amal",
    role: "AI Engineer",
    photo: img1,
  },
  {
    name: "Syahril Caesa",
    role: "Frontend Developer",
    photo: img2,
  },
  {
    name: "Iffo Elsande",
    role: "AI Engineer",
    photo: img3,
  },
  {
    name: "Choirul Ibad",
    role: "Backend Developer",
    photo: img4,
  },
  {
    name: "Jahfal Azzuhri",
    role: "UI/UX Designer",
    photo: img5,
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell py-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="slide-in-bottom" className="text-center mb-14">
          <span className="pill">Tentang Kami</span>
          <h2 className="section-title mt-5">
            Tim kecil dengan fokus <span className="gradient-text">hasil besar</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-lg">
            Kami menggabungkan desain yang rapi, engineering yang stabil, dan
            pendekatan kolaboratif untuk membantu brand Anda tampil lebih meyakinkan.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <AnimatedSection animation="slide-in-left" className="soft-card p-8">
            <h3 className="text-2xl font-bold text-[#e8f0ea] mb-4">Kenapa memilih ConsCode?</h3>
            <p className="text-[#a6bbb1] mb-6 leading-relaxed">
              Kami tidak hanya membuat website yang terlihat bagus, tetapi juga
              memastikan tiap halaman punya tujuan bisnis yang jelas.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-[#33423c] bg-[#202925] p-4">
                  <h4 className="font-semibold text-[#8ec5aa]">{feature.title}</h4>
                  <p className="text-sm text-[#9fb2aa] mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "Project Selesai" },
              { value: "100%", label: "Kepuasan Client" },
              { value: "3+", label: "Tahun Pengalaman" },
              { value: "24/7", label: "Support Tim" },
            ].map((stat) => (
              <div key={stat.label} className="soft-card p-6 text-center">
                <p className="text-3xl font-bold text-[#8ec5aa]">{stat.value}</p>
                <p className="text-sm text-[#9fb2aa] mt-1">{stat.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection animation="scale-up" className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#e8f0ea]">Tim Profesional</h3>
          <p className="text-[#a6bbb1] mt-2">Orang-orang di balik website yang Anda banggakan.</p>
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
