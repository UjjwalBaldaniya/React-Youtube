import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (): JSX.Element => {
  const authToken = localStorage.getItem("auth_token");
  if (!authToken || authToken === "null" || authToken === "undefined") {
    return <Navigate to="/auth/sign-in" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
