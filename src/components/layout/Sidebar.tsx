import { Layout, Menu } from "antd";
import { AdminPaths } from "../../routes/admin.routes";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { FacultyPaths } from "../../routes/faculty.routes";
import { StudentPaths } from "../../routes/student.routes";
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const role = "student";
  let siderbarItems;

  switch (role) {
    case userRole.ADMIN:
      siderbarItems = sidebarGenerator(AdminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      siderbarItems = sidebarGenerator(FacultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      siderbarItems = sidebarGenerator(StudentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          height: "4rem",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{}}>PH UNIVERSITY</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={siderbarItems}
      />
    </Sider>
  );
};

export default Sidebar;
