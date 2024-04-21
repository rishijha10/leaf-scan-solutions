import { NavLink, useNavigate } from "react-router-dom";
import image from "./../assets/disease-hero.png";
import { useState } from "react";
import { auth } from "../util/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    if (authMode === "signUp") {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/dashboard");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (authMode == "login") {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          navigate("/dashboard");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  const [authMode, setAuthMode] = useState("login");
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="mr-10">
          <img src={image} />
        </div>
        <div>
          <div>
            <h1 className="font-bold text-4xl text-gray-700 mb-6">
              LeafScanSolutions
            </h1>
          </div>
          <div>
            <h2 className="text-xl mb-6">
              An AI tool to detect plant diseases and <br />
              provide remedies
            </h2>
          </div>
          <form
            onSubmit={loginHandler}
            className=" w-full flex flex-col space-y-3 my-2"
          >
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className=" p-2 outline-none border-2 rounded text-base"
            />
            <input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className=" p-2 outline-none border-2 rounded text-base"
            />
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-gray-200 text-gray-700 hover:text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded transition-colors duration-300"
            >
              {authMode === "login" ? "Login" : "Sign Up"}
            </button>
          </form>

          <NavLink to={authMode === "login" ? "/?mode=signUp" : "/?mode=login"}>
            <button
              disabled={loading}
              onClick={() =>
                setAuthMode((prev) => (prev === "login" ? "signUp" : "login"))
              }
              className=" w-fit bg-gray-200 text-gray-700 hover:text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded transition-colors duration-300"
            >
              {authMode === "login" ? "Sign Up" : "Login"}
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
