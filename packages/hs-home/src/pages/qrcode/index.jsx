import { useParams } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './index.less'

const Qrcode = () => {
  const { index } = useParams() // 获取 URL 参数
  return (
    <div className="Qrcode">
      {index}
      <img src={logo} className="Qrcode__logo"></img>
    </div>
  )
}

export default Qrcode
