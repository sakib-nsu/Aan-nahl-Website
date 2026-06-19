import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    console.log("Contact form submitted:", data);

    event.currentTarget.reset();
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        {/* Background Image + Overlay */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-black/75" />

        {/* Animated Background Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="contact-blob absolute -left-32 top-12 h-96 w-96 rounded-full bg-[#ff9828]/25 blur-3xl" />
          <div className="contact-blob contact-delay-2 absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />
          <div className="contact-blob contact-delay-4 absolute left-1/3 top-1/3 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        </div>

        {/* Floating Dots */}
        <span className="contact-float absolute left-[8%] top-32 h-3 w-3 rounded-full bg-[#ff9828]/70" />
        <span className="contact-float contact-delay-2 absolute right-[12%] top-52 h-4 w-4 rounded-full bg-orange-400/60" />
        <span className="contact-float contact-delay-4 absolute bottom-32 left-[20%] h-2.5 w-2.5 rounded-full bg-amber-300/70" />

        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff9828]/30 bg-white/10 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#ffb35c] backdrop-blur">
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </span>

            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              Get in Touch
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Have a project idea, need a dedicated team, or want to discuss a
              software solution? Send us a message and we will get back to you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            {/* Contact Info */}
            <div className="space-y-5">
              <ContactInfoCard
                icon={Phone}
                title="Phone"
                value="+88 01624555544"
                href="tel:+8801624555544"
              />

              <ContactInfoCard
                icon={Mail}
                title="Email"
                value="info@aan-nahl.com"
                href="mailto:info@aan-nahl.com"
              />

              <ContactInfoCard
                icon={MapPin}
                title="Location"
                value="Dhaka, Bangladesh"
                href="https://maps.google.com"
              />

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <h3 className="text-2xl font-black text-white">
                  Let’s build something great.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  Share your requirements and our team will help you plan the
                  right solution for your business.
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormInput
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

                <FormInput
                  label="Company Name"
                  name="company"
                  type="text"
                  placeholder="Enter company name"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-bold uppercase tracking-wide text-white/85"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-2xl border border-white/15 bg-black/25 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-[#ff9828] focus:bg-black/35 focus:ring-4 focus:ring-[#ff9828]/15"
                />
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ff9828] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-[#ff9828]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f58212] hover:shadow-[#ff9828]/40 sm:w-auto"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes contactBlob {
          0% {
            transform: translate(0, 0) scale(1);
          }

          33% {
            transform: translate(34px, -36px) scale(1.08);
          }

          66% {
            transform: translate(-28px, 28px) scale(0.96);
          }

          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes contactFloat {
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

        .contact-blob {
          animation: contactBlob 9s infinite ease-in-out;
        }

        .contact-float {
          animation: contactFloat 5.5s infinite ease-in-out;
        }

        .contact-delay-2 {
          animation-delay: 2s;
        }

        .contact-delay-4 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}

function FormInput({ label, name, type = "text", placeholder, required = false }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-sm font-bold uppercase tracking-wide text-white/85"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/15 bg-black/25 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-[#ff9828] focus:bg-black/35 focus:ring-4 focus:ring-[#ff9828]/15"
      />
    </div>
  );
}

function ContactInfoCard({ icon: Icon, title, value, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-5 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9828]/40 hover:bg-white/15"
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#ff9828] text-white shadow-lg shadow-[#ff9828]/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-6 w-6" />
      </span>

      <span className="text-left">
        <span className="block text-xs font-black uppercase tracking-[0.22em] text-[#ffb35c]">
          {title}
        </span>

        <span className="mt-1 block text-base font-bold text-white">
          {value}
        </span>
      </span>
    </a>
  );
}