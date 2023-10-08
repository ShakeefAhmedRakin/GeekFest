import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="fixed w-full z-20 top-0">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
