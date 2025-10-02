import "./App.css";
import { Footer } from "./components/Footer";
import HeaderFile from "./components/HeaderFile";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import DesignGallery from "./pages/DesignGallery";
import HeroFeaturedGrid from "./pages/HeroFeaturedGrid";
import HomePage from "./pages/HomePage";
import Package from "./pages/Package";
import ProcessSection from "./pages/ProcessSection";
import { ScrollToTop } from "./pages/ScrollToTop";
import ServicesSection from "./pages/ServiceSection";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <HeaderFile />
      <HomePage />
      <About />
      <ServicesSection />
      <DesignGallery />
      <HeroFeaturedGrid />
      <Package />
      <ProcessSection />
      <ContactForm />
      <Footer />
      {/* Floating WhatsApp button */}
      <div className="floating-icons">
        <a
          href="https://wa.me/918148062535?text=Hey!%20I%20want%20to%20start%20my%20interior%20project%20soon.%20Can%20we%20discuss%20about%20the%20details%3F"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>

        <a
          href="/contacts" // link to your Free Estimate page or form
          className="estimate-float"
          target="self"
          rel="noopener noreferrer"
        >
          Free Estimate
        </a>
      </div>


      <ScrollToTop/>
    </>
  );
}

export default App;
