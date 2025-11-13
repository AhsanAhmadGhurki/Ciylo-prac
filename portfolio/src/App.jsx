import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingLayout from "./pages/landing/layout/index";
import Home from "./pages/landing/home/index";

const router = createBrowserRouter([
  // {
  //   path: "/auth",

  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Login />,
  //     },
  //     {
  //       path: "signup",
  //       element: <Signup />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "Workshop",
      //   element: <Workshop />,
      // },
      // {
      //   path: "Swag",
      //   element: <Swag />,
      // },
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
