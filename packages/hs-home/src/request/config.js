const HOST = "http://124.223.0.156:8082";

const BASE = "/api";

const combine = (url) => `${HOST}${BASE}${url}`;

const endpoints = {
  // 首页接口
  HOME: "/home",
  // 新闻列表接口
  NEWSLIST: "/news/list",
  // 新闻详情接口
  NEWSDETAIL: "/news/detail",
  // 产品列表接口
  PRODUCTORLIST: "/product/list",
  // 产品详情接口
  PRODUCTORDETAIL: "/product/detail",
  // 菜谱列表接口
  COOKBOOKLIST: "/cookbook/list",
  // 菜谱详情接口
  COOKBOOKDETAIL: "/cookbook/detail",
};

export const API = Object.entries(endpoints).reduce(
  (last, [k, v]) => ({
    ...last,
    [k]: combine(v),
  }),
  {}
);
