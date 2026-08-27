import ProjectCard from "../ProjectCard";
import projects from "../../data/projects.json";
import { useState } from "react";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen max-h-auto text-slate-300 p-5"
    >
      <h2 className="text-2xl font-semibold uppercase my-5 font-mono">
        Projects
      </h2>
      <div className="flex w-full">
        {showMore ? (
          <div className="flex w-full flex-col">
            {projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
            <button
              onClick={() => setShowMore(false)}
              className="mt-4 self-center rounded-md border border-slate-800 bg-slate-900/60 px-4 py-2 font-mono text-sm text-slate-500 transition-all hover:cursor-pointer hover:bg-slate-800 hover:text-sky-400"
            >
              Show Less
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            {projects.slice(0, 3).map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
            <button
              onClick={() => setShowMore(true)}
              className="mt-4 self-center rounded-md border border-slate-800 bg-slate-900/60 px-4 py-2 font-mono text-sm text-slate-500 transition-all hover:cursor-pointer hover:bg-slate-800 hover:text-sky-400"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
