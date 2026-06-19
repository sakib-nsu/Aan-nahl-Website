import React from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Buzz Moving",
    description:
      "BuzzMoving acts as a bridge between you and the movers to make the entire process smooth and easy without even having to pick up the phone.",
    website: "buzzmoving.com",
    url: "https://buzzmoving.com",
    image: "https://aan-nahl.com/wp-content/uploads/2018/03/w1.png",
    tags: ["Web Application", "UI/UX", "Responsive Design"],
  },
];

export default function OurWork() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-20 text-black sm:px-6 lg:px-8 lg:py-28">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 animate-workBlob rounded-full bg-[#ff9828]/15 blur-3xl" />
        <div className="absolute right-[-140px] top-44 h-[430px] w-[430px] animate-workBlob animation-delay-2000 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-[-170px] left-1/3 h-[380px] w-[380px] animate-workBlob animation-delay-4000 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,152,40,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,152,40,0.07)_1px,transparent_1px)] bg-[size:46px_46px] opacity-40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,152,40,0.10),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,190,100,0.16),transparent_38%)]" />
      </div>

      {/* Floating Dots */}
      <span className="absolute left-[9%] top-36 h-3 w-3 animate-workFloat rounded-full bg-[#ff9828]/60" />
      <span className="absolute right-[12%] top-52 h-4 w-4 animate-workFloat animation-delay-2000 rounded-full bg-orange-400/45" />
      <span className="absolute bottom-40 left-[20%] h-2.5 w-2.5 animate-workFloat animation-delay-4000 rounded-full bg-amber-500/55" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff9828]/20 bg-white/80 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#ff8616] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Portfolio
          </span>

          <h2 className="text-4xl font-black uppercase tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Our Work
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700 sm:text-lg">
            Some of our recent projects we are proud of.{" "}
            <a
              href="/portfolio"
              className="group inline-flex items-center gap-1 font-bold text-[#ff8616] transition hover:text-[#f58212]"
            >
              View All
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </p>
        </div>

        {/* Project Content */}
        <div className="mt-20 grid items-center gap-12 lg:mt-24 lg:grid-cols-[0.78fr_1.42fr] lg:gap-16">
          {projects.map((project) => (
            <React.Fragment key={project.title}>
              {/* Text Card */}
              <div className="relative mx-auto max-w-xl text-center lg:text-left">
                <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-[#ff9828]/10 blur-2xl lg:block" />

                <div className="relative rounded-[2rem] border border-orange-100/80 bg-white/80 p-8 shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#ff9828]/40 hover:shadow-[0_28px_90px_rgba(255,152,40,0.18)] sm:p-10">
                  <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#ff9828]/20 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#ff8616]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-gray-700 sm:text-xl">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff9828] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f58212] hover:shadow-orange-300"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-[#ff8616] transition hover:text-[#f58212]"
                    >
                      {project.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Preview */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-workPulse rounded-full bg-[#ff9828]/10 blur-3xl" />

                <div className="relative">
                  <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-[#ff9828]/15 via-amber-200/20 to-orange-400/15 blur-2xl" />

                  <img
                    src={project.image}
                    alt={`${project.title} responsive website preview`}
                    className="relative w-full max-w-[820px] animate-workImageFloat object-contain drop-shadow-[0_28px_45px_rgba(17,24,39,0.18)] transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}