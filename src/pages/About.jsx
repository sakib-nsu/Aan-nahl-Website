const aboutStats = [
  { value: "8+", label: "Years Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#f8f4ef] text-[#1f2933]">
      <section className="relative px-5 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-120px] top-20 h-[360px] w-[360px] rounded-full bg-[#ffd6a5]/50 blur-[90px]" />
          <div className="absolute right-[-140px] top-40 h-[420px] w-[420px] rounded-full bg-[#b7e4c7]/50 blur-[100px]" />
          <div className="absolute bottom-[-180px] left-1/2 h-[360px] w-[650px] -translate-x-1/2 rounded-full bg-[#cdb4db]/35 blur-[90px]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-[#2d6a4f]/20 bg-white/70 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#2d6a4f] shadow-sm">
              About Us
            </span>

            <h1 className="mt-6 text-4xl font-black uppercase leading-tight tracking-tight text-[#1b4332] sm:text-5xl lg:text-7xl">
              We Build Digital
              <span className="block text-[#d97706]">Experiences</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#4b5563] sm:text-lg">
              We are a creative technology team helping businesses design,
              develop, and maintain modern digital products that feel simple,
              useful, and meaningful for real people.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/contact-us"
                className="rounded-full bg-[#2d6a4f] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#1b4332]"
              >
                Contact Us
              </a>

              <a
                href="/services"
                className="rounded-full border border-[#d97706]/30 bg-white/70 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-[#d97706] transition hover:bg-[#d97706] hover:text-white"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/75 p-6 shadow-[0_25px_80px_rgba(31,41,51,0.12)] backdrop-blur">
              <div className="rounded-[2rem] bg-[#fff7ed] p-8">
                <h2 className="text-2xl font-black text-[#1b4332]">
                  Who We Are
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#4b5563]">
                  Our focus is simple: build reliable software with clean
                  design, strong performance, and practical business value. From
                  websites and web apps to mobile apps and long-term support, we
                  work as a trusted digital partner.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {aboutStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl bg-white p-5 text-center shadow-sm"
                    >
                      <h3 className="text-3xl font-black text-[#d97706]">
                        {item.value}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-[#4b5563]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#e9f5db] p-8 shadow-[0_25px_70px_rgba(31,41,51,0.08)] sm:p-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#2d6a4f]">
                Our Values
              </span>

              <h2 className="mt-4 text-3xl font-black uppercase text-[#1b4332] sm:text-4xl">
                Human First, Business Focused
              </h2>
            </div>

            <div className="lg:col-span-2 grid gap-6 md:grid-cols-3">
              {["Quality", "Transparency", "Growth"].map((value) => (
                <div
                  key={value}
                  className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <h3 className="text-xl font-black text-[#d97706]">
                    {value}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#4b5563]">
                    We keep every project clear, useful, and designed around
                    long-term results.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}