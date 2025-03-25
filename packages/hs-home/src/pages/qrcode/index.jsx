import { useParams } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './index.less'
import { footerMap1 } from '../footer/config.js'

const Qrcode = () => {
  const { index } = useParams() // 获取 URL 参数
  console.log(footerMap1[index])

  return (
    <div className="Qrcode">
      <img src={logo} className="Qrcode__logo"></img>
    </div>
  )
}

export default Qrcode
