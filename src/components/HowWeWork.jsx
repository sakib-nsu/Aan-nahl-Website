import React from "react";
import {
  UsersRound,
  UserCog,
  ClipboardCheck,
  Code2,
  Palette,
  Bug,
  RefreshCcw,
  Clock3,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const workSteps = [
  {
    number: "01",
    title: "Development Team",
    subtitle: "Skilled people, clear ownership",
    description:
      "We create a balanced product team with engineers, designers, QA specialists, product owners, and project leadership working together from day one.",
    icon: UsersRound,
    gradient: "from-orange-500 to-amber-400",
    members: [
      { label: "Product Owner", icon: UserCog },
      { label: "Developer", icon: Code2 },
      { label: "UI/UX Designer", icon: Palette },
      { label: "QA Engineer", icon: Bug },
    ],
  },
  {
    number: "02",
    title: "Agile Process",
    subtitle: "Flexible, transparent, measurable",
    description:
      "We work in agile cycles with planning, daily collaboration, review, feedback, and continuous improvement to keep delivery fast and predictable.",
    icon: RefreshCcw,
    gradient: "from-[#ff9828] to-orange-600",
    members: [
      { label: "Sprint Plan", icon: ClipboardCheck },
      { label: "Time Tracking", icon: Clock3 },
      { label: "Iteration", icon: RefreshCcw },
      { label: "Delivery", icon: CheckCircle2 },
    ],
  },
  {
    number: "03",
    title: "Working Software",
    subtitle: "Tested products ready to launch",
    description:
      "We deliver stable, scalable, and user-friendly web and mobile products with clean code, quality checks, and deployment support.",
    icon: MonitorSmartphone,
    gradient: "from-amber-400 to-[#ff9828]",
    members: [
      { label: "Web App", icon: MonitorSmartphone },
      { label: "Architecture", icon: Layers3 },
      { label: "Security", icon: ShieldCheck },
      { label: "Launch", icon: Rocket },
    ],
  },
];

export default function HowWeWork() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffaf3] px-4 py-20 text-black sm:px-6 lg:px-8 lg:py-28">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-[#ff9828]/20 blur-3xl" />
        <div className="absolute right-[-120px] top-52 h-[420px] w-[420px] animate-blob animation-delay-2000 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute bottom-[-150px] left-1/3 h-[360px] w-[360px] animate-blob animation-delay-4000 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,152,40,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,152,40,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,152,40,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,190,90,0.22),transparent_40%)]" />
      </div>

      {/* Floating Dots */}
      <span className="absolute left-[8%] top-28 h-3 w-3 animate-float rounded-full bg-[#ff9828]/60" />
      <span className="absolute right-[10%] top-44 h-4 w-4 animate-float animation-delay-2000 rounded-full bg-orange-400/50" />
      <span className="absolute bottom-36 left-[18%] h-2.5 w-2.5 animate-float animation-delay-4000 rounded-full bg-amber-500/60" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-[#ff9828]/20 bg-white/80 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#ff8616] shadow-sm backdrop-blur">
            Our Process
          </span>

          <h2 className="text-4xl font-black uppercase tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            How We Work
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-gray-700 sm:text-lg">
            We provide software development outsourcing services that help
            clients maximize ROI from critical software projects. From planning
            to final deployment, we support companies and start-ups at every
            stage of the development process, improving time to market for
            high-quality web and mobile products.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Desktop Timeline */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[120px] hidden h-[3px] bg-gradient-to-r from-transparent via-[#ff9828] to-transparent lg:block">
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9828] shadow-[0_0_0_8px_rgba(255,152,40,0.15)]" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {workSteps.map((step, index) => (
              <WorkStepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkStepCard({ step, index }) {
  const MainIcon = step.icon;

  return (
    <article
      className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 text-center shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#ff9828]/50 hover:bg-white hover:shadow-[0_28px_90px_rgba(255,152,40,0.22)] sm:p-8"
      style={{ animationDelay: `${index * 160}ms` }}
    >
      {/* Top glow */}
      <div
        className={`absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r ${step.gradient} transition-transform duration-500 group-hover:scale-x-100`}
      />

      {/* Decorative Number */}
      <div className="absolute right-6 top-5 text-7xl font-black leading-none text-gray-100 transition-colors duration-500 group-hover:text-orange-100 sm:text-8xl">
        {step.number}
      </div>

      {/* Icon Circle */}
      <div
        className={`relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br ${step.gradient} text-white shadow-[0_20px_50px_rgba(255,152,40,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
      >
        <div className="absolute inset-2 rounded-[1.5rem] border border-white/30" />
        <MainIcon className="relative h-14 w-14" strokeWidth={1.8} />
      </div>

      {/* Mini Team / Process Icons */}
      <div className="relative z-10 mb-8 grid grid-cols-2 gap-3">
        {step.members.map((member) => {
          const Icon = member.icon;

          return (
            <div
              key={member.label}
              className="flex items-center gap-2 rounded-2xl border border-orange-100 bg-orange-50/70 px-3 py-3 text-left transition-all duration-300 group-hover:border-[#ff9828]/30 group-hover:bg-[#fff5e8]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#ff8616] shadow-sm">
                <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
              </span>

              <span className="text-xs font-extrabold uppercase leading-4 tracking-wide text-gray-700">
                {member.label}
              </span>
            </div>
          );
        })}
      </div>

      <h3 className="relative z-10 text-2xl font-black uppercase tracking-tight text-gray-950">
        {step.title}
      </h3>

      <p className="relative z-10 mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#ff8616]">
        {step.subtitle}
      </p>

      <p className="relative z-10 mt-5 text-[15px] leading-8 text-gray-600">
        {step.description}
      </p>

      <div className="relative z-10 mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-gray-500 transition-all duration-300 group-hover:gap-3 group-hover:text-[#ff8616]">
        Step {step.number}
        <ArrowRight className="h-4 w-4" />
      </div>

      {/* Bottom background glow */}
      <div className="absolute -bottom-16 left-1/2 h-32 w-52 -translate-x-1/2 rounded-full bg-[#ff9828]/0 blur-3xl transition-all duration-500 group-hover:bg-[#ff9828]/20" />
    </article>
  );
}