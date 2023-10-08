import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="bg-gradient-to-bl from-teal-400 via-violet-700 to-violet-800 opacity-80 h-screen flex justify-center items-center">
        <div className="bg-white px-12 py-8 rounded-lg shadow-lg">
          <form>
            <h1 className="text-black font-bold text-center mb-8 text-2xl">
              Sign Up
            </h1>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            <button className="normal-case btn bg-gradient-to-bl from-teal-400 via-violet-700 to-violet-800 text-white w-full">
              Create Account
            </button>
          </form>
          <p className="text-center my-6">Or Sign Up Using</p>
          <div className="flex justify-center mb-2">
            <button className="btn btn-circle">
              <BsGoogle></BsGoogle>
            </button>
          </div>
          <p className="text-center my-6">
            Have an account?{" "}
            <Link to="/login" className="link text-sm">
              Log In Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
