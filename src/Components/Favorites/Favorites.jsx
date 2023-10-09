import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const Favorites = () => {
  const services = useLoaderData();

  const bookmarked = services.slice(2, 4);

  return (
    <>
      <div className="pt-16 bg-gradient-to-bl from-teal-400 via-violet-500 to-violet-800">
        <div className="container mx-auto px-2">
          <div className="flex justify-center py-24">
            <div className="bg-gradient-to-bl from-white to-gray-300 p-6 rounded-xl">
              <div className="flex-1 flex flex-col h-full">
                <div className="flex justify-between gap-4 items-center">
                  <h1 className="text-violet-600 font-bold text-4xl">
                    Your Favorites
                  </h1>
                </div>
                <hr className="my-4"></hr>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bookmarked.map((service) => (
                    <Service key={service.id} service={service}></Service>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
