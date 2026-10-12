import TimelineSection from "../TimelineSection";
import timeline from "../../data/timeline.json";

export default function About() {
  return (
    <div
      id="about"
      className="flex h-screen flex-row overflow-hidden from-gray-800 to-black"
    >
      <div className="flex w-1/2 min-h-0 flex-col p-5 text-slate-300">
        <h2 className="mb-4 shrink-0 text-xl font-semibold uppercase font-mono">
          About
        </h2>
        <div className="min-h-0 flex-1 overflow-y-auto pr-4">
          <p className="text-base">
            Hi, I'm Hairum, an aspiring software developer and computer science
            graduate who enjoys building full-stack applications and learning
            how the pieces behind them fit together.
            <br />
            <br />
            When I'm not busy with school, work, or life's other
            responsibilities, you'll probably find me in my bedroom well past
            midnight, working on some personal full-stack project that I told
            myself I'd stop working on hours ago. There's something I've learned
            about myself over the years: when it comes to programming, curiosity
            has a funny way of turning into determination.
            <br />
            <br />
            I've always enjoyed challenging myself, stepping outside my comfort
            zone, and exploring unfamiliar technologies, particularly when it
            comes to backend development. While it's easy to spend hours
            scrolling through social media (and believe me, I'm guilty of that
            too), I've found that I can just as easily spend those hours
            learning a new programming language, experimenting with a backend
            framework, or figuring out why something that <em>should</em> work
            refuses to cooperate. Sometimes, all it takes is one interesting
            idea to turn an ordinary evening into an unexpectedly long night of
            programming.
            <br />
            <br />
            I graduated from the University of Delaware with a B.S. in Computer
            Science as a first-generation college student, and I'm currently
            continuing my education at UD as a graduate student in Computer and
            Information Sciences, focusing on software engineering.
            <br />
            <br />
            Over the years, I've worked with technologies including TypeScript,
            React, Node.js, NestJS, MongoDB, and PostgreSQL. Although I enjoy
            full-stack development as a whole, I've developed a particular
            interest in the backend: designing APIs, working with databases,
            thinking through application architecture, and understanding how
            different systems communicate with one another. There's something
            satisfying about building the parts of an application that users
            might never see, but depend on every time they use it.
            <br />
            <br />
            Through my academic projects, personal applications, and
            collaborative experiences, I've also come to appreciate that
            software engineering is about much more than writing code. It
            involves communicating ideas, working with others, adapting when
            things don't go as planned, and recognizing that there's always
            something new to learn.
            <br />
            <br />
            Outside of programming, I enjoy reading, writing, practicing Urdu,
            collecting foreign currency, and occasionally revisiting hobbies
            like astrophotography and badminton. And, of course, sometimes I
            actually remember to get some sleep.
          </p>
        </div>
      </div>
      <div className="flex w-1/2 min-h-0 flex-col p-5 text-slate-300">
        <h2 className="mb-4 shrink-0 text-xl font-semibold uppercase font-mono">
          My Journey
        </h2>
        <div className="relative min-h-0 flex-1">
          <div className="h-full overflow-y-auto">
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
