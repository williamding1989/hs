import { useNavigate } from "react-router-dom";

/**
 * 页面跳转
 * @param {Boolean} url - 跳转地址
 * @param {Boolean} [useRouter=false] - 是否前端路由跳转
 * @returns
 */
export const useJump = () => {
  const navigate = useNavigate();
  return (url, useRouter = false, type = "self") => {
    if (useRouter) return navigate(url);

    if (type === "self") {
      window.location.href = url;
    } else {
      window.open(url, type);
    }
  };
};
