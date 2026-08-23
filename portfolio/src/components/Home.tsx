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

    const updateCurrentSection = () => {
      const triggerPoint = window.innerHeight * 0.35;
      let current = "HEADER";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        // This section has reached the trigger point.
        if (rect.top <= triggerPoint) {
          current = sectionId.toUpperCase();
        }
      }

      setCurrentSection((previousSection) => {
        if (previousSection === current) {
          return previousSection;
        }

        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${
            current === "HEADER" ? "" : `#${current.toLowerCase()}`
          }`,
        );

        return current;
      });
    };

    updateCurrentSection();

    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);

    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
      window.removeEventListener("resize", updateCurrentSection);
    };
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
