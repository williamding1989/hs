import axios from "axios";

// 创建axios实例
const instance = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 如果响应成功，直接返回数据
    return response.data;
  },
  (error) => {
    // 处理错误情况
    if (error.response) {
      // 服务器返回了错误状态码
      switch (error.response.status) {
        case 400:
          console.error("请求参数错误");
          break;
        case 401:
          console.error("未授权，请重新登录");
          break;
        case 403:
          console.error("拒绝访问");
          break;
        case 404:
          console.error("请求错误，未找到该资源");
          break;
        case 500:
          console.error("服务器错误");
          break;
        default:
          console.error(`连接错误${error.response.status}`);
      }
    } else if (error.request) {
      // 请求已经发出，但没有收到响应
      console.error("网络错误，请检查网络连接");
    } else {
      // 请求配置出错
      console.error("请求配置错误", error.message);
    }

    return Promise.reject(error);
  }
);

export const createRequest = {
  get: (url, params) => instance.get(url, { params }),
  post: (url, data) => instance.post(url, data),
};
