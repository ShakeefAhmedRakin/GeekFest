import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const service = services.find((service) => service.id === idInt);
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-16 bg-gradient-to-bl from-teal-400 via-violet-500 to-violet-800">
        <div className="container mx-auto px-2">
          <div className="flex justify-center py-24">
            <div className="flex flex-col lg:flex-row gap-4 bg-gradient-to-bl from-white to-gray-300 p-6 rounded-xl">
              <img
                src={service.image}
                className="w-full object-cover h-[400px] flex-1 rounded-xl"
              />
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center">
                  <h1 className="text-violet-600 font-bold text-4xl">
                    {service.name}
                  </h1>
                  <button
                    className="btn bg-gradient-to-bl from-teal-400 via-violet-500 to-violet-800 text-white"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    <BiArrowBack className="text-xl"></BiArrowBack>
                  </button>
                </div>

                <hr className="my-4"></hr>
                <p className="h-full">{service.description}</p>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="flex gap-4 items-center">
                    <AiOutlineDollarCircle className="text-3xl text-teal-600"></AiOutlineDollarCircle>
                    <p className="font-medium">{service.price}</p>
                  </div>
                  <button className="btn bg-gradient-to-bl from-teal-400 via-violet-500 to-violet-800 text-white">
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
