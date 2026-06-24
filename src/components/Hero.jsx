import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const canvasRef = useRef(null);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationFrameId;

    const colors = ["#315cff", "#ff0095", "#4da3ff"];
    const points = [];

    const resizeCanvas = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;

      ctx.setTransform(
        window.devicePixelRatio,
        0,
        0,
        window.devicePixelRatio,
        0,
        0
      );
    };

    const createPoints = () => {
      points.length = 0;

      const totalPoints = window.innerWidth < 768 ? 42 : 78;

      for (let i = 0; i < totalPoints; i++) {
        const sideBias = Math.random();

        points.push({
          x:
            sideBias < 0.42
              ? Math.random() * width * 0.32
              : sideBias > 0.58
              ? width * 0.68 + Math.random() * width * 0.32
              : Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2.5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawGlow = (x, y, color, size = 24) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);

      gradient.addColorStop(0, color);
      gradient.addColorStop(0.35, `${color}99`);
      gradient.addColorStop(1, `${color}00`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(4, 7, 24, 0.72)";
      ctx.fillRect(0, 0, width, height);

      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < -50 || point.x > width + 50) point.vx *= -1;
        if (point.y < -50 || point.y > height + 50) point.vy *= -1;
      });

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 190;

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;

            ctx.strokeStyle =
              a.color === "#ff0095"
                ? `rgba(255, 0, 149, ${opacity * 0.42})`
                : `rgba(49, 92, 255, ${opacity * 0.5})`;

            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      points.forEach((point, index) => {
        if (index % 9 === 0) {
          drawGlow(point.x, point.y, point.color, 28);
        }

        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createPoints();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createPoints();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#050719] text-white lg:min-h-screen">
      {/* Animated network background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070826]/70 via-black/35 to-black/90" />

      {/* Extra glowing blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-blob absolute left-[8%] top-[10%] h-24 w-24 rounded-full bg-[#ff0095]/30 blur-3xl" />
        <div className="hero-blob hero-delay-2 absolute right-[16%] top-[45%] h-32 w-32 rounded-full bg-[#315cff]/30 blur-3xl" />
        <div className="hero-blob hero-delay-3 absolute bottom-[14%] left-[34%] h-28 w-28 rounded-full bg-[#ff0095]/25 blur-3xl" />
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />

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

        .hero-delay-3 {
          animation-delay: 4s;
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