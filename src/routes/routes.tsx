import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  //   {
  //     path: "/admin",
  //     element: (
  //       <ProtectedRoute role="admin">
  //         <App />
  //       </ProtectedRoute>
  //     ),
  //     children: routesGenerator(adminPaths),
  //   },
  //   {
  //     path: "/faculty",
  //     element: (
  //       <ProtectedRoute role="faculty">
  //         <App />
  //       </ProtectedRoute>
  //     ),
  //     children: routesGenerator(facultyPaths),
  //   },
  //   {
  //     path: "/student",
  //     element: (
  //       <ProtectedRoute role="student">
  //         <App />
  //       </ProtectedRoute>
  //     ),
  //     children: routesGenerator(studentPaths),
  //   },
  {
    path: "/login",
    element: <Login />,
  },
  //   {
  //     path: "/change-password",
  //     element: <ChangePassword />,
  //   },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
