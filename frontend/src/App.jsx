import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { MainContextProvider } from "./store/MainContext";
import MyPlants from "./pages/MyPlants";
import MyPlant from "./pages/MyPlant";
function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Dashboard /> },
        {
          path: "/my-plants",

          children: [
            { index: true, element: <MyPlants /> },
            { path: ":plantId", element: <MyPlant /> },
          ],
        },
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
