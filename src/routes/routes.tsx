import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routeGenerator";
import { AdminPaths } from "./admin.routes";
import { FacultyPaths } from "./faculty.routes";
import { StudentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(AdminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(FacultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(StudentPaths),
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
