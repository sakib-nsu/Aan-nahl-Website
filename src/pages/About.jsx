import React from "react";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6 text-center">
          <h1 className="animate-fade-up text-4xl font-extrabold md:text-6xl">
            Innovation Engineering
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 md:text-xl">
            We build digital solutions for clients worldwide.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-[0.3em] text-[#ff9828]">
                In A Nutshell
              </span>

              <h2 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
                A Trusted Software Partner Since 2004
              </h2>

              <div className="mt-6 h-1 w-24 rounded-full bg-[#ff9828]" />

              <p className="mt-8 text-lg leading-8 text-slate-600">
                We are a custom software company based in Bangladesh,
                helping businesses transform ideas into powerful digital
                products. Since our journey began in 2004, we have built
                long-term partnerships with clients around the globe by
                delivering reliable, scalable, and innovative software
                solutions.
              </p>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-700">
                What started as a software outsourcing startup evolved into a
                fully established limited company in 2005. Today, we continue
                to grow by solving complex business challenges through custom
                software development, product engineering, and digital
                transformation services.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Our multidisciplinary team covers every stage of product
                development, including UI/UX design, development, quality
                assurance, deployment, maintenance, and support. We combine
                technical expertise with business insight to create solutions
                that generate measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {[
            ["20+", "Years Experience"],
            ["300+", "Projects Delivered"],
            ["100+", "Global Clients"],
            ["24/7", "Technical Support"],
          ].map(([value, label], index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-4xl font-extrabold text-[#ff9828]">
                {value}
              </h3>
              <p className="mt-3 font-medium text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-slate-900">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              We provide end-to-end software development services for startups,
              enterprises, and growing businesses worldwide.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Custom Software Development",
              "Web Application Development",
              "Mobile App Development",
              "QA & Testing",
              "UI/UX Design",
              "Cloud Solutions",
              "DevOps & Deployment",
              "Technical Consulting",
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 p-6 transition-all duration-500 hover:border-[#ff9828] hover:shadow-xl"
              >
                <h3 className="font-bold text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}