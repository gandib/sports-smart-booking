import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { routesGenerator } from "../utils/routesGenerator";
import { userPaths } from "./user.routes";
import DashboardLayout from "../components/layout/DashboardLayout";
import { adminPaths } from "./admin.routes";
import FacilityList from "../pages/Facility/FacilityList";
import FacilityDetail from "../pages/Facility/FacilityDetail";
import Booking from "../pages/Booking";
import Payment from "../pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/facility",
        element: <FacilityList />,
      },
      {
        path: "/facility/:facilityId",
        element: <FacilityDetail />,
      },
      {
        path: "/booking/:facilityId",
        element: <Booking />,
      },
      {
        path: "/payment/:bookingId",
        element: <Payment />,
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routesGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routesGenerator(userPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
