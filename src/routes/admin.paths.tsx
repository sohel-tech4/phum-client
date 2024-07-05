import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

const AdminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Create Member",
        path: "create-Member",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];

export const AdminRoutes = AdminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

export const SidebarItems = AdminPaths.reduce((acc: TSidebarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }

  return acc;
}, []);
