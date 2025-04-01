// import apiService from "./apiService";

import {
  IGetVideoByIdResponse,
  IGetVideoResponse,
} from "../../types/createVideo.types";
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

export const getVideoById = async (
  id: string
): Promise<IGetVideoByIdResponse | null> => {
  try {
    const response = await axiosInstanceAuth.get(`/videos/${id}`);
    return response?.data;
  } catch (error) {
    return null;
  }
};
