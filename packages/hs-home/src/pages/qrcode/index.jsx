import { useParams } from 'react-router-dom'
import logo from '../../assets/logo.png'
import code_bg from '../../assets/code_bg.png'
import follow from '../../assets/follow.png'
import './index.less'
import { footerMap1 } from '../footer/config.js'

const Qrcode = () => {
  const { index } = useParams() // 获取 URL 参数

  return (
    <div className="Qrcode">
      <img src={logo} className="Qrcode__logo"></img>
      <img src={follow} className="Qrcode__follow"></img>
      {footerMap1[index].qrcode.map((v, i) => {
        return (
          <div key={i} className="Qrcode__list">
            <img className="Qrcode__list__img" src={v.image}></img>
            <div className="Qrcode_list__desc">{v.desc}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Qrcode
