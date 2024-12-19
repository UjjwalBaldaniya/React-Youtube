import { Navigate } from "react-router-dom";

import Layout from "./Layout";

const ProtectedRoute: React.FC = () => {
  const authUser = localStorage.getItem("auth_token");
  return authUser ? <Layout /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
