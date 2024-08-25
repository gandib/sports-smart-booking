import { toast } from "sonner";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import userApi from "../redux/features/userInfo/userApi";

const UserInfo = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: userData, error } = userApi.useGetUserQuery(user?.email);
  console.log(userData);
  if (error && error?.data) {
    toast.error(error.data.message);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          //   width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h1>
            Welcome,{" "}
            <span style={{ color: "green" }}>{userData?.data?.name}!</span>
          </h1>
        </div>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={userData?.data?.email}
          description={userData?.data?.role}
        />
        {/* <p>Role: {userData?.data?.role}</p> */}
        <p style={{ marginTop: "10px" }}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
          {userData?.data?.phone}
        </p>
        <p>
          {" "}
          <span style={{ fontWeight: "bold" }}>Address:</span>{" "}
          {userData?.data?.address}
        </p>
      </Card>
    </div>
  );
};

export default UserInfo;
