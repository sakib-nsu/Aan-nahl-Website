import React from "react";

const technologies = [
  {
    name: "Microsoft .NET",
    logo: "https://aan-nahl.com/wp-content/uploads/2019/04/dotnet.png",
  },
  {
    name: "MongoDB",
    logo: "https://aan-nahl.com/wp-content/uploads/2018/03/t1.png",
  },
  {
    name: "Node.js",
    logo: "https://aan-nahl.com/wp-content/uploads/2018/03/t2.png",
  },
  {
    name: "Android",
    logo: "https://aan-nahl.com/wp-content/uploads/2018/03/t3.png",
  },
  {
    name: "AngularJS",
    logo: "https://aan-nahl.com/wp-content/uploads/2018/03/t4.png",
  },
  {
    name: "HTML5",
    logo: "https://aan-nahl.com/wp-content/uploads/2018/03/t5.png",
  },
  {
    name: "Microsoft SQL Server",
    logo: "https://aan-nahl.com/wp-content/uploads/2018/03/t6.png",
  },
  {
    name: "PHP",
    logo: "https://aan-nahl.com/wp-content/uploads/2018/03/t7.png",
  },
];

export default function TechExpertise() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="tech-blob absolute -left-32 top-8 h-80 w-80 rounded-full bg-[#ff9828]/10 blur-3xl" />
          <div className="tech-blob tech-delay-2 absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="tech-blob tech-delay-4 absolute left-1/3 top-32 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,152,40,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,152,40,0.06)_1px,transparent_1px)] bg-[size:46px_46px] opacity-40" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,152,40,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,190,100,0.14),transparent_40%)]" />
        </div>

        {/* Floating Dots */}
        <span className="tech-float absolute left-[10%] top-32 h-3 w-3 rounded-full bg-[#ff9828]/60" />
        <span className="tech-float tech-delay-2 absolute right-[12%] top-44 h-4 w-4 rounded-full bg-orange-400/45" />
        <span className="tech-float tech-delay-4 absolute bottom-32 left-[22%] h-2.5 w-2.5 rounded-full bg-amber-500/55" />

        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <span className="mb-5 inline-flex rounded-full border border-[#ff9828]/20 bg-orange-50/80 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#ff8616] shadow-sm backdrop-blur">
              Technologies
            </span>

            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Key Tech Expertise
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              We use reliable, scalable, and modern technologies to build
              high-performing web, mobile, and enterprise software solutions.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="mt-20 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.slice(0, 6).map((tech, index) => (
              <TechLogo key={tech.name} tech={tech} index={index} />
            ))}
          </div>

          {/* Second Row */}
          <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 sm:mx-auto sm:max-w-xl">
            {technologies.slice(6).map((tech, index) => (
              <TechLogo key={tech.name} tech={tech} index={index + 6} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes techFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes techBlob {
          0% {
            transform: translate(0, 0) scale(1);
          }

          33% {
            transform: translate(30px, -35px) scale(1.08);
          }

          66% {
            transform: translate(-24px, 24px) scale(0.96);
          }

          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes techFloat {
          0% {
            transform: translateY(0);
            opacity: 0.45;
          }

          50% {
            transform: translateY(-22px);
            opacity: 1;
          }

          100% {
            transform: translateY(0);
            opacity: 0.45;
          }
        }

        .tech-card {
          animation: techFadeUp 0.75s ease both;
        }

        .tech-blob {
          animation: techBlob 9s infinite ease-in-out;
        }

        .tech-float {
          animation: techFloat 5.5s infinite ease-in-out;
        }

        .tech-delay-2 {
          animation-delay: 2s;
        }

        .tech-delay-4 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}

function TechLogo({ tech, index }) {
  return (
    <div
      className="tech-card group relative flex h-32 w-full max-w-[190px] items-center justify-center rounded-3xl border border-transparent bg-white/75 p-6 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-[#ff9828]/30 hover:bg-white hover:shadow-[0_22px_70px_rgba(255,152,40,0.18)]"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-x-8 top-0 h-1 scale-x-0 rounded-full bg-[#ff9828] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#ff9828]/0 transition-all duration-500 group-hover:bg-[#ff9828]/10" />

      <img
        src={tech.logo}
        alt={tech.name}
        loading="lazy"
        className="relative max-h-24 max-w-[155px] object-contain transition-all duration-500 group-hover:scale-110"
      />

      <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 shadow-lg transition-all duration-300 group-hover:bottom-4 group-hover:opacity-100">
        {tech.name}
      </span>
    </div>
  );
}