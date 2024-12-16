import { toast } from "react-toastify";

import {
  IAuthResponse,
  ILoginFormInputs,
  ISignUpAuthResponse,
} from "../../types/auth.type";
import axiosInstance from "../interceptors/axiosInstance";

const signIn = async (
  credentials: ILoginFormInputs
): Promise<IAuthResponse | null> => {
  try {
    const response = await axiosInstance.post("/users/login", credentials);
    toast.success(response?.data?.message);
    const { accessToken } = response.data.data;
    localStorage.setItem("auth_token", accessToken);
    return response?.data;
  } catch (error) {
    return null;
  }
};

const signUp = async (
  userData: FormData
): Promise<ISignUpAuthResponse | null> => {
  try {
    const response = await axiosInstance.post("/users/add", userData);
    toast.success(response?.data?.msg);
    return response?.data;
  } catch (error) {
    return null;
  }
};

export { signIn, signUp };
