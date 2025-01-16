import axios from "axios";

const axiosInstanceAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstanceAuth.interceptors.request.use(
  async (config) => {
    const authToken = localStorage.getItem("auth_token");
    if (authToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstanceAuth.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstanceAuth;
