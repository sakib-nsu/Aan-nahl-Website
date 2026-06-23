import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Career from "./pages/Career";
import About from "./pages/About";

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

function ServicesPage() {
  return <ServicesList />;
}

function PortfolioPage() {
  return <OurWork />;
}

function ContactPage() {
  return <ContactForm />;
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactPage />} />

        {/* redirect old about-us URL */}
        <Route path="/about-us" element={<Navigate to="/about" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}