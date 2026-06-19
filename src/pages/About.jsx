
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section
        className="relative min-h-[420px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/software-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
            Since 2004
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Innovation Engineering
          </h1>

          <p className="mt-5 text-lg md:text-xl font-medium text-slate-200">
            We build practical, powerful and scalable digital solutions for
            clients worldwide.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="relative -mt-16 px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl bg-white shadow-2xl shadow-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 md:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                About Us
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-950">
                A trusted software partner from Bangladesh
              </h2>

              <div className="mt-6 h-1 w-24 rounded-full bg-blue-600"></div>

              <p className="mt-8 text-base md:text-lg leading-8 text-slate-700">
                We are a custom software company based in Bangladesh. Our
                journey started in 2004 as a start-up software outsourcing
                company. In 2005, we became a Bangladesh limited company, and
                since then, we have continued to grow every year by helping
                clients solve real technical challenges.
              </p>

              <p className="mt-5 text-base md:text-lg leading-8 text-slate-700">
                We build software products for international customers across
                multiple industries. Our goal is simple: deliver great software
                that reaches users smoothly, performs reliably, and creates real
                business value.
              </p>
            </div>

            {/* Right Highlight Box */}
            <div className="bg-slate-950 p-8 md:p-14 text-white flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold">
                In a Nutshell
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                We provide practical, pragmatic and powerful software solutions.
                From design and development to testing, deployment and content,
                our team covers every important stage of the digital product
                journey.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h4 className="text-3xl font-extrabold text-white">2004</h4>
                  <p className="mt-2 text-sm text-slate-300">
                    Started our journey
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h4 className="text-3xl font-extrabold text-white">2005</h4>
                  <p className="mt-2 text-sm text-slate-300">
                    Became limited company
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h4 className="text-3xl font-extrabold text-white">Global</h4>
                  <p className="mt-2 text-sm text-slate-300">
                    International clients
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h4 className="text-3xl font-extrabold text-white">Full</h4>
                  <p className="mt-2 text-sm text-slate-300">
                    Product support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-950">
              Everything needed to build better software
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Our mix of skills and talent allows us to support clients from
              idea to launch and beyond.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Software Development",
                text: "We build reliable and scalable software products for businesses across multiple industries.",
              },
              {
                title: "Product Design",
                text: "We design user-focused digital experiences that are clean, practical and easy to use.",
              },
              {
                title: "Testing & Quality",
                text: "We test products carefully to improve stability, performance and user satisfaction.",
              },
              {
                title: "Deployment",
                text: "We help clients launch software smoothly with proper setup and technical support.",
              },
              {
                title: "Content Support",
                text: "We support digital products with clear content that fits the product and its audience.",
              },
              {
                title: "Technical Solutions",
                text: "We solve complex technical challenges with practical and business-focused solutions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-950">
              Getting great software out to users
            </h2>
          </div>

          <div className="lg:col-span-2 rounded-3xl bg-slate-950 p-8 md:p-12 text-white">
            <p className="text-lg md:text-xl leading-9 text-slate-200">
              We understand the challenges customers face within and across
              industries. That is why we focus on building clear, practical and
              powerful solutions. Our team brings design, development, testing,
              deployment and support together in one place, helping clients move
              faster with confidence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
