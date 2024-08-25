/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import userApi from "../../redux/features/user/userApi";
import { useAppSelector } from "../../redux/hooks";

const UserDashboard = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: userData, error } = userApi.useGetUserQuery(user?.email);
  console.log(userData);
  if (error && error?.data) {
    toast.error(error.data.message);
  }
  return (
    <div>
      <h1>Hello, UserDashboard!</h1>
    </div>
  );
};

export default UserDashboard;
