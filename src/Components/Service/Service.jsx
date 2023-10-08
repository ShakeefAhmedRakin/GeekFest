import PropTypes from "prop-types";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <>
      <div
        className="rounded-2xl border-[1px] border-gray-200 shadow-lg flex flex-col"
        data-aos="fade-up"
      >
        <img
          src={service.image}
          className="rounded-t-2xl h-[200px] object-cover w-full"
        />

        <div className="p-4 flex flex-col h-full">
          <h1 className="font-bold text-violet-800 text-xl">{service.name}</h1>
          <p className="flex-grow">{service.short_description}</p>
          <div className="flex justify-between items-center">
            <h3 className="flex items-center gap-2">
              <AiOutlineDollarCircle className="text-2xl text-teal-800"></AiOutlineDollarCircle>
              {service.price}
            </h3>
            <Link to={`/service/${service.id}`}>
              <button className="btn  text-white bg-gradient-to-bl from-teal-400 via-violet-500 to-violet-800">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
