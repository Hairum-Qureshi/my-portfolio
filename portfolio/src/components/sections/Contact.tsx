import { IoMdMail } from "react-icons/io";
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-screen flex-col p-5 text-slate-300"
    >
      <h1 className="my-5 font-mono text-5xl font-semibold uppercase text-sky-500">
        Let's connect!
      </h1>

      <div className="my-3 flex flex-col gap-5 md:flex-row">
        {/* Contact Information */}
        <div className="w-full rounded-xl border border-slate-800 bg-slate-950 p-6 shadow-xl md:w-1/2 md:p-8">
          <div className="mb-8">
            <h2 className="font-mono text-3xl font-semibold text-white">
              Contact Information
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              Have a project in mind you'd like to work on?
              <br />
              Interested in connecting? Feel free to reach out!
            </p>
          </div>

          <div className="divide-y divide-slate-800">
            {/* Email */}
            <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <IoMdMail className="text-xl text-sky-400" />

                <span className="font-mono text-sm uppercase tracking-wider text-slate-500">
                  Email
                </span>
              </div>

              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=hairum.qqureshi@gmail.com&tf=cm"
                className="font-mono text-sm text-slate-200 transition-colors hover:text-sky-400"
              >
                hairum.qqureshi@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg text-sky-400" />

                <span className="font-mono text-sm uppercase tracking-wider text-slate-500">
                  Phone
                </span>
              </div>

              <a
                href="tel:+13024800559"
                className="font-mono text-sm text-slate-200 transition-colors hover:text-sky-400"
              >
                +1 (302) 480-0559
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-xl text-sky-400" />

                <span className="font-mono text-sm uppercase tracking-wider text-slate-500">
                  LinkedIn
                </span>
              </div>

              <a
                href="https://www.linkedin.com/in/hairum-qureshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-sm text-slate-200 transition-colors hover:text-sky-400"
              >
                linkedin.com/in/hairum-qureshi
                <FaExternalLinkAlt className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* GitHub */}
            <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <FaGithub className="text-xl text-sky-400" />

                <span className="font-mono text-sm uppercase tracking-wider text-slate-500">
                  GitHub
                </span>
              </div>

              <a
                href="https://www.github.com/Hairum-Qureshi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-sm text-slate-200 transition-colors hover:text-sky-400"
              >
                github.com/Hairum-Qureshi
                <FaExternalLinkAlt className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full rounded-xl border border-slate-800 bg-slate-950 p-6 shadow-xl md:w-1/2 md:p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <IoMdMail className="text-2xl text-sky-400" />

              <p className="font-mono text-sm uppercase tracking-widest text-sky-400">
                Send a message
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-mono text-sm uppercase tracking-wider text-slate-500"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-mono text-sm uppercase tracking-wider text-slate-500"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-mono text-sm uppercase tracking-wider text-slate-500"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me what's on your mind..."
                required
                className="w-full resize-none rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              className="group mt-2 flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-slate-950 transition hover:bg-sky-400 active:scale-[0.98]"
            >
              <IoMdMail className="text-lg" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}