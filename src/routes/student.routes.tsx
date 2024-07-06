import StudentDashboard from "../pages/Student/StudentDashboard";

export const StudentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard></StudentDashboard>
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Student",
                path: "create-student",
                element: "",
            },
        ],
    },
];