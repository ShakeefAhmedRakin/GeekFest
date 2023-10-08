import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const error = useRouteError();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-b from-gray-600 to-white-900">
        <div className="bg-gradient-to-b from-stone-900 via-gray-900 to-neutral-900 text-white my-44 rounded-xl shadow-xl">
          <div className="flex flex-col gap-6 py-20 px-4 md:px-20">
            <hr />
            <h1 className="normal-case text-6xl mb-5 text-center">
              <h1 className="font-medium text-violet-500">
                Geek<span className="text-teal-400">Fest</span>
              </h1>
            </h1>

            {error.status === 404 ? (
              <div className="text-3xl font-bold text-center">
                Page not found
              </div>
            ) : (
              ""
            )}
            <div>
              <h2 className="text-xl text-center">Code: {error.status}</h2>
            </div>
            <button
              className="btn bg-violet-600 hover:bg-violet-600 text-white border-none normal-case"
              onClick={handleGoBack}
            >
              Main Page
            </button>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
