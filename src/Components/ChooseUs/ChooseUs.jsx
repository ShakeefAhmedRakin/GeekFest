import { VscDebugBreakpointData } from "react-icons/vsc";

const ChooseUs = () => {
  return (
    <>
      <div
        className="container p-2 md:p-8 mx-auto my-8 bg-gradient-to-bl from-teal-400 via-violet-700 to-violet-800 rounded-lg shadow-xl"
        data-aos="fade-left"
      >
        <div className="p-0 md:p-16">
          <div className="bg-black bg-opacity-40 max-w-5xl mx-auto p-4 rounded-lg ">
            <h1 className="text-center text-teal-400 font-bold text-4xl">
              Why Choose Us?
            </h1>
            <p className="text-center  mx-auto mt-2 mb-8 text-white ">
              At GeekFest, we understand the unique needs and challenges of
              organizing tech and gaming events. We take pride in being your
              dedicated partner in creating unforgettable experiences. Heres why
              you should choose us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-bl from-white to-gray-300 rounded-lg p-2 shadow-lg space-y-2">
                <h1 className="text-xl font-bold text-violet-700 flex items-center gap-2">
                  <VscDebugBreakpointData></VscDebugBreakpointData>Expertise in
                  Tech and Gaming Events
                </h1>
                <p className="text-gray-700 ml-4">
                  GeekFest specializes in tech and gaming events, and our team
                  consists of passionate gamers and tech enthusiasts. We
                  understand the industry, its trends, and the needs of your
                  target audience.
                </p>
              </div>
              <div className="bg-gradient-to-bl from-white to-gray-300 rounded-lg p-2 shadow-lg space-y-2">
                <h1 className="text-xl font-bold text-violet-700 flex items-center gap-2">
                  <VscDebugBreakpointData></VscDebugBreakpointData>End-to-End
                  Event Management
                </h1>
                <p className="text-gray-700 ml-4">
                  From initial concept to final execution, we handle every
                  aspect of event management. This includes planning, logistics,
                  promotion, on-site coordination, and post-event analysis. You
                  can focus on your vision while we handle the details.
                </p>
              </div>
              <div className="bg-gradient-to-bl from-white to-gray-300 rounded-lg p-2 shadow-lg space-y-2">
                <h1 className="text-xl font-bold text-violet-700 flex items-center gap-2">
                  <VscDebugBreakpointData></VscDebugBreakpointData>
                  Client-Centric Approach
                </h1>
                <p className="text-gray-700 ml-4">
                  GeekFest is driven by your vision and goals. We listen
                  carefully to your ideas and requirements, working closely with
                  you to bring your event dreams to life.
                </p>
              </div>
              <div className="bg-gradient-to-bl from-white to-gray-300 rounded-lg p-2 shadow-lg space-y-2">
                <h1 className="text-xl font-bold text-violet-700 flex items-center gap-2">
                  <VscDebugBreakpointData></VscDebugBreakpointData>On-Site
                  Support and Problem Solving
                </h1>
                <p className="text-gray-700 ml-4">
                  GeekFest is there on the ground to ensure your event runs
                  smoothly. We handle logistics, troubleshoot issues, and make
                  quick decisions to keep your event on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
