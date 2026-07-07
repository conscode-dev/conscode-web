import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDocker,
  SiFastapi,
  SiHuggingface,
  SiJupyter,
  SiLangchain,
  SiMongodb,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPhp,
  SiPytorch,
  SiRedis,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

const BadgeIcon = ({ label }) => (
  <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#EEF5FF] text-xs font-extrabold text-[#2F7CF6]">
    {label}
  </span>
);

const stacks = [
  {
    title: "Web Stack",
    description: "Tooling utama untuk design, frontend, backend, dan database.",
    items: [
      { icon: <FaFigma />, title: "Figma" },
      { icon: <FaHtml5 />, title: "HTML5" },
      { icon: <FaCss3Alt />, title: "CSS3" },
      { icon: <RiTailwindCssFill />, title: "Tailwind" },
      { icon: <IoLogoJavascript />, title: "Javascript" },
      { icon: <FaReact />, title: "React" },
      { icon: <FaVuejs />, title: "VueJS" },
      { icon: <SiPhp />, title: "PHP" },
      { icon: <FaLaravel />, title: "Laravel" },
      { icon: <FaNodeJs />, title: "NodeJS" },
      { icon: <FaBootstrap />, title: "Bootstrap" },
      { icon: <SiMongodb />, title: "MongoDB" },
      { icon: <BiLogoPostgresql />, title: "Postgresql" },
    ],
  },
  {
    title: "AI Stack",
    description:
      "Stack untuk LLM apps, chatbot, workflow automation, model prototyping, dan data pipeline.",
    items: [
      { icon: <SiOpenai />, title: "OpenAI" },
      { icon: <SiLangchain />, title: "LangChain" },
      { icon: <SiHuggingface />, title: "Hugging Face" },
      { icon: <FaPython />, title: "Python" },
      { icon: <SiFastapi />, title: "FastAPI" },
      { icon: <SiPandas />, title: "Pandas" },
      { icon: <SiNumpy />, title: "NumPy" },
      { icon: <SiScikitlearn />, title: "Scikit-learn" },
      { icon: <SiPytorch />, title: "PyTorch" },
      { icon: <SiTensorflow />, title: "TensorFlow" },
      { icon: <SiJupyter />, title: "Jupyter" },
      { icon: <BadgeIcon label="RAG" />, title: "Vector DB" },
      { icon: <SiRedis />, title: "Redis" },
      { icon: <BiLogoPostgresql />, title: "Postgresql" },
      { icon: <SiDocker />, title: "Docker" },
    ],
  },
];

export default function IconList() {
  return (
    <div className="mx-auto w-full py-5">
      <div className="grid gap-5 lg:grid-cols-2">
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className="rounded-[1.35rem] border border-[#E7EDF5] bg-[#F9FAFD] p-5 text-left"
          >
            <div className="mb-5">
              <h4 className="text-lg font-extrabold text-[#080B10]">
                {stack.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-[#6F7F8F]">
                {stack.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {stack.items.map((item) => (
                <div
                  key={`${stack.title}-${item.title}`}
                  className="flex h-20 flex-col items-center justify-center gap-1 rounded-2xl border border-[#E7EDF5] bg-white shadow-[0_12px_28px_rgba(56,67,89,0.05)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl text-[#2F7CF6]">{item.icon}</div>
                  <h5 className="text-center text-xs font-bold text-[#384359]">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
