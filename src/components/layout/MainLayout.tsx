import { Button, Layout, Menu, MenuProps } from "antd";
const { Header, Content } = Layout;
import { Link, NavLink, Outlet } from "react-router-dom";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { baseApi } from "../../redux/api/baseApi";

const MainLayout = () => {
  const dispatch = useAppDispatch();

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

  const user = useAppSelector(selectCurrentUser);
  console.log(user);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
  };
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
            {user && user.email ? (
              <Button
                onClick={handleLogout}
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Logout
              </Button>
            ) : (
              <Button style={{ fontWeight: "bold", fontSize: "18px" }}>
                <Link to="/login">Login</Link>
              </Button>
            )}
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
