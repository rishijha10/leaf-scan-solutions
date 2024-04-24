import { NavLink } from "react-router-dom";
import { FaBug } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-200 shadow h-full">
      <p className="flex items-center justify-center h-16 text-black text-xl font-bakbak">
        Leaf Scan Solutions
      </p>
      <div className="flex flex-col flex-grow py-4">
        <NavLink
          to={"/"}
          className="px-6 py-2 text-sm text-gray-700 font-semibold flex gap-3 items-center hover:bg-gray-100 hover:text-gray-500"
        >
          <FaBug className=" text-black text-xl" /> Scan Disease
        </NavLink>

        <NavLink
          to={"/my-plants"}
          className="px-6 py-2 text-sm text-gray-700 font-semibold flex gap-3 items-center hover:bg-gray-100 hover:text-gray-500"
        >
          <PiPlantFill className="text-black text-xl" /> My Plants
        </NavLink>
        <a
          href="#"
          className="px-6 py-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 hover:text-gray-500"
        >
          Profile
        </a>
        <a
          href="#"
          className="px-6 py-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 hover:text-gray-500"
        >
          Settings
        </a>
      </div>
    </div>
  );
};

export default Navbar;
