import { useState } from "react";

const categories = ["All", "nodeJs", "Wordpress", "PHP", "Laravel", "CakePHP"];

const projects = [
  {
    title: "Sochara",
    category: "nodeJs",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan.jpg",
  },
  {
    title: "The Sperling Law Firm",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/sparlinglaw_01.jpg",
  },
  {
    title: "The Content Writers",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/CW1.jpg",
  },
  {
    title: "Boosters of America",
    category: "CakePHP",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/Boa1.jpg",
  },
  {
    title: "Poundwishes",
    category: "CakePHP3",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/PW1.jpg",
  },
  {
    title: "The Phone Man of OC",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/PM1.jpg",
  },
  {
    title: "Internetzone I",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/IZI1.jpg",
  },
  {
    title: "HCM Content Dashboard",
    category: "CakePHP",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/HCD1.jpg",
  },
  {
    title: "HCM Piwik Dashboard",
    category: "Laravel",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/HPW1.jpg",
  },
  {
    title: "ByAppointment",
    category: "PHP",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/BA1.jpg",
  },
  {
    title: "Moving Relocation",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/MR1.jpg",
  },
  {
    title: "Gentle Moving",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/MR1.jpg",
  },
  {
    title: "HCM Dashboard",
    category: "Laravel",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/HCM01-1.jpg",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((item) =>
          item.category.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative mt-12 flex min-h-[280px] items-center justify-center overflow-hidden text-center text-white">
        <div
          className="absolute inset-0 animate-bgZoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://aan-nahl.com/wp-content/uploads/2018/03/portfolio-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute left-10 top-10 h-32 w-32 animate-float rounded-full bg-[#ff9828]/20 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-40 w-40 animate-floatSlow rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 px-6 animate-fadeUp">
          <h1 className="text-4xl font-black md:text-5xl">
            Our notable collection!
          </h1>
          <p className="mt-3 text-lg font-semibold">
            No vision has to remain unfulfilled, it just has to be built!
          </p>
          <div className="mx-auto mt-6 h-1 w-24 animate-lineGrow rounded-full bg-[#ff9828]" />
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="absolute left-0 top-24 h-72 w-72 animate-float rounded-full bg-[#ff9828]/10 blur-3xl" />
        <div className="absolute right-0 bottom-24 h-72 w-72 animate-floatSlow rounded-full bg-slate-200/70 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 flex flex-wrap items-center justify-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative pb-3 text-sm font-black transition-all duration-300 ${
                  active === cat
                    ? "text-black after:w-full"
                    : "text-black hover:text-[#ff9828] after:w-0"
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ff9828] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <div
                key={`${active}-${index}`}
                className="group animate-cardUp text-center"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff9828]/0 via-[#ff9828]/0 to-[#ff9828]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <img
                    src={item.img}
                    alt={item.title}
                    className="relative z-10 h-[185px] w-full object-contain transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan.jpg";
                    }}
                  />
                </div>

                <h3 className="mt-5 text-base font-black text-black transition-colors duration-300 group-hover:text-[#ff9828]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm capitalize text-slate-400">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bgZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.12);
          }
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

        @keyframes cardUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        .animate-bgZoom {
          animation: bgZoom 12s ease-in-out infinite alternate;
        }

        .animate-fadeUp {
          animation: fadeUp 0.9s ease forwards;
        }

        .animate-cardUp {
          opacity: 0;
          animation: cardUp 0.8s ease forwards;
        }

        .animate-lineGrow {
          animation: lineGrow 1s ease forwards;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-floatSlow {
          animation: float 7s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}