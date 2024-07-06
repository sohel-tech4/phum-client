import { Layout, Menu } from "antd";
import { AdminPaths } from "../../routes/admin.routes";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
const { Sider } = Layout;



const Sidebar = () => {
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
                items={sidebarGenerator(AdminPaths, "admin")}
            />
        </Sider>
    );
};

export default Sidebar;