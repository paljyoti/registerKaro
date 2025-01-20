import icon1 from "../../src/assets/serviceicon1.jpeg";
import icon2 from "../../src/assets/serviceicon2.jpeg";
import icon3 from "../../src/assets/serviceicon3.jpeg";
import icon4 from "../../src/assets/serviceicon4.jpeg";
import icon5 from "../../src/assets/serviceicon5.jpeg";
import icon6 from "../../src/assets/serviceicon6.jpeg";

const services = [
  {
    id: 1,
    icon: icon1,
    title: "Company Formation",
    description:
      "Build web-based solutions that enhance customer experience.",
    learn: "Learn More",
  },
  {
    id: 2,
    icon: icon2,
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
    learn: "Learn More",
  },
  {
    id: 3,
    icon: icon3,
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    learn: "Learn More",
  },
  {
    id: 4,
    icon: icon4,
    title: "Annual Compliance Services",
    description:
      "Turn your ideas into modern products with our design experts.",
    learn: "Learn More",
  },
  {
    id: 5,
    icon: icon5,
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    learn: "Learn More",
  },
  {
    id: 6,
    icon: icon6,
    title: "Bookkeeping Services",
    description:
      "Steering user behaviours with creative design, data insights & technology.",
    learn: "Learn More",
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <p className="font-bold text-center text-orange-300">
        Welcome to RegisterKaro.in
      </p>
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-16 h-16" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-gray-600 pt-4 font-semibold">{service.learn}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          See all Services
        </button>
      </div>
    </div>
  );
};

export default Services;
