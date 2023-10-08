import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  return (
    <>
      <div className="container px-2 mx-auto my-8" data-aos="fade-right">
        <h1 className="text-center text-violet-900 font-bold text-4xl">
          Our Services
        </h1>
        <p className="text-center max-w-5xl mx-auto mt-2 mb-8">
          Discover our expert event management services designed for tech and
          gaming enthusiasts. We bring your tech dreams to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
