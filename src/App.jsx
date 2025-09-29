import "./App.css";
import { Footer } from "./components/Footer";
import HeaderFile from "./components/headerFile";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import DesignGallery from "./pages/DesignGallery";
import HeroFeaturedGrid from "./pages/HeroFeaturedGrid";
import HomePage from "./pages/HomePage";
import ProcessSection from "./pages/ProcessSection";
import ServicesSection from "./pages/ServiceSection";

function App() {
  return (
    <>
      <HeaderFile />
      <HomePage />
      <About />
      <ServicesSection />
      <DesignGallery />
      <HeroFeaturedGrid />
      <ProcessSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
