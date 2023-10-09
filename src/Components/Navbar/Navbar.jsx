import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User Logged Out");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li className="navigation-link">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {user && (
        <>
          <li className="navigation-link">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="navigation-link">
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-gradient-to-b from-stone-900 via-gray-900 to-neutral-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-lg space-y-4 dropdown-content mt-3 z-[1] p-4 shadow bg-gradient-to-b from-stone-900 via-gray-900 to-neutral-900 rounded-box w-52"
            >
              {user ? (
                <>
                  <div className="flex md:hidden justify-center items-center gap-2 bg-violet-800 py-[5.5px] pl-[3.5px] pr-2 rounded-lg text-white">
                    <img
                      src={user?.photoURL}
                      className="w-10 h-10 rounded-lg"
                    />
                    <p>{user?.displayName}</p>
                  </div>
                </>
              ) : (
                ""
              )}
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">
            <h1 className="font-medium text-violet-500">
              Geek<span className="text-teal-400">Fest</span>
            </h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="px-1 text-lg hidden lg:flex gap-6">{links}</ul>
        </div>
        <div className="navbar-end text-white">
          {user ? (
            <>
              {user.displayName ? (
                <>
                  <div className="hidden md:flex justify-center items-center gap-2 mr-2 bg-violet-800 py-[3.5px] pl-[3.5px] pr-2 rounded-lg">
                    <img
                      src={user?.photoURL}
                      className="w-10 h-10 rounded-lg"
                    />
                    <p>{user?.displayName}</p>
                  </div>
                </>
              ) : (
                ""
              )}
              <a
                className="btn bg-violet-800 hover:bg-violet-900 text-white border-none"
                onClick={handleLogOut}
              >
                Log out
              </a>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-violet-800 hover:bg-violet-900 text-white border-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
