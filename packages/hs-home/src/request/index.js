import { API } from "./config.js";
import { createRequest } from "./axiosadapter.js";

export const getHomeData = async () => {
  try {
    const { data } = await createRequest.post(API.HOME);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getNewsList = async () => {
  try {
    const { data } = await createRequest.post(API.NEWSLIST);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getNewsDetail = async (id) => {
  try {
    const { data } = await createRequest.post(API.NEWSDETAIL, {
      id,
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
