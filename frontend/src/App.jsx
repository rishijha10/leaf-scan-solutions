import "./App.css";
import Dashboard from "./pages/Dashboard";
import Disease from './pages/Disease';
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/disease", element: <Disease /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
