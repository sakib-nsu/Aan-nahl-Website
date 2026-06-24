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
    <main className="overflow-hidden bg-[#FAF7F0] text-[#222222]">
      <section className="relative min-h-[430px] overflow-hidden bg-[#FAF7F0] pt-[110px]">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage:
              "url('https://aan-nahl.com/wp-content/uploads/2018/03/portfolio-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAF7F0_0%,#FFFFFF_55%,#FFF1D6_100%)]" />
        <div className="absolute -left-36 top-0 h-[420px] w-[420px] rounded-full bg-[#FFE8A3]/55 blur-[100px]" />
        <div className="absolute right-[-160px] bottom-[-80px] h-[440px] w-[440px] rounded-full bg-[#B7E4C7]/45 blur-[100px]" />

        <div className="relative z-10 mx-auto flex min-h-[320px] max-w-[1170px] items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-black leading-tight text-[#2B2B2B] md:text-7xl">
              Our notable{" "}
              <span className="text-[#B86B00]">collection!</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#666666]">
              No vision has to remain unfulfilled, it just has to be built!
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#FFFDF8] px-6 py-24">
        <div className="absolute left-[-220px] top-10 h-[520px] w-[520px] rounded-full bg-[#FFE8A3]/35 blur-[110px]" />
        <div className="absolute right-[-190px] bottom-16 h-[540px] w-[540px] rounded-full bg-[#D8F3DC]/45 blur-[115px]" />

        <div className="relative mx-auto max-w-[1170px]">
          <div className="mb-16 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-6 py-3 text-sm font-black transition-all duration-300 ${
                  active === cat
                    ? "bg-[#B86B00] text-white shadow-[0_12px_30px_rgba(184,107,0,0.25)]"
                    : "border border-[#F3D28A] bg-white text-[#666666] hover:border-[#B86B00] hover:text-[#B86B00]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <div
                key={`${active}-${item.title}-${index}`}
                className="portfolio-card group"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="relative overflow-hidden rounded-[28px] border border-[#F3D28A] bg-white p-4 shadow-[0_18px_55px_rgba(120,80,20,0.10)] transition-all duration-500 hover:-translate-y-3 hover:border-[#B86B00] hover:shadow-[0_25px_70px_rgba(120,80,20,0.16)]">
                  <div className="relative flex min-h-[220px] items-center justify-center rounded-[22px] bg-[#FAF7F0] p-5">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-[190px] w-full object-contain transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan.jpg";
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center rounded-[22px] bg-[#2B2B2B]/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9C74F] text-4xl font-light text-[#2B2B2B] shadow-lg">
                        +
                      </span>
                    </div>
                  </div>

                  <div className="relative px-2 pb-2 pt-6 text-center">
                    <h3 className="text-lg font-black text-[#2B2B2B] transition-colors duration-300 group-hover:text-[#B86B00]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#777777]">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .portfolio-card {
          opacity: 0;
          animation: cardReveal 0.7s ease forwards;
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </main>
  );
}