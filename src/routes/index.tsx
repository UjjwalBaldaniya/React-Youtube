import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/auth/SignIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <MainLayout />,
        children: [{ path: "", element: <Home /> }],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRoutes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
