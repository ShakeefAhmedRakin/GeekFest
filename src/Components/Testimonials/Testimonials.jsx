const Testimonials = () => {
  return (
    <>
      <div className="container px-2 mx-auto my-8" data-aos="fade-up">
        <h1 className="text-center text-violet-900 font-bold text-4xl">
          What Our Clients and Attendees Say
        </h1>
        <p className="text-center max-w-5xl mx-auto mt-2 mb-8">
          Discover what clients, partners, and attendees have to say about their
          experiences working with GeekFest. Read their testimonials to learn
          how our passion, expertise, and dedication to tech and gaming events
          have made a difference in their experiences.
        </p>
        <div className="grid-cols-1">
          <div
            className="my-4 bg-gradient-to-bl from-white to-gray-100 space-y-4 text-center shadow-xl rounded-lg max-w-5xl p-7 mx-auto"
            data-aos="fade-left"
          >
            <h1 className="text-xl font-bold text-teal-500">
              <span className="text-violet-700">John Smith,</span> Tournament
              Organizer, GameRush eSports
            </h1>
            <p className="text-gray-600">
              {`"Working with GeekFest was a game-changer for our eSports
              tournament. Their attention to detail, strategic planning, and
              passion for gaming made our event a massive success. We could not
              have done it without them!"`}
            </p>
          </div>
          <hr />
          <hr />
          <div
            className="my-4 bg-gradient-to-bl from-white to-gray-100 space-y-4 text-center shadow-xl rounded-lg max-w-5xl p-7 mx-auto"
            data-aos="fade-right"
          >
            <h1 className="text-xl font-bold text-teal-500">
              <span className="text-violet-700">Alex Turner,</span> Independent
              Game Developer
            </h1>
            <p className="text-gray-600">
              {`"As a game developer, I've had the pleasure of showcasing my work at GeekFest's events. Their dedication to promoting indie developers and creating a welcoming atmosphere for gamers is commendable. GeekFest truly understands the gaming community."`}
            </p>
          </div>
          <hr />
          <hr />
          <div
            className="my-4 bg-gradient-to-bl from-white to-gray-100 space-y-4 text-center shadow-xl rounded-lg max-w-5xl p-7 mx-auto"
            data-aos="fade-left"
          >
            <h1 className="text-xl font-bold text-teal-500">
              <span className="text-violet-700">Michael Chen,</span> Software
              Engineer
            </h1>
            <p className="text-gray-600">
              {`"I participated in one of GeekFest's hackathons, and it was an incredible experience. Their team kept the energy high, provided all the resources we needed, and fostered a collaborative atmosphere. It's the best hackathon I've attended!"`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
