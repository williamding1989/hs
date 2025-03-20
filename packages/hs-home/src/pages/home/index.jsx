// 模块
import { useEffect, useRef, useState } from 'react'
import { HsSwiper, HsLoading, Totop } from '../../components/index.jsx'
import { useNavigate } from 'react-router-dom'
import {
  navMap,
  pcBannerMap,
  mobBannerMap,
  footerMap1,
  footerMap2,
  curryMap2,
  curryMap1,
} from './config.js'
import './index.less'
import { device } from '../../utils/index.js'

// 资源
import logo from '../../assets/logo.png'
import swiper_right from '../../assets/swiper_right.png'
import swiper_left from '../../assets/swiper_left.png'
import classroom_title from '../../assets/classroom_title.png'
import classroom_tips from '../../assets/classroom_tips.png'
import book from '../../assets/book.png'
import btn__bg from '../../assets/btn__bg.png'
import icon_right1 from '../../assets/icon_right1.png'
import news_title from '../../assets/news_title.png'
import news_more from '../../assets/news_more.png'
import abouths_bg from '../../assets/abouths_bg.png'
import abouths_btn from '../../assets/abouths_btn.png'
import product_title from '../../assets/product_title.png'
import product1_left from '../../assets/product1_left.png'
import product1_right from '../../assets/product1_right.png'
import product2_left from '../../assets/product2_left.png'
import product2_right from '../../assets/product2_right.png'
import more from '../../assets/more.png'
import more1 from '../../assets/more1.png'
import hot_title from '../../assets/hot_title.png'
import fancy_title from '../../assets/fancy_title.png'
import fancy_btn from '../../assets/fancy_btn.png'
import swiper_left1 from '../../assets/swiper_left1.png'
import swiper_right1 from '../../assets/swiper_right1.png'
import hot_title1 from '../../assets/hot_title1.png'
import hot_title2 from '../../assets/hot_title2.png'
import abouths_title from '../../assets/abouths_title.png'
import knowmore from '../../assets/knowmore.png'
import mob_nav from '../../assets/mob_nav.png'
import news_more1 from '../../assets/news_more1.png'
import mob_navdrop from '../../assets/mob_nav-drop.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import classroom_mob1 from '../../assets/classroom_mob1.png'
import classroom_mob2 from '../../assets/classroom_mob2.png'

