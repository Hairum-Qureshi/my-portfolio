import { HashLink } from "react-router-hash-link";

type NavigationProps = {
  currentSection: string;
  onSectionChange: (section: string) => void;
};

export default function Navigation({
  currentSection,
  onSectionChange,
}: NavigationProps) {
  const sections = ["HEADER", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  return (
    <div className="fixed top-0 left-0 h-screen w-40 text-slate-600 flex flex-col justify-center mx-5 space-y-4">
      {sections.map((section: string) => {
        return (
          <div
            className="w-full flex items-center hover:cursor-pointer"
            key={section}
            onClick={() => onSectionChange(section)}
          >
            <div
              className={`mr-2 border ${currentSection === section ? "w-20 border-sky-500" : "w-10 border-sky-700"}`}
            ></div>
            <HashLink
              to={
                section === "HEADER" ? "#header" : `#${section.toLowerCase()}`
              }
              scroll={(el: HTMLElement) =>
                el.scrollIntoView({
                  behavior: "auto",
                  block: section === "HEADER" ? "start" : "end",
                })
              }
            >
              <h2
                className={`text-sm font-bold hover:text-slate-300 font-mono uppercase ${currentSection === section ? "text-white" : "text-slate-500"}`}
              >
                {section}
              </h2>
            </HashLink>
          </div>
        );
      })}
    </div>
  );
}
