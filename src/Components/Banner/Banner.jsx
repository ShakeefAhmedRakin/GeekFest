import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex items-center justify-center  py-28 lg:py-48">
        <img
          src="https://i.ibb.co/RB7qjgG/alex-kotliarskyi-our-QHRTE2-IM-unsplash.jpg"
          className="absolute object-cover h-full w-full -z-10"
        />
        <div className="absolute h-full w-full -z-10 bg-gradient-to-bl from-teal-400 via-violet-700 to-violet-800 opacity-80"></div>
        <div className="container text-white px-2 flex flex-col-reverse lg:flex-row-reverse  justify-center items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">
              Your Premier Tech and Gaming Event Management Experts!
            </h1>
            <p className="">
              We are dedicated to bringing your tech and gaming dreams to life.
              Whether you are a gamer, a tech enthusiast, or a game developer,
              we have got your events covered. From electrifying eSports
              tournaments to immersive gaming conventions, hackathons that spark
              innovation, and gamer meetups that connect communities, we make
              every event epic.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                className="btn bg-teal-400 border-none hover:bg-teal-400 text-white font-bold px-8"
                onClick={() => navigate("/register")}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="text-center mx-auto bg-black bg-opacity-70 rounded-lg py-24 flex-1 w-full space-y-3">
            <h1 className="text-6xl md:text-7xl font-medium text-violet-500">
              Geek<span className="text-teal-400">Fest</span>
            </h1>
            <p className="text-xl font-thin">
              Your <span className="font-bold">Event</span>, Our
              <span className="font-bold"> Expertise!</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
