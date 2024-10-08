import { Button, Layout, Menu, MenuProps } from "antd";
const { Header, Content } = Layout;
import { Link, NavLink, Outlet } from "react-router-dom";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { baseApi } from "../../redux/api/baseApi";
import { Footer } from "antd/es/layout/layout";
import logo from "../../assets/images/sports-logo.png";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const items1: MenuProps["items"] = [
    {
      key: "Home",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "Dashboard",
      label: <NavLink to={`${user?.role}/dashboard`}>Dashboard</NavLink>,
    },
    {
      key: "Facility",
      label: <NavLink to={`/facility`}>Facility Listing</NavLink>,
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              style={{
                width: "50%",
                height: "70%",
              }}
            />
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
      <Footer style={{ textAlign: "center", backgroundColor: "#f0f2f5" }}>
        Sports Smart Booking ©{new Date().getFullYear()}
        <div>
          <div>
            <Link to={"/about"}>About Us</Link>
          </div>
          <div>
            <Link to={"/contact"}>Contact Us</Link>
          </div>
          <div>
            <div>
              <Link to={"/"}>Follow on Facebook</Link>
            </div>
            <div>
              <Link to={"/"}>Follow on X</Link>
            </div>
            <div>
              <Link to={"/"}>Follow on Instagram</Link>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
