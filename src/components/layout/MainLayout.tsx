import { Button, Layout, Menu, MenuProps } from "antd";
const { Header, Content } = Layout;
import { Link, NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  const items1: MenuProps["items"] = [
    {
      key: "Home",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "Dashboard",
      label: <NavLink to={`/dashboard`}>Dashboard</NavLink>,
    },
  ];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header style={{ display: "flex" }}>
          <div>
            <h2 style={{ color: "white" }}>Sports Smart Booking</h2>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["4"]}
            items={items1}
            style={{
              flex: 1,
              minWidth: 0,
              fontSize: "18px",
              marginLeft: "20px",
            }}
          />
          <div>
            <Button style={{ fontWeight: "bold", fontSize: "18px" }}>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
