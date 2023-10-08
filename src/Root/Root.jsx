import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <div className="fixed w-full z-20 top-0">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
