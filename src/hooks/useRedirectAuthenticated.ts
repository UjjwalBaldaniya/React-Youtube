import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectAuthenticated = (): void => {
  const navigate = useNavigate();
  const authUser = localStorage.getItem("auth_token");

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser, navigate]);
};

export default useRedirectAuthenticated;
