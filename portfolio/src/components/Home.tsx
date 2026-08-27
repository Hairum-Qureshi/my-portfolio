import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./Footer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>("HEADER");

  useEffect(() => {
    const sectionIds = ["header", "about", "skills", "projects", "contact"];

    const updateCurrentSection = () => {
      const viewportMidpoint = window.innerHeight / 2;
      let closestSection = "HEADER";
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportMidpoint);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = sectionId.toUpperCase();
        }
      });

      setCurrentSection((previousSection) => {
        if (previousSection === closestSection) {
          return previousSection;
        }

        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${closestSection === "HEADER" ? "" : `#${closestSection.toLowerCase()}`}`,
        );

        return closestSection;
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
        <div className="w-3/4 m-auto">
          <Projects />
        </div>
        <div className="w-3/4 m-auto">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
