import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
  const sections = [
    "HEADER",
    "ABOUT",
    "SKILLS",
    "PROJECTS",
    "CONTACT",
  ];

  const [selectedSection, setSelectedSection] = useState<string>("HEADER");
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 h-screen w-40 text-slate-600 flex flex-col justify-center mx-5 space-y-4">
      {sections.map((section: string) => {
        return (
          <div
            className="w-full flex items-center hover:cursor-pointer"
            key={section}
            onClick={() => {
              setSelectedSection(section);
              if (section === "HEADER") {
                navigate("/");
                return;
              }

              navigate(`#${section.toLowerCase()}`);
            }}
          >
            <div
              className={`mr-2 border ${selectedSection === section ? "w-20 border-sky-500" : "w-10 border-sky-700"}`}
            ></div>
            <HashLink
              to={`#${section.toLowerCase()}`}
              scroll={(el: HTMLElement) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
              <h2
                className={`text-sm font-bold hover:text-slate-300 font-mono uppercase ${selectedSection === section ? "text-white" : "text-slate-500"}`}
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
