// 模块
import { useEffect, useRef, useState } from 'react'
import { HsSwiper, HsVideo, HsLoading } from '../../components/index.jsx'
import { navMap, bannerMap, footerMap1, footerMap2 } from './config.js'
import './index.less'

// 资源
import logo from '../../assets/logo.png'
import swiper_right from '../../assets/swiper_right.png'
import swiper_left from '../../assets/swiper_left.png'
import classroom_title from '../../assets/classroom_title.png'
import classroom_tips from '../../assets/classroom_tips.png'
import book from '../../assets/book.png'
import btn__bg from '../../assets/btn__bg.png'
import icon_right from '../../assets/icon_right.png'
import icon_right1 from '../../assets/icon_right1.png'
import qr_left from '../../assets/qr_left.png'
import qr_right from '../../assets/qr_right.png'

const Home = () => {
  const banner__prev = useRef(null)
  const banner__next = useRef(null)

  useEffect(() => {
    adapter()

    setTimeout(() => {}, 2500)

    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(entry.target.children).map((dom) => {
            dom.classList.add('show')
          })
        } else {
          Array.from(entry.target.children).map((dom) => {
            dom.classList.remove('show')
          })
        }
      })
    })

    // 监听窗口大小变化
    window.addEventListener('resize', adapter)

    return () => {
      window.removeEventListener('resize', adapter)
    }
  }, [])

  // 观察
  const observe = (observer, target) => {
    if (target.current) observer.observe(target.current)
  }

  // 取消观察
  const unobserve = (observer, target) => {
    if (target.current) observer.unobserve(target.current)
  }

  // 返回顶部
  const backtotop = () =>
    window.scrollTo({
      top: 0,
    })

  // 跳转
  const jump = (link) => {
    window.location.href = link
  }

  // 适配器
  const adapter = () => {}

  const navClick = (n) => {
    if (!n.sub) jump(n.link)
  }

  return (
    <div className="Home">
      {/* 导航 */}
      <div className="header">
        <img src={logo} className="header__logo"></img>
        <div className="header__nav">
          {navMap.map((n, i) => {
            return (
              <div
                className="header__nav__list"
                onClick={() => {
                  navClick(n)
                }}
                key={i}
              >
                {/* 内容 */}
                <div className="header__nav__list__content">{n.title}</div>
                {/* 子导航 */}
                {n.sub && (
                  <div className="nav__sub">
                    {n.sub.map((s, index) => {
                      return (
                        <div
                          className="nav__sub__list"
                          key={index}
                          onClick={() => {
                            navClick(s)
                          }}
                        >
                          <div className="nav__sub__list__content">
                            {s.title}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* 轮播 */}
      <div className="banner">
        <HsSwiper
          slides={bannerMap}
          prevRef={banner__prev}
          nextRef={banner__next}
        ></HsSwiper>
        <img
          src={swiper_left}
          ref={banner__prev}
          className="banner__prev"
        ></img>
        <img
          src={swiper_right}
          ref={banner__next}
          className="banner__next"
        ></img>
      </div>

      {/* 波浪 */}
      <div className="wave1"></div>

      {/* 日式咖喱课堂 */}
      <div className="classroom">
        <img src={classroom_title} className="classroom__title"></img>
        <div className="classroom__book">
          <img src={book}></img>
        </div>
        <div className="classroom__tips">
          <img src={classroom_tips}></img>
        </div>
        <div
          className="btn "
          onClick={() => {
            jump()
          }}
        >
          <img src={btn__bg} className="btn__bg"></img>
          <img src={icon_right1} className="icon"></img>
          <div className="btn__desc ">进入课堂</div>
        </div>
      </div>

      {/* 底部 */}
      <div className="footer">
        <div className="footer__block block__left">
          <div className="footer__title">好侍官方账号</div>
          <div className="footer__channel">
            {footerMap1.map((v, i) => {
              return (
                <div className="footer__channel__list" key={i}>
                  <img src={v.icon} className="icon"></img>
                  <img src={v.qrcode} className="qrcode"></img>
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
                  <img src={v.icon} className="icon"></img>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
