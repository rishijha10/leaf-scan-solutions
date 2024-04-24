import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className=" h-dvh flex">
      <Navbar />
      <div className="w-full h-full overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
