import "./App.css";
import Dashboard from "./pages/Dashboard";
import Disease from './pages/Disease';
import Login from "./pages/Login";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/disease", element: <Disease /> },
    { path: "/home", element: <Home /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
