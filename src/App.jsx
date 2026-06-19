import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";
import ContactForm from "./components/ContactForm";
import HowWeWork from "./components/HowWeWork";
import OurWork from "./components/OurWork";
import TechExpertise from "./components/TechExpertise";
import ClientReviews from "./components/ClientReviews";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Home />
      <ServicesList />
      <HowWeWork />
      <OurWork />
      <ClientReviews />
      <TechExpertise />
      <ContactForm />
      <Footer />
    </>
  );
}