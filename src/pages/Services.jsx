const topServices = [
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s1.png",
    title: "Web Application",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s2.png",
    title: "Mobile Application",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s3.png",
    title: "UI/UX Design",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s4.png",
    title: "Dedicated Team",
  },
  {
    icon: "https://aan-nahl.com/wp-content/uploads/2018/03/s5.png",
    title: "Support & Maintenance",
  },
];

const services = [
  {
    title: "Web Application",
    subtitle: "One of the main focuses of Aan-Nahl",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    intro:
      "We provide cutting-edge custom software development services to help make business operations more efficient, collaborative, and manageable.",
    points: [
      {
        title: "Progressive Web Development",
        text: "We develop fast progressive web apps to enhance your business and provide a smooth user experience on every platform.",
      },
      {
        title: "Content Management Systems",
        text: "Our developers build suitable CMS platforms like WordPress and Magento, or custom CMS solutions using PHP frameworks.",
      },
      {
        title: "E-learning Software",
        text: "We create education software for learning, testing, attendance, grading, and analytics.",
      },
      {
        title: "CRM and ERP Systems",
        text: "We build business software that improves customer management, internal workflow, and operational efficiency.",
      },
    ],
  },
  {
    title: "Mobile Application",
    subtitle: "Designing and building mobile apps",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
    intro:
      "Going mobile helps your business streamline operations, bring value to customers, and stay ready for the modern digital world.",
    points: [
      {
        title: "Native & Cross-platform Apps",
        text: "We build mobile apps for Android, iOS, and cross-platform requirements.",
      },
      {
        title: "Business Apps",
        text: "We create apps for time tracking, project management, communication, and productivity.",
      },
      {
        title: "Social Media Apps",
        text: "We develop social platforms for networking, sharing photos, videos, and community content.",
      },
      {
        title: "Maps & Navigation Apps",
        text: "We build map and navigation apps with real-time location and GPS capabilities.",
      },
    ],
  },
  {
    title: "UI/UX Design",
    subtitle: "Enhance your software usability",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80",
    intro:
      "Great applications are defined by great user experience. We combine beautiful design with data-driven research to create practical and attractive interfaces.",
    points: [
      {
        title: "Research",
        text: "We identify the best way users interact with your product.",
      },
      {
        title: "Information Design",
        text: "We organize your content so users can understand it quickly.",
      },
      {
        title: "Interaction Design",
        text: "We design user flows and prototypes based on feedback.",
      },
      {
        title: "Visual Design",
        text: "We create visually pleasing and functional interfaces.",
      },
      {
        title: "Front-end Development",
        text: "We build client-facing products according to approved designs.",
      },
      {
        title: "Back-end Development",
        text: "We build the backbone of your software solution.",
      },
    ],
  },
  {
    title: "Dedicated Team",
    subtitle: "Amazing dedicated talent at your fingertips",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    intro:
      "We help you hire and manage top software engineers. Build a dedicated team and integrate skilled resources into your in-house workflow.",
    points: [
      {
        title: "Kick Start",
        text: "We analyze your business and technical requirements to form the right team strategy.",
      },
      {
        title: "Ramp Up",
        text: "We help scale your team quickly with experienced developers and designers.",
      },
      {
        title: "Operate",
        text: "We manage ongoing development, improvement plans, support, and delivery tracking.",
      },
    ],
  },
  {
    title: "Support & Maintenance",
    subtitle: "Support at every stage of your technological journey",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    intro:
      "Professional maintenance and support reduce system cost, improve stability, and keep your software secure and useful.",
    points: [
      {
        title: "Quality Assurance & Testing",
        text: "We provide quality-focused testing and manual or automated verification.",
      },
      {
        title: "Security",
        text: "We monitor, test, and protect your digital assets from risks.",
      },
      {
        title: "Consulting",
        text: "We offer technical consulting and custom software expertise.",
      },
      {
        title: "Experts Assist",
        text: "Our specialists help resolve project roadblocks and technical issues.",
      },
      {
        title: "Data & Application Integration",
        text: "We integrate data between databases and operational applications.",
      },
    ],
  },
];

export default function Services() {
  return (
    <main className="overflow-hidden bg-white text-[#222]">
      <section className="relative mt-12 overflow-hidden bg-black px-5 py-10 text-white sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://aan-nahl.com/wp-content/uploads/2018/03/services-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto max-w-7xl">
          <h1 className="mb-8 text-center text-3xl font-black text-white md:text-4xl">
            Services
          </h1>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {topServices.map((service) => (
              <div
                key={service.title}
                className="group text-center transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mx-auto mb-4 flex h-20 items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="max-h-20 object-contain transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-sm font-medium text-white/80 group-hover:text-[#ff9828]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-10 lg:grid-cols-[430px_1fr] lg:items-stretch"
            >
              <div className="flex h-full flex-col">
                <h2 className="text-3xl font-black text-black">
                  {service.title}
                </h2>

                <div className="mt-3 h-[2px] w-full bg-black" />

                <p className="mt-2 text-[11px] font-black uppercase tracking-wide text-black">
                  {service.subtitle}
                </p>

                <div className="mt-10 flex flex-1 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full min-h-[260px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex h-full flex-col justify-start pt-2 lg:pt-16">
                <p className="mb-9 text-sm leading-7 text-[#555]">
                  {service.intro}
                </p>

                <div className="space-y-7">
                  {service.points.map((point) => (
                    <div
                      key={point.title}
                      className="grid grid-cols-[54px_1fr] gap-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ff9828] text-[#ff9828]">
                        <span className="text-lg">☼</span>
                      </div>

                      <div>
                        <h3 className="text-sm font-black text-[#ff9828]">
                          {point.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-[#555]">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}