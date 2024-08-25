import AddAdmin from "../pages/admin/AddAdmin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AllBookings from "../pages/admin/Booking/AllBookings";
import CreateFacility from "../pages/admin/Facility/CreateFacility";
import MyBooking from "../pages/user/Booking/MyBooking";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Facility Management",
    children: [
      {
        name: "Create Facility",
        path: "create-academic-semester",
        element: <CreateFacility />,
      },
    ],
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "All Bookings",
        path: "all-bookings",
        element: <AllBookings />,
      },
    ],
  },
  {
    name: "Add Admin",
    children: [
      {
        name: "Create Admin",
        path: "add-admin",
        element: <AddAdmin />,
      },
    ],
  },
];
