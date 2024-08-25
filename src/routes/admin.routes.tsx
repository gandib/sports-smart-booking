import AdminDashboard from "../pages/admin/AdminDashboard";
import MyBooking from "../pages/user/Booking/MyBooking";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Bookings",
    children: [
      {
        name: "My Bookings",
        path: "create-academic-semester",
        element: <MyBooking />,
      },
    ],
  },
];
