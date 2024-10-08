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
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
