import TimelineSection from "../TimelineSection";
import timeline from "../../data/timeline.json";

export default function About() {
  return (
    <div
      id="about"
      className="flex h-screen flex-row overflow-hidden from-gray-800 to-black"
    >
      <div className="custom-scrollbar w-1/2 overflow-y-auto p-5 text-slate-300">
        <h2 className="text-xl font-semibold uppercase font-mono">About</h2>
        <div>
          <p className="text-base mt-4">
            Hi, I'm Hairum, an aspiring software developer and computer science
            graduate who enjoys building full-stack applications and learning
            how the pieces behind them fit together. I'm particularly interested
            in backend and full-stack development, and I enjoy turning ideas
            into applications that are practical, maintainable, and easy to use.{" "}
            <br />
            <br />
            I recently graduated from the University of Delaware with a B.S. in
            Computer Science as a first-generation student and am continuing at
            UD as a graduate student in Computer and Information Sciences, with
            a continued focus in software engineering.
            <br />
            <br />
            Over the years, I've worked with technologies across the modern web
            stack, including TypeScript, React, Node.js, NestJS, MongoDB,
            PostgreSQL, and more. I especially enjoy working on the backend,
            where I can think about APIs, data, architecture, and how everything
            fits together.
            <br />
            <br />
            Those experiences taught me that being a good developer isn't just
            about writing code, but rather, it's also about communicating
            clearly, solving problems collaboratively, and being able to explain
            technical ideas to others. Programming is also something I genuinely
            enjoy outside of school and work, whether that's experimenting with
            a new technology, building something just for fun, or learning how
            things work under the hood. When I'm away from my computer, I'm
            usually reading, writing, learning my native language (Urdu), collecting foreign currency, or getting
            back into astrophotography and badminton.
          </p>
        </div>
      </div>
      <div className="scroll-auto w-1/2 p-5 text-slate-300">
        <h2 className="text-xl font-semibold uppercase mb-4 font-mono">My Journey</h2>

        <div className="relative">
          <div className="overflow-y-auto h-[calc(100vh-4rem)]">
            <ol className="relative ml-2 border-s border-gray-200 dark:border-gray-700 break-normal">
              {timeline.map((item, index) => (
                <TimelineSection
                  key={index}
                  date={item.date}
                  title={item.title}
                  body={item.body}
                />
              ))}
            </ol>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}
