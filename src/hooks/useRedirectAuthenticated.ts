import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectAuthenticated = (): void => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("auth_token");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
};

export default useRedirectAuthenticated;
