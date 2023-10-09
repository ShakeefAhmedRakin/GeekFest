const ContactUs = () => {
  return (
    <>
      <section className="px-2 bg-gradient-to-bl from-teal-400 via-violet-700 to-violet-800 pt-24 pb-8">
        <div
          className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white rounded-lg shadow-xl"
          data-aos="fade-left"
        >
          <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-700 dark:text-white">
            Get in Touch with GeekFest
          </h2>
          <hr className="my-4"></hr>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400">
            {`We're here to assist you with any questions, inquiries, or requests
            you may have regarding our event management services. Whether you're
            an event organizer looking to partner with us, an attendee seeking
            information about upcoming events, or you simply want to connect
            with our team, we're eager to hear from you.`}
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Email"
                required
              ></input>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave your query..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-gradient-to-bl from-teal-400 via-violet-700 to-violet-800 text-white w-full"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
