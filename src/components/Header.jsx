import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { name: "About Us", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Career", path: "/career" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const navLinkClass = ({ isActive }) =>
    `relative inline-flex items-center text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
      isActive ? "text-[#ff9828]" : "text-white hover:text-[#ff9828]"
    } after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#ff9828] after:transition-all after:duration-300 hover:after:w-full ${
      isActive ? "after:w-full" : ""
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full text-white">
      <div className="hidden border-b border-white/10 bg-black/90 backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-7 px-6 py-2 text-sm">
          <a href="tel:+8801624555544" className="flex items-center gap-2 text-white/85 transition-colors duration-300 hover:text-[#ff9828]">
            <span className="text-[#ff9828]">☎</span>
            +88 01624555544
          </a>

          <a href="mailto:info@aan-nahl.com" className="flex items-center gap-2 text-white/85 transition-colors duration-300 hover:text-[#ff9828]">
            <span className="text-[#ff9828]">✉</span>
            info@aan-nahl.com
          </a>
        </div>
      </div>

      <nav className="border-b border-white/10 bg-black/55 shadow-lg shadow-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6 lg:py-5">
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <img
              src="https://aan-nahl.com/wp-content/uploads/2018/03/logo-white.png"
              alt="Aan Nahl"
              className="w-32 transition-transform duration-300 hover:scale-105 sm:w-36 lg:w-40"
            />
          </Link>

          <div className="hidden items-center gap-10 lg:flex xl:gap-14">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact-us"
            className="hidden rounded-none bg-[#ff9828] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#ff9828]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f58212] hover:shadow-[#ff9828]/40 lg:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-[#ff9828] hover:text-[#ff9828] lg:hidden"
          >
            <span className="relative h-5 w-6">
              <span className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-all duration-300 ${isOpen ? "top-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-[2px] w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-4 h-[2px] w-6 bg-current transition-all duration-300 ${isOpen ? "top-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="space-y-1 px-5 py-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                    isActive ? "bg-[#ff9828] text-white" : "text-white/85 hover:bg-white/10 hover:text-[#ff9828]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-4">
              <Link
                to="/contact-us"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-[#ff9828] px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#f58212]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}