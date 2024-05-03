import { NavLink, useNavigate } from "react-router-dom";
import { FaBug } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { signOut } from "firebase/auth";
import { auth } from "../util/firebaseConfig";

const Navbar = () => {
  const navigate = useNavigate();
  function handleLogout() {
    // app .auth().signOut().then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="flex flex-col w-72 bg-beige shadow h-full">
      <p className="flex items-center justify-center h-16 text-2xl font-semibold font-cur text-[#506385]">
        Leaf Scan Solutions
      </p>
      <div className="flex h-full flex-col py-4 px-6">
        <NavLink
          to={"/"}
          className=" py-2 text-base text-gray-700 font-semibold flex gap-3 items-center hover:text-gray-500"
        >
          <FaBug className=" text-black text-2xl" /> Scan Disease
        </NavLink>
        <NavLink
          to={"/my-plants"}
          className=" py-2 text-base text-gray-700 font-semibold flex gap-3 items-center hover:text-gray-500"
        >
          <PiPlantFill className="text-black text-2xl" /> My Plants
        </NavLink>
      </div>
      <div className="mt-auto px-6 pb-4 font-semibold">
        <p
          onClick={handleLogout}
          className=" font-inter flex gap-3 cursor-pointer "
        >
          <span>
            <TbLogout className="text-2xl" />
          </span>
          Logout
        </p>
      </div>
    </div>
  );
};

export default Navbar;
