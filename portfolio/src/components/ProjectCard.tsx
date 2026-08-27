import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({
  project,
}: {
  project: {
    name: string;
    description: string;
    tools: string[];
    github: string;
    live: string;
  };
}) {
  return (
    <div className="group w-full border-y border-slate-800 px-4 py-5 transition-colors hover:bg-slate-900/40">
      <div className="flex items-center gap-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="font-mono text-lg font-semibold tracking-tight text-green-600 transition-colors group-hover:text-green-500">
            {project.name}
          </h3>

          <p className="mt-2 max-w-2xl font-mono text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1 font-mono text-xs text-slate-500"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub repository`}
            className="rounded-md p-2 text-slate-500 hover:cursor-pointer transition-all hover:bg-slate-800 hover:text-purple-400"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
            className="rounded-md p-2 text-slate-500 hover:cursor-pointer transition-all hover:bg-slate-800 hover:text-sky-400"
          >
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}
