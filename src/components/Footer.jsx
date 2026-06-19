import { Link } from "react-router-dom";

const quickLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Team", path: "/team" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact-us" },
];

const services = [
  "Web Application",
  "Mobile Application",
  "UI/UX Design",
  "Dedicated Team",
  "Support & Maintenance",
];

const socialLinks = [
  { name: "Facebook", label: "f", url: "#" },
  { name: "Twitter", label: "t", url: "#" },
  { name: "Instagram", label: "◎", url: "#" },
  { name: "Google Plus", label: "G+", url: "#" },
  { name: "LinkedIn", label: "in", url: "#" },
];

const footerLinks = [
  { name: "Sitemap", path: "/sitemap" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      {/* Main Footer */}
      <div className="relative bg-gradient-to-br from-[#ef5638] via-[#ff7a18] to-[#ff9828] text-white">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-black/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:46px_46px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="https://aan-nahl.com/wp-content/uploads/2018/03/logo-white.png"
                alt="Aan Nahl"
                className="w-52 transition duration-300 hover:scale-105"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/85">
              Aan-Nahl delivers reliable web, mobile, UI/UX, and software
              development services for businesses that want scalable digital
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn title="May We Help You?">
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            <ul className="space-y-4 text-sm">
              {services.map((service) => (
                <li
                  key={service}
                  className="group flex items-center gap-2 text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white" />
                  {service}
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Development Center">
            <div className="space-y-4 text-sm leading-7 text-white/85">
              <p>
                Tower 71, Flat # 9 A-B, 516/3 South Manikdi, Matikata Road,
                ECB Chattar, Dhaka Cantonment, Dhaka - 1206
              </p>

              <p>
                <span className="font-bold text-white">Email:</span>{" "}
                <a
                  href="mailto:info@aan-nahl.com"
                  className="transition hover:text-white hover:underline"
                >
                  info@aan-nahl.com
                </a>
              </p>

              <p>
                <span className="font-bold text-white">Phone:</span>{" "}
                <a
                  href="tel:+8801624555544"
                  className="transition hover:text-white hover:underline"
                >
                  +88 01624555544
                </a>
              </p>

              <Link
                to="/contact-us"
                className="mt-4 inline-flex rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#ef5638] transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </FooterColumn>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#111111]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 text-center text-sm text-white/70 lg:flex-row lg:text-left">
          {/* Social */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-semibold uppercase tracking-wide text-white">
              Connect With
            </span>

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="grid h-9 min-w-9 place-items-center rounded-full border border-white/15 bg-white/5 px-2 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#ff9828] hover:bg-[#ff9828]"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="transition duration-300 hover:text-[#ff9828]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p>
            © Aan-Nahl 2010-{new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
        {title}
      </h3>

      <div className="mb-7 mt-4 h-1 w-12 rounded-full bg-white/80" />

      {children}
    </div>
  );
}