import { useNavigate } from 'react-router-dom'

/**
 * 页面跳转
 * @param {Boolean} url - 跳转地址
 * @param {Boolean} [useRouter=false] - 是否前端路由跳转
 * @returns
 */
export const useJump = () => {
  const navigate = useNavigate()
  return (url, useRouter = false) =>
    useRouter ? navigate(url) : (window.location.href = url)
}
