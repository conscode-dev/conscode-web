import { ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import heroPreview from "../assets/images/porto1.jpeg";
import avatar1 from "../assets/images/marquee/haqul.jpeg";
import avatar2 from "../assets/images/marquee/syahril.png";
import avatar3 from "../assets/images/marquee/iffo.jpg";

const Hero = () => {
  return (
    <section className="section-shell min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10 pt-32 pb-16 lg:pt-36">
        <div className="grid lg:grid-cols-[0.94fr_1.06fr] gap-12 lg:gap-14 items-center">
          <AnimatedSection
            animation="slide-in-left"
            className="space-y-7 stagger-child text-center lg:text-left items-center lg:items-start flex flex-col"
            threshold={0.1}
          >
            <span className="pill">Web Development & AI Automation</span>

            <h1 className="max-w-2xl text-5xl md:text-6xl xl:text-[4rem] font-extrabold leading-[1.04] text-[#080B10]">
              Website by Strategy.{" "}
              <span className="block mt-3 gradient-text">Innovation by Design.</span>
            </h1>

            <p className="text-base md:text-lg text-[#6F7F8F] max-w-xl leading-relaxed">
              ConsCode membangun website, aplikasi web, dan solusi AI
              automation yang rapi, cepat, serta siap membantu bisnis tumbuh
              lebih percaya diri.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20website%20ConsCode."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Mulai Project
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>

              <a href="#services" className="btn-outline">
                Explore Layanan
              </a>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3].map((avatar) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-[#6F7F8F]">
                Dipercaya startup dan bisnis berkembang
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-in-right"
            className="relative lg:justify-self-end w-full"
            threshold={0.1}
          >
            <div className="relative mx-auto w-full max-w-[38rem] lg:mx-0">
              <div className="absolute -top-5 left-8 z-30 hidden sm:flex items-center gap-3 rounded-2xl border border-[#E7EDF5] bg-white px-4 py-3 shadow-[0_18px_42px_rgba(56,67,89,0.12)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#2F7CF6] text-white">
                  <Layers3 size={22} />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-[#080B10]">
                    UI/UX Systems
                  </p>
                  <p className="text-xs font-medium text-[#90A4B2]">
                    Consistent & scalable
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 right-3 z-30 hidden sm:flex flex-col items-center gap-3 rounded-2xl border border-[#E7EDF5] bg-white px-5 py-4 text-center shadow-[0_18px_42px_rgba(56,67,89,0.12)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#EEF5FF] text-[#2F7CF6]">
                  <Code2 size={22} />
                </span>
                <p className="text-sm font-extrabold leading-tight text-[#080B10]">
                  Dev-Ready
                  <br />
                  Delivery
                </p>
              </div>

              <div className="absolute -right-4 top-1/3 z-30 hidden lg:grid h-14 w-14 place-items-center rounded-2xl border border-[#E7EDF5] bg-white text-[#2F7CF6] shadow-[0_18px_42px_rgba(56,67,89,0.12)]">
                <Sparkles size={23} />
              </div>

              <img
                src={heroPreview}
                alt="Preview desain website ConsCode"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="relative z-10 aspect-[1.18/1] w-full rounded-[2rem] object-cover object-center shadow-[0_24px_64px_rgba(56,67,89,0.14)]"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
