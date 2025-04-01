import { toast } from "react-toastify";

import {
  GetUserChannelSubscribersResponse,
  ISubscribeResponse,
} from "../../types/Subscribe.type";
import axiosInstanceAuth from "../interceptors/axiosInstanceAuth";

const subscribeToChannel = async (
  videoId: string
): Promise<ISubscribeResponse | null> => {
  try {
    const response = await axiosInstanceAuth.post(
      `/subscriptions/c/${videoId}`
    );
    toast.success(response?.data?.message);
    return response?.data;
  } catch (error) {
    return null;
  }
};

const getChannelSubscribers = async (
  videoId: string
): Promise<GetUserChannelSubscribersResponse | null> => {
  try {
    const response = await axiosInstanceAuth.get(`/subscriptions/u/${videoId}`);
    return response?.data;
  } catch (error) {
    return null;
  }
};

export { getChannelSubscribers, subscribeToChannel };
