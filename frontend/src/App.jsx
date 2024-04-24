import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Layout from "./Layout";
import { MainContextProvider } from "./store/MainContext";
import MyPlants from "./pages/MyPlants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./util/firebaseConfig";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  // const [authenticated, setAuthenticated] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setIsLoading(true);
  //     if (user) {
  //       //   console.log(user);
  //       setAuthenticated(true);
  //     } else {
  //       setAuthenticated(false);
  //       // User is signed out
  //       // ...
  //     }
  //     setIsLoading(false);
  //   });
  // }, []);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Layout />,
      // loader: () => {
      //   return authenticated ? authenticated : redirect("/login");
      // },
      children: [
        { path: "", element: <Dashboard /> },
        { path: "/my-plants", element: <MyPlants /> },
        { path: "home", element: <Home /> },
      ],
    },
  ]);
  return (
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  );
}

export default App;
