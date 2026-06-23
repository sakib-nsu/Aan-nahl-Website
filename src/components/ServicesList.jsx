const topServices = [
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s1.png",
    title: "Web Application",
    text: "High-performance web platforms built to scale with your business.",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s2.png",
    title: "Mobile Application",
    text: "Modern mobile apps that connect customers with your brand anywhere.",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s3.png",
    title: "UI/UX Design",
    text: "Beautiful, intuitive interfaces designed around real user behavior.",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s4.png",
    title: "Dedicated Team",
    text: "Expert developers and designers working as your extended team.",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s5.png",
    title: "Support & Maintenance",
    text: "Reliable support to keep your software secure, stable, and updated.",
  },
];

const serviceDetails = [
  {
    title: "Web Application",
    text: "We create custom web applications that simplify operations, improve collaboration, automate workflows, and support long-term business growth.",
  },
  {
    title: "Mobile Application",
    text: "Our mobile app solutions help businesses reach customers faster, improve engagement, and deliver seamless digital experiences across devices.",
  },
  {
    title: "UI/UX Design",
    text: "We design clean, conversion-focused digital products using user research, modern visual systems, and practical business goals.",
  },
  {
    title: "Dedicated Team",
    text: "Build your own remote development team with skilled engineers, designers, and project experts ready to support your roadmap.",
  },
  {
    title: "Support & Maintenance",
    text: "We provide ongoing technical support, updates, security monitoring, and performance improvements for smooth software operations.",
  },
];

export default function Services() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff7ed] py-0">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-300/40 blur-3xl animate-pulse" />
        <div className="absolute right-[-120px] top-40 h-[450px] w-[450px] rounded-full bg-amber-300/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-180px] left-1/3 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl animate-pulse" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.09)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-200 bg-white/80 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-orange-500 shadow-sm backdrop-blur">
            What We Do
          </span>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Smart Digital
            <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            We design, build, and maintain powerful digital products that help
            businesses grow faster, work smarter, and serve customers better.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {topServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-6 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-orange-300 hover:bg-white hover:shadow-[0_30px_90px_rgba(249,115,22,0.25)]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-200/50" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-200/40" />
              </div>

              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 via-white to-amber-100 shadow-inner transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <div className="absolute inset-0 rounded-3xl border border-orange-200/70" />
                <img
                  src={service.icon}
                  alt={service.title}
                  className="relative h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <h3 className="relative mb-3 text-lg font-extrabold text-gray-950 transition-colors duration-300 group-hover:text-orange-500">
                {service.title}
              </h3>

              <p className="relative text-sm leading-6 text-gray-600">
                {service.text}
              </p>

              <span className="relative mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-lg text-orange-500 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                →
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-white/80 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.12),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(251,191,36,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-orange-500">
                Expertise
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
                How We Help You Grow
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600 lg:ml-auto">
              From strategy and design to development and support, our team
              delivers scalable solutions built for real business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {serviceDetails.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_22px_70px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_30px_90px_rgba(249,115,22,0.18)] sm:p-8"
              >
                <div className="absolute right-5 top-5 text-7xl font-black leading-none text-orange-50 transition-all duration-500 group-hover:scale-110 group-hover:text-orange-100">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute -left-16 bottom-[-70px] h-40 w-40 rounded-full bg-orange-100/70 transition-all duration-500 group-hover:scale-125" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-lg font-black text-white shadow-lg shadow-orange-200">
                    {index + 1}
                  </div>

                  <h3 className="mb-4 text-2xl font-black text-gray-950 transition-colors duration-300 group-hover:text-orange-500">
                    {item.title}
                  </h3>

                  <p className="mb-7 max-w-xl text-[15px] leading-8 text-gray-600">
                    {item.text}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 transition-all duration-300 hover:gap-4 hover:bg-orange-500 hover:text-white"
                  >
                    Learn More
                    <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}