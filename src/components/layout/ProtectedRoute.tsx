import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectCurrentToken,
  selectCurrentUser,
  TUser,
} from "../../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { baseApi } from "../../redux/api/baseApi";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const authUser = useAppSelector(selectCurrentUser);

  let user;

  if (token) {
    user = verifyToken(token);
  }
  console.log(token, role, authUser);
  if (
    (!token && authUser?.role !== "user") ||
    (!token && authUser?.role !== "admin")
  ) {
    console.log("object1");
    return <Navigate to={"/login"} replace={true} />;
  }

  if (role !== undefined && role !== (user as TUser)?.role) {
    console.log("object");
    // dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    return (
      <Navigate
        to={"/unauthorized"}
        state={location?.pathname}
        replace={true}
      />
    );
  }

  // if (!token) {
  //   console.log("object2");
  //   return <Navigate to={"/login"} replace={true} />;
  // }

  return children;
};

export default ProtectedRoute;
