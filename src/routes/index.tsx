import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import CreateVideo from "../pages/CreateVideo";
import NotFound from "../pages/NotFound";
import VideoDetail from "../pages/VideoDetail";
import VideoFeed from "../pages/VideoFeed";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/VideoFeed"));
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
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <VideoFeed /> },
      { path: "/:id", element: <VideoDetail /> },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
          { path: "", element: <Home /> },
          { path: "create-video", element: <CreateVideo /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRoutes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
