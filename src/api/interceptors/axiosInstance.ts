import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};
    config.headers.Accept = "application/json";

    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response) {
      toast.error(error?.response?.data?.msg);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
