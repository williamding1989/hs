import { useEffect, useState } from 'react'
import { footerMap1, footerMap2 } from './config.js'
import { device, overload } from '../../utils/index.js'
import { useJump } from '../../hooks/index.js'
import './index.less'

const Footer = () => {
  const jump = useJump()
  const [codeindex1, setCodeindex1] = useState(null)

  // 显示二维码
  const showCode = (t, v, i) => {
    // mob
    if (device() == 1) {
      const { type, link } = v
      // 店铺直接跳转
      if (type === '1') {
        return jump(link)
      }

      // 去二级页面扫码
      jump(`/qrcode/${i}`, true)
      return
    }
    // pc - 显示二维码
    if (t == 0) {
      setCodeindex1(i)
      return
    }
    setCodeindex1(null)
  }

  return (
    <div className="footer">
      <div className="footer__block block__left">
        <div className="footer__title">好侍官方账号</div>
        <div className="footer__channel">
          {footerMap1.map((v, i) => {
            return (
              <div className="footer__channel__list" key={i}>
                <img
                  src={v.icon}
                  className="icon"
                  onClick={() => showCode(0, v, i)}
                ></img>
                <div
                  className={
                    i == codeindex1 ? 'qrcodeLeft qrcodeshow' : 'qrcodeLeft'
                  }
                >
                  {v.qrcode.map((code, index) => {
                    return (
                      <div className="qrcodeLeft__list">
                        <div className="qrcodeLeft__list__title">
                          {code.desc}
                        </div>
                        <img
                          src={code.image}
                          className="qrcode"
                          key={index}
                        ></img>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="footer__block block__right">
        <div className="footer__title">好侍官方店铺</div>
        <div className="footer__channel">
          {footerMap2.map((v, i) => {
            return (
              <div className="footer__channel__list" key={i}>
                <img
                  src={v.icon}
                  className="icon"
                  onClick={() => jump(v.link)}
                ></img>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer
