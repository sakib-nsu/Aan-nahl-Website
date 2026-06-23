const jobs = [
  {
    title: "Full Stack Software Engineer",
    vacancy: "06",
    type: "Full Time",
    workplace: "Office",
    experience: "2 to 3 Years",
    skills: ["Laravel", "Django", "Node.js", "React", "Next.js", "TailwindCSS"],
    description:
      "Work on modern web applications, backend APIs, user interfaces, performance optimization, and scalable business solutions.",
  },
  {
    title: "Mid-Level WordPress Developer",
    vacancy: "05",
    type: "Full Time",
    workplace: "Office",
    experience: "2 to 3 Years",
    skills: ["WordPress", "PHP", "Elementor", "WooCommerce", "JavaScript"],
    description:
      "Develop, customize, and maintain WordPress websites with strong focus on performance, security, responsiveness, and user experience.",
  },
  {
    title: "Junior SEO Specialist",
    vacancy: "15",
    type: "Full Time",
    workplace: "Office",
    experience: "At least 2 Years",
    skills: ["On-Page SEO", "Analytics", "Search Console", "Link Building"],
    description:
      "Support SEO strategy through content optimization, reporting, ranking improvement, keyword planning, and technical SEO basics.",
  },
];

const benefits = [
  "Weekly Holiday",
  "Fully Subsidized Lunch",
  "Yearly Salary Review",
  "Festival Bonus",
  "Friendly Team Culture",
  "Career Growth Opportunity",
];

export default function Career() {
  return (
    <section className="relative overflow-hidden bg-[#fff7ed]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-orange-300/40 blur-3xl" />
        <div className="absolute right-[-120px] top-48 h-[420px] w-[420px] rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/3 h-[380px] w-[380px] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-white/80 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 shadow-sm backdrop-blur">
              Join Our Team
            </span>

            <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Build Your Career
              <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                With Aan-Nahl
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Explore open positions at Aan-Nahl and become part of a skilled
              software team working on web applications, mobile solutions,
              UI/UX, SEO, and digital business growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:recruitment@aan-nahl.com"
                className="rounded-full bg-orange-500 px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Send Your CV
              </a>

              <a
                href="#open-positions"
                className="rounded-full border border-orange-200 bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-orange-500 transition hover:-translate-y-1 hover:bg-orange-50"
              >
                View Jobs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-white/80 bg-white/75 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-orange-500 p-6 text-white">
                  <h3 className="text-4xl font-black">26+</h3>
                  <p className="mt-2 text-sm font-semibold">Open Vacancies</p>
                </div>

                <div className="rounded-3xl bg-gray-950 p-6 text-white">
                  <h3 className="text-4xl font-black">3</h3>
                  <p className="mt-2 text-sm font-semibold">Active Positions</p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm sm:col-span-2">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                    Apply Now
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-gray-950">
                    recruitment@aan-nahl.com
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Send your updated CV with the position name in the email
                    subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="open-positions" className="mt-24">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full border border-orange-200 bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500">
              Open Positions
            </span>

            <h2 className="mt-5 text-3xl font-black uppercase text-gray-950 sm:text-4xl">
              Explore Current Opportunities
            </h2>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <article
                key={job.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-orange-300 hover:shadow-[0_30px_90px_rgba(249,115,22,0.2)]"
              >
                <div className="absolute right-5 top-5 text-7xl font-black text-orange-50 transition group-hover:text-orange-100">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-xl font-black text-white shadow-lg shadow-orange-200">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl font-black text-gray-950 transition group-hover:text-orange-500">
                    {job.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {job.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-orange-50 p-4">
                      <p className="font-bold text-gray-500">Vacancy</p>
                      <p className="mt-1 font-black text-gray-950">
                        {job.vacancy}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-orange-50 p-4">
                      <p className="font-bold text-gray-500">Job Type</p>
                      <p className="mt-1 font-black text-gray-950">
                        {job.type}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-orange-50 p-4">
                      <p className="font-bold text-gray-500">Workplace</p>
                      <p className="mt-1 font-black text-gray-950">
                        {job.workplace}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-orange-50 p-4">
                      <p className="font-bold text-gray-500">Experience</p>
                      <p className="mt-1 font-black text-gray-950">
                        {job.experience}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-orange-100 bg-white px-4 py-2 text-xs font-bold text-orange-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href="mailto:recruitment@aan-nahl.com"
                    className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-gray-950 px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:bg-orange-500"
                  >
                    Apply Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-[2.5rem] bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500">
                Benefits
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase text-gray-950">
                Why Work With Us?
              </h2>
              <p className="mt-4 text-base leading-8 text-gray-600">
                Aan-Nahl offers a supportive office culture, learning
                opportunities, and benefits designed to help team members grow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                    ✓
                  </span>
                  <p className="font-bold text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-gradient-to-r from-orange-500 to-amber-400 p-8 text-center text-white shadow-[0_30px_90px_rgba(249,115,22,0.3)] sm:p-12">
          <h2 className="text-3xl font-black uppercase sm:text-4xl">
            Ready To Start Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90">
            Send your CV to recruitment@aan-nahl.com and mention the position
            you are applying for.
          </p>

          <a
            href="mailto:recruitment@aan-nahl.com"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-orange-500 transition hover:-translate-y-1 hover:bg-gray-950 hover:text-white"
          >
            Apply Via Email
          </a>
        </div>
      </div>
    </section>
  );
}