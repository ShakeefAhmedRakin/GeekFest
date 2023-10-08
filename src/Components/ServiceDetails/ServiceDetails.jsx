import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const service = services.find((service) => service.id === idInt);

  return (
    <>
      <div className="py-16 h-screen"></div>
    </>
  );
};

export default ServiceDetails;
