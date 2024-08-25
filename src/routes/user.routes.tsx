import BookingDetail from "../pages/user/Booking/BookingDetail";
import MyBooking from "../pages/user/Booking/MyBooking";
import UserDashboard from "../pages/user/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Bookings",
    children: [
      {
        name: "My Bookings",
        path: "my-bookings",
        element: <MyBooking />,
      },
      {
        path: "my-bookings/:bookingId",
        element: <BookingDetail />,
      },
    ],
  },
];
