// import apiService from "./apiService";

import { IGetVideoResponse } from "../../types/createVideo.types";
import axiosInstanceAuth from "../interceptors/axiosInstanceAuth";

interface VideoQueryParams {
  page?: number;
  limit?: number;
  query?: string;
  sortBy?: string;
  sortType?: "asc" | "desc";
}

export const getVideos = async (
  params: VideoQueryParams = {}
): Promise<IGetVideoResponse | null> => {
  try {
    const response = await axiosInstanceAuth.get(`/videos`, { params });
    return response?.data;
  } catch (error) {
    return null;
  }
};

// export const addBaseUnit = async (value) => {
//   return await apiService.post("/baseunit/add", value);
// };

// export const getVideos = async (id: string) => {
//   return await apiService.get(`/videos/${id}`);
// };

// export const getByIdBaseUnits = async (id) => {
//   return await apiService.get(`/baseunit/${id}`);
// };

// export const editBaseUnit = async (id, value) => {
//   return await apiService.post(`/baseunit/${id}`, value);
// };

// export const deleteBaseUnit = async (id) => {
//   return await apiService.delete(`/baseunit/${id}`);
// };
