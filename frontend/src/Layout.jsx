import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useContext } from "react";
import MainContext from "./store/MainContext";

const Layout = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(MainContext);
  useEffect(() => {
    if (isLoggedIn == undefined) {
      return;
    }
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className=" h-dvh flex">
      <Navbar />
      <div className="w-full h-full overflow-y-scroll bg-[#1f1f22] text-beige ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
