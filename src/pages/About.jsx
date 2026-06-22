
import React from "react";

const stats = [
  {
    number: "2004",
    title: "Started Journey",
    text: "Began as a software outsourcing start-up in Bangladesh.",
  },
  {
    number: "2005",
    title: "Limited Company",
    text: "Became a Bangladesh limited company and continued growing.",
  },
  {
    number: "Global",
    title: "Client Support",
    text: "Serving international customers across multiple industries.",
  },
  {
    number: "Full",
    title: "Product Process",
    text: "Design, development, testing, deployment and content support.",
  },
];

const expertise = [
  "Custom Software Development",
  "Product Design",
  "Software Testing",
  "Deployment Support",
  "Content Support",
  "Technical Solutions",
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[460px] items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/software-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>

        {/* Animated Glow */}
        <div className="absolute left-10 top-24 h-28 w-28 rounded-full bg-[#ff9828]/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-16 right-16 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-float-delay"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.35em] text-[#ff9828]">
            Since 2004
          </p>

          <h1 className="animate-fade-up animation-delay-200 mt-5 text-4xl font-extrabold md:text-6xl">
            Innovation Engineering
          </h1>

          <p className="animate-fade-up animation-delay-400 mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-200 md:text-xl">
            We build practical, powerful and scalable digital solutions for
            clients worldwide.
          </p>
        </div>
      </section>

      {/* About Intro */}
      <section className="relative px-6 py-24 md:px-10 lg:px-16">
        <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-[#ff9828]/10 blur-3xl"></div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff9828]">
              About Us
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              A trusted software partner from Bangladesh
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-[#ff9828]"></div>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We are a custom software company based in Bangladesh, helping
              global clients build practical, powerful and reliable digital
              products.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-700">
              We started as a start-up software outsourcing company in 2004. In
              2005, we became a Bangladesh limited company and have been growing
              every year by solving real technical problems for our clients.
            </p>
          </div>

          {/* Image Card */}
          <div className="animate-fade-up animation-delay-300">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/about-software-team.jpg"
                alt="Software development team"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff9828]">
                  In a Nutshell
                </p>

                <h3 className="mt-3 text-2xl font-extrabold">
                  We create software that solves real business challenges.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-slate-50 px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="animate-fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff9828]">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Built on practical engineering and long-term growth
            </h2>
          </div>

          <div className="animate-fade-up animation-delay-200 lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
              <p className="text-base leading-8 text-slate-700">
                We offer software development to international customers across
                multiple industries. We understand the challenges that our
                customers face within and across these industries. That is why
                we provide practical, pragmatic and powerful solutions to
                address those challenges.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-700">
                Getting great software out to users is the single goal that
                drives us. Our mix of skills and talent means we have everything
                to meet that goal in one place. Design, development, testing,
                deployment, content and everything between those clearly defined
                roles, we cover it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-slate-950 px-6 py-24 text-white md:px-10 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/code-workspace.jpg')",
          }}
        ></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff9828]">
              Our Growth
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
              Years of experience, global clients and full-cycle delivery
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.title}
                className="group animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-500 hover:-translate-y-3 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#ff9828]/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-4xl font-extrabold text-[#ff9828] transition duration-300 group-hover:scale-110">
                  {item.number}
                </h3>

                <p className="mt-4 text-lg font-bold text-white">
                  {item.title}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="animate-fade-up">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff9828]">
                Our Expertise
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Everything needed to build better software
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our mix of skills and talent allows us to support clients from
                idea to launch and beyond.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {expertise.map((item, index) => (
                  <div
                    key={item}
                    className="group animate-fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#ff9828]/60 hover:shadow-xl"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff9828] font-extrabold text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold text-slate-950">
                      {item}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Practical, reliable and business-focused support for
                      modern digital products.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white">
          <div className="relative px-8 py-16 text-center md:px-12">
            <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-[#ff9828]/25 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-white/10 blur-3xl animate-pulse"></div>

            <div className="relative z-10 animate-fade-up">
              <h2 className="text-3xl font-extrabold md:text-5xl">
                Our goal is simple: get great software out to users.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                We combine skills, talent and experience to deliver software
                that solves real challenges and creates value for clients
                worldwide.
              </p>

              <a
                href="/contact-us"
                className="mt-8 inline-flex bg-[#ff9828] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-[#f58212] hover:shadow-xl hover:shadow-[#ff9828]/30"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
