import { toast } from "react-toastify";

import { ICreateVideoResponse } from "../../types/createVideo.types";
import axiosInstanceAuth from "../interceptors/axiosInstanceAuth";

const createVideoService = async (
  uploadVideoData: FormData
): Promise<ICreateVideoResponse | null> => {
  try {
    const response = await axiosInstanceAuth.post("/videos", uploadVideoData);
    toast.success(response?.data?.msg);
    return response?.data;
  } catch (error) {
    return null;
  }
};

export { createVideoService };
