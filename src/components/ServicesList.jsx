const topServices = [
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s1.png",
    title: "Web Application",
    text: "Custom web platforms designed for performance, scalability, and business growth.",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s2.png",
    title: "Mobile Application",
    text: "Modern mobile apps that help businesses connect with customers anywhere.",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s3.png",
    title: "UI/UX Design",
    text: "Clean, user-focused interfaces built around real business goals.",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s4.png",
    title: "Dedicated Team",
    text: "Skilled developers and designers working as an extension of your team.",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s5.png",
    title: "Support & Maintenance",
    text: "Reliable software support to keep your systems secure, stable, and updated.",
  },
];

const serviceDetails = [
  {
    title: "Web Application",
    text: "We provide cutting-edge custom software development services to help make business operations more efficient, collaborative, and manageable.",
  },
  {
    title: "Mobile Application",
    text: "Going mobile will help your business streamline operations, bring value to demanding modern customers, and help you tackle Big Data.",
  },
  {
    title: "UI/UX Design",
    text: "Great applications are defined by a great user experience. We take UX seriously, combining beautiful design with data-driven decisions.",
  },
  {
    title: "Dedicated Team",
    text: "We take the pain out of hiring and managing top-notch software engineers. Set up a dedicated software development team in weeks.",
  },
  {
    title: "Support & Maintenance",
    text: "We believe that professional maintenance and support is the right way to reduce software system TCO and ensure useful improvements.",
  },
];

export default function Services() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffaf3]">
      {/* Animated Soft Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] animate-blob rounded-full bg-[#ff9828]/25 blur-3xl" />
        <div className="absolute right-[-140px] top-[180px] h-[420px] w-[420px] animate-blob animation-delay-2000 rounded-full bg-[#ffd08a]/35 blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/3 h-[380px] w-[380px] animate-blob animation-delay-4000 rounded-full bg-[#ff7a18]/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,152,40,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,152,40,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,152,40,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,202,130,0.22),transparent_35%)]" />
      </div>

      {/* Floating Particles */}
      <span className="absolute left-[8%] top-32 h-3 w-3 animate-float rounded-full bg-[#ff9828]/60" />
      <span className="absolute right-[12%] top-56 h-4 w-4 animate-float animation-delay-2000 rounded-full bg-[#ff9828]/40" />
      <span className="absolute bottom-40 left-[18%] h-2.5 w-2.5 animate-float animation-delay-4000 rounded-full bg-[#f58212]/50" />

      {/* Top Services */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#ff9828]/20 bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ff8616] shadow-sm backdrop-blur">
            What We Do
          </span>

          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-[#111827] sm:text-5xl">
            Our Services
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            We build reliable digital products that help businesses grow,
            automate operations, and deliver better customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {topServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-6 text-center shadow-[0_18px_60px_rgba(17,24,39,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#ff9828]/50 hover:bg-white hover:shadow-[0_24px_80px_rgba(255,152,40,0.22)]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-[#ff9828] via-[#ffb347] to-[#f58212] transition-transform duration-500 group-hover:scale-x-100" />

              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#ff9828]/10 transition-all duration-500 group-hover:scale-150" />

              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-white shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-[#ff9828]/15 group-hover:to-orange-50">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#ff8616]">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="relative overflow-hidden bg-white/75 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,152,40,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,190,100,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-[#ff9828]/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ff8616] shadow-sm">
                Expertise
              </span>

              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-4xl">
                Service Details
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600 lg:ml-auto">
              From planning to delivery, we provide software solutions that are
              scalable, maintainable, and designed to support long-term business
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {serviceDetails.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white/90 p-8 shadow-[0_18px_50px_rgba(17,24,39,0.07)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-[#ff9828]/50 hover:shadow-[0_24px_80px_rgba(255,152,40,0.18)]"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#ff9828]/10 transition-all duration-500 group-hover:scale-150" />

                <div className="absolute right-6 top-6 text-6xl font-black text-gray-100 transition-colors duration-500 group-hover:text-orange-100">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <h3 className="mb-4 text-2xl font-bold text-[#ff8616]">
                    {item.title}
                  </h3>

                  <p className="mb-6 max-w-xl text-[15px] leading-8 text-gray-700">
                    {item.text}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 transition-all duration-300 hover:gap-3 hover:text-[#ff8616]"
                  >
                    Learn More
                    <span className="text-lg leading-none text-[#ff8616]">
                      →
                    </span>
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