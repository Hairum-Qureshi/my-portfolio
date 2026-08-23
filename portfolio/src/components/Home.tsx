import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>("HEADER");

  useEffect(() => {
    const sectionIds = ["header", "about", "skills", "projects", "contact"];
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) => right.intersectionRatio - left.intersectionRatio,
          )[0];

        if (!visibleSection) return;
    
        const nextSection = visibleSection.target.id.toUpperCase();
        setCurrentSection(nextSection);
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${nextSection === "HEADER" ? "" : `#${visibleSection.target.id}`}`,
        );
      },
      {
        threshold: [0.4, 0.55, 0.7],
        rootMargin: "-15% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen max-h-auto bg-gray-950">
      <Navigation
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      <div
        className="flex items-center justify-center h-screen flex-col"
        id="header"
      >
        <div>
          <h3 className="text-white text-3xl">Hello, I'm</h3>
          <h1 className="text-white text-9xl font-bold">Hairum Qureshi</h1>
          <div className="w-full border border-sky-600 shadow-[0_0_10px_#34d399,0_0_20px_#10b981] my-3 bg-linear-to-r transition duration-1000 group-hover:duration-200" />
        </div>
      </div>
      <div>
        <div className="w-3/4 m-auto">
          <About />
        </div>
        <div className="w-3/4 m-auto">
          <Skills />
        </div>
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
