import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AdminRoutes } from "./admin.paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: AdminRoutes,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/Register",
    element: <Register></Register>,
  },
]);

export default router;
