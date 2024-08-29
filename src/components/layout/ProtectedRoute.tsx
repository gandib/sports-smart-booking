import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  logout,
  selectCurrentToken,
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

  let user;

  if (token) {
    user = verifyToken(token);
  }

  if (role !== undefined && role !== (user as TUser)?.role) {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    return (
      <Navigate
        to={"/unauthorized"}
        state={location?.pathname}
        replace={true}
      />
    );
  }

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
