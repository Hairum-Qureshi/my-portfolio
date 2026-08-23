import { GitHubCalendar } from "react-github-calendar";
import { IoLogoJavascript } from "react-icons/io5";
import type { JSX } from "react/jsx-runtime";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsOpenai } from "react-icons/bs";
import { RiGeminiFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { LuWebhook } from "react-icons/lu";
import { LuNetwork } from "react-icons/lu";
import { TbBrandSocketIo } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaApple } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import Pill from "../Pill";

const languages: {
  language: string;
  icon: JSX.Element;
  tailwindColor: string;
}[] = [
  {
    language: "JavaScript",
    icon: <IoLogoJavascript />,
    tailwindColor: "text-yellow-500",
  },
  {
    language: "TypeScript",
    icon: <SiTypescript />,
    tailwindColor: "text-blue-500",
  },
  { language: "Python", icon: <FaPython />, tailwindColor: "text-blue-400" },
  {
    language: "SQL",
    icon: <FaDatabase />,
    tailwindColor: "text-blue-400",
  },
  { language: "HTML", icon: <FaHtml5 />, tailwindColor: "text-orange-500" },
  { language: "CSS", icon: <FaCss3Alt />, tailwindColor: "text-blue-500" },
];

const ai: {
  ai: string;
  icon: JSX.Element;
  tailwindColor: string;
}[] = [
  {
    ai: "OpenAI",
    icon: <BsOpenai />,
    tailwindColor: "text-white",
  },
  {
    ai: "Google Gemini",
    icon: <RiGeminiFill />,
    tailwindColor: "text-purple-500",
  },
];

const cloudDBs: {
  db: string;
  icon: JSX.Element;
  tailwindColor: string;
}[] = [
  {
    db: "Supabase",
    icon: <RiSupabaseFill />,
    tailwindColor: "text-green-400",
  },
  {
    db: "Firebase",
    icon: <IoLogoFirebase />,
    tailwindColor: "text-yellow-500",
  },
  {
    db: "MongoDB",
    icon: <SiMongodb />,
    tailwindColor: "text-green-500",
  },
  {
    db: "Redis",
    icon: <DiRedis />,
    tailwindColor: "text-red-500",
  },
  {
    db: "PostgreSQL",
    icon: <BiLogoPostgresql />,
    tailwindColor: "text-blue-400",
  },
];

const apis: {
  api: string;
  icon: JSX.Element;
  tailwindColor: string;
}[] = [
  {
    api: "REST",
    icon: <LuWebhook />,
    tailwindColor: "text-blue-500",
  },
];

const protocols: {
  protocol: string;
  icon: JSX.Element;
  tailwindColor: string;
}[] = [
  {
    protocol: "HTTP",
    icon: <LuNetwork />,
    tailwindColor: "text-blue-500",
  },
  {
    protocol: "HTTPS",
    icon: <LuNetwork />,
    tailwindColor: "text-green-500",
  },
  {
    protocol: "WebSocket",
    icon: <TbBrandSocketIo />,
    tailwindColor: "text-white",
  },
];

const deployments: {
  deployment: string;
  icon: JSX.Element;
  tailwindColor: string;
}[] = [
  {
    deployment: "Vercel",
    icon: <IoLogoVercel />,
    tailwindColor: "text-slate-500",
  },
  {
    deployment: "Render",
    icon: <SiRender />,
    tailwindColor: "text-white",
  },
];

const environments = [
  {
    framework: "Node.js",
    icon: <FaNodeJs />,
    tailwindColor: "text-green-500",
  },
];

const frameworks = [
  {
    framework: "Nest.js",
    icon: <SiNestjs />,
    tailwindColor: "text-red-500",
  },
  {
    framework: "Express.js",
    icon: <SiExpress />,
    tailwindColor: "text-white",
  },
];

const libraries = [
  {
    framework: "React.js",
    icon: <FaReact />,
    tailwindColor: "text-blue-500",
  },
  {
    library: "TailwindCSS",
    icon: <SiTailwindcss />,
    tailwindColor: "text-blue-400",
  },
];

const tools: {
  tool: string;
  icon: JSX.Element;
  tailwindColor: string;
}[] = [
  {
    tool: "Git",
    icon: <FaGitAlt />,
    tailwindColor: "text-orange-500",
  },
  {
    tool: "GitHub",
    icon: <FaGithub />,
    tailwindColor: "text-purple-500",
  },
  {
    tool: "PostMan",
    icon: <SiPostman />,
    tailwindColor: "text-orange-500",
  },
  {
    tool: "VS Code",
    icon: <VscVscode />,
    tailwindColor: "text-blue-500",
  },
  {
    tool: "MacOS",
    icon: <FaApple />,
    tailwindColor: "text-white",
  },
];

const dataAndState: {
  dataAndState: string;
  icon: JSX.Element;
  tailwindColor: string;
}[] = [
  {
    dataAndState: "React Query / TanStack Query",
    icon: <SiReactquery />,
    tailwindColor: "text-pink-600",
  },
  {
    dataAndState: "Zustand",
    icon: <RiBearSmileFill />,
    tailwindColor: "text-amber-800",
  },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col min-h-screen max-h-auto text-slate-300 p-5"
    >
      <h2 className="text-2xl font-semibold uppercase my-5 font-mono">
        Skills
      </h2>
      <div className="flex flex-col h-full items-center">
        <div className="p-3">
          <p className="text-base mb-1 font-mono">My current GitHub stats:</p>
          <GitHubCalendar username="Hairum-Qureshi" />
        </div>
        <div className="mr-auto my-6 space-y-6">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Languages
            </h3>

            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={language.tailwindColor}
                  icon={language.icon}
                  skillData={language.language}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              AI
            </h3>

            <div className="flex flex-wrap gap-2">
              {ai.map((aiItem, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={aiItem.tailwindColor}
                  icon={aiItem.icon}
                  skillData={aiItem.ai}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Cloud Databases & Caching
            </h3>

            <div className="flex flex-wrap gap-2">
              {cloudDBs.map((db, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={db.tailwindColor}
                  icon={db.icon}
                  skillData={db.db}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              APIs
            </h3>

            <div className="flex flex-wrap gap-2">
              {apis.map((api, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={api.tailwindColor}
                  icon={api.icon}
                  skillData={api.api}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Protocols
            </h3>
            <div className="flex flex-wrap gap-2">
              {protocols.map((protocol, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={protocol.tailwindColor}
                  icon={protocol.icon}
                  skillData={protocol.protocol}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Deployment Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {deployments.map((deployment, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={deployment.tailwindColor}
                  icon={deployment.icon}
                  skillData={deployment.deployment}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Environments
            </h3>
            <div className="flex flex-wrap gap-2">
              {environments.map((environment, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={environment.tailwindColor}
                  icon={environment.icon}
                  skillData={environment.framework}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={framework.tailwindColor}
                  icon={framework.icon}
                  skillData={framework.framework}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {libraries.map((library, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={library.tailwindColor}
                  icon={library.icon}
                  skillData={library.library as string}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Data & State Management
            </h3>
            <div className="flex flex-wrap gap-2">
              {dataAndState.map((item, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={item.tailwindColor}
                  icon={item.icon}
                  skillData={item.dataAndState}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Pill
                  key={index}
                  index={index}
                  tailwindColor={tool.tailwindColor}
                  icon={tool.icon}
                  skillData={tool.tool}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
