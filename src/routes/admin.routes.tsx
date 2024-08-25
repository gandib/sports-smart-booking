import AddAdmin from "../pages/admin/AddAdmin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AllBookings from "../pages/admin/Booking/AllBookings";
import AllFacility from "../pages/admin/Facility/AllFacility";
import CreateFacility from "../pages/admin/Facility/CreateFacility";
import UpdateFacility from "../pages/admin/Facility/UpdateFacility";

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
        name: "All Facility",
        path: "all-facility",
        element: <AllFacility />,
      },
      {
        name: "Create Facility",
        path: "create-academic-semester",
        element: <CreateFacility />,
      },
      {
        path: "update-facility/:facilityId",
        element: <UpdateFacility />,
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
