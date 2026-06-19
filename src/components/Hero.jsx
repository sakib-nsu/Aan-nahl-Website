import { Link } from "react-router-dom";

export default function Hero() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?fm=jpg&q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center text-white lg:min-h-screen">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />

      {/* Animated glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-blob absolute -left-32 top-28 h-96 w-96 rounded-full bg-[#ff9828]/25 blur-3xl" />
        <div className="hero-blob hero-delay-2 absolute -right-32 bottom-20 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[760px] flex-col items-center justify-center px-6 pb-40 pt-36 text-center lg:min-h-screen">
        <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#ffb45c] backdrop-blur">
          Software Development Company
        </span>

        <h1 className="max-w-6xl text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Design. Develop.{" "}
          <span className="bg-gradient-to-r from-[#ff9828] to-[#ffd08a] bg-clip-text text-transparent">
            Inspire.
          </span>
        </h1>

        <p className="mt-7 max-w-4xl text-lg leading-8 text-white/85 md:text-2xl md:leading-10">
          We are a software company committed to helping businesses build and
          improve their software products.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            to="/contact-us"
            className="group rounded-full bg-[#ff9828] px-10 py-4 text-white shadow-lg shadow-[#ff9828]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f58212] hover:shadow-[#ff9828]/50"
          >
            <span className="block text-xl font-black">Let’s Start</span>
            <span className="block text-xs font-semibold uppercase tracking-wider">
              A new project together
            </span>
          </Link>

          <button
            type="button"
            onClick={handleScrollDown}
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9828] hover:bg-[#ff9828]/20 hover:text-[#ffb45c]"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Working scroll icon */}
      <button
        type="button"
        onClick={handleScrollDown}
        aria-label="Scroll to next section"
        className="hero-scroll absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white transition-all duration-300 hover:text-[#ff9828]"
      >
        <span className="text-sm font-black uppercase tracking-[0.32em]">
          Scroll Down
        </span>

        <span className="relative flex h-14 w-8 items-start justify-center rounded-full border-2 border-white/70 p-2 transition-all duration-300 hover:border-[#ff9828]">
          <span className="scroll-dot h-2 w-2 rounded-full bg-white transition-all duration-300" />
        </span>
      </button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      <style>{`
        @keyframes heroBlob {
          0% {
            transform: translate(0, 0) scale(1);
          }

          33% {
            transform: translate(30px, -35px) scale(1.08);
          }

          66% {
            transform: translate(-25px, 25px) scale(0.96);
          }

          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }

          70% {
            transform: translateY(22px);
            opacity: 0;
          }

          100% {
            transform: translateY(0);
            opacity: 0;
          }
        }

        .hero-blob {
          animation: heroBlob 9s infinite ease-in-out;
        }

        .hero-delay-2 {
          animation-delay: 2s;
        }

        .scroll-dot {
          animation: scrollDot 1.6s infinite ease-in-out;
        }

        @media (max-height: 680px) {
          .hero-scroll {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}