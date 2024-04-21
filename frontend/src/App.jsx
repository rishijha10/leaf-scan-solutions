import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
