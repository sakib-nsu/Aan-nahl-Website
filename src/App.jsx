import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Career from "./pages/Career";

import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";
import ContactForm from "./components/ContactForm";
import HowWeWork from "./components/HowWeWork";
import OurWork from "./components/OurWork";
import TechExpertise from "./components/TechExpertise";
import ClientReviews from "./components/ClientReviews";

function HomePage() {
  return (
    <>
      <Hero />
      <Home />
      <ServicesList />
      <HowWeWork />
      <OurWork />
      <ClientReviews />
      <TechExpertise />
      <ContactForm />
    </>
  );
}

function PageBanner({ title, subtitle }) {
  return (
    <section className="bg-slate-950 px-6 pb-20 pt-44 text-center text-white">
      <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
        {subtitle}
      </p>
    </section>
  );
}

function AboutUsPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="We build digital solutions for clients worldwide."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ff9828]">
              In a Nutshell
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">
              A trusted software partner from Bangladesh
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-700">
              We are a custom software company in Bangladesh. We started as a
              start-up software outsourcing company in 2004. We became a
              Bangladesh limited company in 2005 and have been growing every
              year.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              We offer software development to international customers across
              multiple industries. Our team supports design, development,
              testing, deployment, content, and technical solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        subtitle="Software development, design, testing, deployment, and support."
      />
      <ServicesList />
    </>
  );
}

function PortfolioPage() {
  return (
    <>
      <PageBanner
        title="Portfolio"
        subtitle="Explore our selected works and digital projects."
      />
      <OurWork />
    </>
  );
}

function CareerPage() {
  return (
    <>
      <Career />
    </>
  );
}

function ContactUsPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Tell us about your project. We would love to hear from you."
      />
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}