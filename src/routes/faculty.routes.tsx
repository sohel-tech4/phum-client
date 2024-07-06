import FacultyDashboard from "../pages/Faculty/FacultyDashboard";

export const FacultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard></FacultyDashboard>
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: "",
            },
        ],
    },
];