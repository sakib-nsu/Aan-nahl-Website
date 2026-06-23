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
    title: "Booster Involvement",
    category: "CakePHP",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/Boa1.jpg",
  },
  {
    title: "Buzzmoving",
    category: "CakePHP3",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/PW1.jpg",
  },
  {
    title: "Voi",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/voi.png",
  },
  {
    title: "Internetzone I",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/internetzone.png",
  },
  {
    title: "HCM Content Dashboard",
    category: "cakePHP2",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/hcm-content.png",
  },
  {
    title: "HCM Piwik Dashboard",
    category: "Laravel",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/hcm-piwik.png",
  },
  {
    title: "ByAppointment",
    category: "PHP",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/byappointment.png",
  },
  {
    title: "Moving Relocation",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/moving-relocation.png",
  },
  {
    title: "Gentle Moving",
    category: "Wordpress",
    img: "https://aan-nahl.com/wp-content/uploads/2018/03/gentle-moving.png",
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
    <main className="bg-white text-slate-950">
      {/* Banner */}
      <section className="relative mt-12 flex min-h-[260px] items-center justify-center overflow-hidden text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://aan-nahl.com/wp-content/uploads/2018/03/portfolio-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <h1 className="text-4xl font-black md:text-5xl">
            Our notable collection!
          </h1>
          <p className="mt-3 text-lg font-semibold">
            No vision has to remain unfulfilled, it just has to be built!
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Filter */}
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

          {/* Grid */}
          <div className="grid gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <div
                key={index}
                className="group animate-fadeUp"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[185px] w-full object-contain transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://www.aan-nahl.com/wp-content/uploads/2018/03/sochara.png";
                    }}
                  />
                </div>

                <h3 className="mt-4 text-base font-black text-black">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style>
    </main>
  );
}