const Home = () => {
  const navigate = useNavigate()
  const [active1, setActive1] = useState(0)
  const [codeindex1, setCodeindex1] = useState(null)
  const [codeindex2, setCodeindex2] = useState(null)
  const [active2, setActive2] = useState(0)
  const [showDesc, setShowDesc] = useState(false)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const [mobnavshow, setMobnavshow] = useState(false)
  const [navData, setNavData] = useState(navMap)

  const fancy__prev1 = useRef(null)
  const fancy__prev2 = useRef(null)
  const fancy__next1 = useRef(null)
  const fancy__next2 = useRef(null)
  const banner__prev = useRef(null)
  const banner__next = useRef(null)
  const _classroom__book = useRef(null)
  const _classroom__tips = useRef(null)
  const _product__list1 = useRef(null)
  const _product__list2 = useRef(null)
  const _abouths__left = useRef(null)
  const _abouths__right = useRef(null)

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

    observe(observer, _classroom__book)
    observe(observer, _classroom__tips)
    observe(observer, _product__list1)
    observe(observer, _product__list2)
    observe(observer, _abouths__left)
    observe(observer, _abouths__right)

    // 监听窗口大小变化
    window.addEventListener('resize', adapter)

    return () => {
      unobserve(observer, _classroom__book)
      unobserve(observer, _classroom__tips)
      unobserve(observer, _product__list1)
      unobserve(observer, _product__list2)
      unobserve(observer, _abouths__left)
      unobserve(observer, _abouths__right)
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
  const adapter = () => {
    switch (device()) {
      // 移动
      case 1:
        setSlidesPerView(1)
        setShowDesc(false)
        break
      // pad
      case 2:
        setSlidesPerView(2)
        setShowDesc(true)
        break
      // pc
      case 3:
        setSlidesPerView(3)
        setShowDesc(true)
        break
    }
  }

  // pc导航切换
  const navClick = (n) => {
    if (!n.sub) jump(n.link)
  }

  // mob导航切换
  const mobnavClick = (n) => {
    // 没子菜单，直接跳转
    if (!n.sub) {
      return jump(n.link)
    }

    // clone
    const _navData = JSON.parse(JSON.stringify(navData))

    // Set
    setNavData(toogleExpand(n.id, _navData))
  }

  // 切换状态
  const toogleExpand = (id, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i].expand = !data[i].expand
        break
      }
      data[i].sub && toogleExpand(id, data[i].sub)
    }

    return data
  }

  // 移动端导航切换
  const togglemobnav = () => {
    setMobnavshow(!mobnavshow)
  }
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
      navigate(`/qrcode/${i}`)
      return
    }
    // pc - 显示二维码
    if (t == 0) {
      setCodeindex1(i)
      setCodeindex2(null)
      return
    }
    setCodeindex1(null)
    setCodeindex2(i)
  }

  // 渲染mob菜单
  const renderMobNav = (data, level, expand) => {
    return (
      <div className={`list-wrap level-${level}-wrap visible-${expand}`}>
        {data.map((n, i) => {
          return (
            <div className={`mob__nav__list level-${level}-container `} key={i}>
              <div
                className={`level-${level}`}
                onClick={() => {
                  mobnavClick(n)
                }}
              >
                <div className="mob__nav__list__title">{n.title}</div>
                <div className="mob__nav__list__icon">
                  {/* 有子菜单，没展开 */}
                  {n.sub && !n.expand && <img src={icon1}></img>}
                  {/* 有子菜单，展开了 */}
                  {n.sub && n.expand && <img src={icon2}></img>}
                  {/* 没子菜单 */}
                  {!n.sub && <img src={icon_right1} className="unsub"></img>}
                </div>
              </div>

              {/* 递归 */}
              {n.sub && renderMobNav(n.sub, level + 1, n.expand)}
            </div>
          )
        })}
      </div>
    )
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
              </div>
            )
          })}
        </div>

        {/* 移动端导航 */}
        <img
          src={mobnavshow ? mob_navdrop : mob_nav}
          className="mob__nav__btn"
          onClick={togglemobnav}
        ></img>

        <div className={mobnavshow ? 'mob__nav mob__nav-show' : 'mob__nav'}>
          {renderMobNav(navData, 1, true)}
        </div>
      </div>

      {/* 轮播 */}
      <div className="banner">
        <HsSwiper
          slides={device() == 1 ? mobBannerMap : pcBannerMap}
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
      <div className="wave"></div>

      {/* 日式咖喱课堂 */}
      <div className="classroom">
        <img src={classroom_title} className="classroom__title"></img>
        <div className="classroom__book" ref={_classroom__book}>
          <img src={book}></img>
        </div>
        <div className="classroom__tips" ref={_classroom__tips}>
          <img src={classroom_tips}></img>
        </div>

        <div className="classroom__mob1">
          <img src={classroom_mob1}></img>
        </div>

        <div className="classroom__mob2">
          <img src={classroom_mob2}></img>
        </div>

        <div
          className="btn"
          onClick={() => {
            jump()
          }}
        >
          <img src={btn__bg} className="btn__bg"></img>
          <img src={icon_right1} className="icon"></img>
          <div className="btn__desc ">进入课堂</div>
        </div>
      </div>

      <div className="hotfancy">
        {/* 人气菜谱 */}
        <div className="hot">
          <img src={hot_title} className="hot__title"></img>
          <div className="hot__showcase">
            <div className="caseItem">
              <div className="caseItem__title">百梦多鸡肉咖喱饭</div>
              <img src={product2_left} className="caseItem__img" />
              <img src={hot_title1} className="hot_title"></img>
              <img src={more1} className="caseItem__more" />
            </div>
            <div className="caseItem">
              <div className="caseItem__title">咖王牛肉咖喱蛋包饭</div>
              <img src={product2_left} className="caseItem__img" />
              <img src={hot_title2} className="hot_title"></img>
              <img src={more1} className="caseItem__more" />
            </div>
          </div>
        </div>

        {/* 花式菜谱 */}
        <div className="fancy">
          <img src={fancy_title} className="fancy__title"></img>
          {/* 轮播 */}
          <div className="fancy__swiperwrap">
            <div className="fancy__swipercontainer">
              <HsSwiper
                slides={curryMap1}
                prevRef={fancy__prev1}
                nextRef={fancy__next1}
                onSlideChange={(i) => {
                  setActive1(i)
                }}
                slidesPerView={slidesPerView}
                showDesc={showDesc}
              ></HsSwiper>
              <img
                src={swiper_left1}
                ref={fancy__prev1}
                className="fancy__prev"
              ></img>
              <img
                src={swiper_right1}
                ref={fancy__next1}
                className="fancy__next"
              ></img>
            </div>
            <div className="swiper__tips">{curryMap1[active1].desc}</div>
          </div>
          {/* 轮播 */}
          <div className="fancy__swiperwrap">
            <div className="fancy__swipercontainer">
              <HsSwiper
                slides={curryMap2}
                prevRef={fancy__prev2}
                nextRef={fancy__next2}
                onSlideChange={(i) => {
                  setActive2(i)
                }}
                slidesPerView={slidesPerView}
                showDesc={showDesc}
              ></HsSwiper>
              <img
                src={swiper_left1}
                ref={fancy__prev2}
                className="fancy__prev"
              ></img>
              <img
                src={swiper_right1}
                ref={fancy__next2}
                className="fancy__next"
              ></img>
            </div>
            <div className="swiper__tips">{curryMap2[active2].desc}</div>
          </div>
          <img src={fancy_btn} className="fancy__btn"></img>
        </div>
      </div>

      {/* 产品介绍 */}
      <div className="product">
        <img src={product_title} className="product__title"></img>
        <div className="product__container">
          <div className="product__container__list list1" ref={_product__list1}>
            <img src={product1_left} className="list__left"></img>
            <img src={product1_right} className="list__right"></img>
            <img src={more} className="list__more"></img>
          </div>
          <div className="product__container__list list2" ref={_product__list2}>
            <img src={product2_right} className="list__right"></img>
            <img src={product2_left} className="list__left"></img>
            <img src={more} className="list__more"></img>
          </div>
        </div>
        <img src={more} className="more"></img>
      </div>

      {/* 波浪 */}
      <div className="wave1"></div>

      {/* 关于好侍 */}
      <div className="abouths">
        <img src={abouths_title} className="abouths__title"></img>
        <div className="abouths__left" ref={_abouths__left}>
          <img src={abouths_btn} className="abouths__btn"></img>
          <div className="abouths__desc">
            <div>好侍集团作为拥有着百年历史的集团公司</div>
            <div>目前在全世界10多个国家和地区经营食品和饮料相关业务</div>
            <div>并且在市场规模庞大的中国</div>
            <div>我们也开展了20多年的咖喱方面的业务</div>
            <div>伴随中国的改革开放和经济飞速发展</div>
            <div>中国事业也实现了持续地成长</div>
          </div>
          <div className="abouths__desc-mob">
            <div>好侍集团作为拥有着百年历史的集团公司</div>
            <div>目前在全世界10多个国家和地区经营食品和饮料相关业务</div>
            <div>并且在市场规模庞大的中国也实现了持续地成长</div>
          </div>
        </div>
        <div className="abouths__right" ref={_abouths__right}>
          <img src={abouths_bg} className="abouths__bg"></img>
        </div>
        <img src={knowmore} className="abouths__knowmore"></img>
      </div>

      {/* 新闻中心 */}
      <div className="news">
        <img src={news_title} className="news__title"></img>
        <div className="news__container">
          <div className="news__list borderbottom">
            <div className="news__type news__type-company">公司</div>
            <div className="news__date">2020-04-13</div>
            <div className="news__desc">
              好侍食品开展打击知识产权侵权行动的事例公告
            </div>
          </div>
          <div className="news__list">
            <div className="news__type news__type-activity">活动</div>
            <div className="news__date">2020-04-13</div>
            <div className="news__desc">
              好侍食品开展打击知识产权侵权行动的事例公告
            </div>
          </div>
          <div className="news__list">
            <div className="news__type"></div>
            <div className="news__date">2020-04-13</div>
            <div className="news__desc">
              好侍食品开展打击知识产权侵权行动的事例公告
            </div>
          </div>
        </div>
        <img src={news_more} className="news__more"></img>
        <img src={news_more1} className="news__more1"></img>
      </div>

      {/* 底部 */}
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
                    <img src={v.qrcode} className="qrcode"></img>
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
                    onClick={() => showCode(1, v, i)}
                  ></img>
                  <div
                    className={
                      i == codeindex2 ? 'qrcodeRight qrcodeshow' : 'qrcodeRight'
                    }
                  >
                    <img src={v.qrcode} className="qrcode"></img>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 返回顶部 */}
      <Totop></Totop>
    </div>
  )
}

export default Home
