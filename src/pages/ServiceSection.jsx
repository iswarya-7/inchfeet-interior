// Make sure to create this CSS file in your assets/styles folder
import "../assets/styles/ServiceSection.css";

// service images
import luxuryHomes from "../assets/images/room4.jpg";
import commercialSpaces from "../assets/images/room6.jpg";
import Furniture from "../assets/images/room9.png";

// Sample data for your three services
const serviceData = [
  {
    title: "Luxury Homes",
    description:
      "Bespoke interiors for apartments, villas, penthouses and studios with a touch of elegance.",
    image: luxuryHomes, // Replace with your image paths
    link: "/luxury-homes",
  },
  {
    title: "Commercial Spaces",
    description:
      "Workplaces, retail & hospitality interiors designed to enhance brand presence and productivity.",
    image: commercialSpaces, // Replace with your image paths
    link: "/commercial-spaces",
  },
  {
    title: "Custom Furniture",
    description:
      "Unique furniture and fixtures crafted to complement your interior story.",
    image: Furniture, // Replace with your image paths
    link: "/custom-furniture",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-sections">
      <h2 className="services-headings">Our Design Services</h2>

      <div className="services-grids">
        {serviceData.map((service, index) => (
          <a key={index} href={service.link} className="service-card-links">
            <div className="service-cards">
              <div className="service-image-containers">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-images"
                />
              </div>

              <div className="service-contents">
                <h3 className="service-titles">{service.title}</h3>
                <p className="service-descriptions">{service.description}</p>
                {/* <div className="service-ctas">
                  Explore More <span className="arrows">→</span>
                </div> */}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
