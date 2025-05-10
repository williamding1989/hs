import { API } from "./config.js";
import { createRequest } from "./axiosadapter.js";

export const getHomeData = async (options) => {
  try {
    const { data } = await createRequest.post(API.HOME, options);
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

export const getNewsDetail = async (options) => {
  try {
    const { data } = await createRequest.post(API.NEWSDETAIL, options);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCookList = async ({ category_id, page }) => {
  try {
    const { data } = await createRequest.post(API.COOKBOOKLIST, {
      category_id,
      page,
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCookDetail = async (options) => {
  try {
    const { data } = await createRequest.post(API.COOKBOOKDETAIL, options);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getProList = async () => {
  try {
    const { data } = await createRequest.post(API.PRODUCTORLIST);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getProDetail = async (options) => {
  try {
    const { data } = await createRequest.post(API.PRODUCTORDETAIL, options);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
