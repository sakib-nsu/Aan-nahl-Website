import React from "react";

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative mt-12 flex min-h-[360px] items-center justify-center overflow-hidden bg-slate-950 px-6 text-center text-white">
        <div
          className="absolute inset-0 animate-heroZoom bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 animate-fadeUp">
          <h1 className="text-4xl font-black md:text-6xl">
            Innovation{" "}
            <span className="animate-gradientText bg-gradient-to-r from-[#ff7a00] via-[#ffb45c] to-[#ff7a00] bg-[length:200%_auto] bg-clip-text text-transparent">
              Engineering
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium text-slate-200 md:text-xl">
            We build digital solutions for clients worldwide.
          </p>

          <div className="mx-auto mt-7 h-1 w-24 animate-lineGrow rounded-full bg-[#ff7a00]" />
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative max-w-[470px] rounded-2xl bg-white p-3 shadow-2xl transition duration-700 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                alt="Modern software company office"
                className="h-[430px] w-full rounded-xl object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute -bottom-8 -left-8 w-72 animate-floatCard rounded-2xl bg-white p-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                  alt="Software team working"
                  className="h-32 w-full rounded-xl object-cover"
                />
              </div>

              <div className="absolute -bottom-12 right-[-35px] animate-popCard rounded-2xl bg-white px-6 py-5 shadow-2xl">
                <p className="text-sm font-bold text-slate-900">
                  Software Partner
                </p>
                <p className="font-black text-[#ff7a00]">Since 2004</p>
              </div>
            </div>
          </div>

          <div className="animate-slideRight">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff7a00]">
              In A Nutshell
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              About Us
            </h2>

            <div className="mt-5 h-1 w-16 animate-lineGrow rounded-full bg-[#ff7a00]" />

            <p className="mt-8 text-lg leading-8 text-slate-700">
              We are a custom software company in Bangladesh. We started as a
              start-up software outsourcing company in 2004 and became a
              Bangladesh limited company in 2005.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Since then, we have continued to grow every year by delivering
              practical and powerful technical solutions for clients across
              multiple industries.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              From design, development, testing, deployment, and content to
              complete technical support, our skilled team covers every stage of
              the software journey in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="animate-fadeUp text-sm font-black uppercase tracking-[0.3em] text-[#ff7a00]">
            Who We Are
          </p>

          <h2 className="mt-4 animate-fadeUp text-4xl font-black md:text-5xl">
            Delivering <span className="text-[#ff7a00]">Value.</span> Building{" "}
            <span className="text-[#ff7a00]">Trust.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl animate-fadeUp text-lg text-slate-600">
            Our experience, dedication, and team spirit help us deliver the best
            software solutions for our clients.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "💼",
                value: "20+",
                title: "Years Experience",
                text: "More than two decades of delivering innovative digital solutions.",
              },
              {
                icon: "🌍",
                value: "Global",
                title: "Client Support",
                text: "Serving clients across the globe with reliable and dedicated support.",
              },
              {
                icon: "👥",
                value: "Full",
                title: "Software Team",
                text: "A complete team of experts covering every stage of your project.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-cardUp rounded-3xl bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ff7a00]/10 text-4xl transition duration-500 hover:rotate-12 hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-5xl font-black text-[#ff7a00]">
                  {item.value}
                </h3>

                <h4 className="mt-3 text-xl font-black text-slate-900">
                  {item.title}
                </h4>

                <p className="mx-auto mt-4 max-w-xs leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes popCard {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes cardUp {
          from {
            opacity: 0;
            transform: translateY(45px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientText {
          to {
            background-position: 200% center;
          }
        }

        .animate-heroZoom {
          animation: heroZoom 12s ease-in-out infinite alternate;
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 1s ease forwards;
        }

        .animate-lineGrow {
          animation: lineGrow 1.1s ease forwards;
        }

        .animate-floatCard {
          animation: floatCard 4s ease-in-out infinite;
        }

        .animate-popCard {
          animation: popCard 0.8s ease forwards;
        }

        .animate-cardUp {
          opacity: 0;
          animation: cardUp 0.9s ease forwards;
        }

        .animate-gradientText {
          animation: gradientText 3s linear infinite;
        }
      `}</style>
    </main>
  );
}