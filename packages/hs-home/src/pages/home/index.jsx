// 模块
import { useEffect, useRef, useState } from 'react'
import { HsSwiper, HsVideo, HsLoading } from '../../components/index.jsx'
import { curryMap1, curryMap2, aboutMap, pageMap } from './config.js'
import './index.less'
import { device } from '../../utils/index.js'

// 资源
import banner__bg from '../../assets/banner_bg.png'
import curryrice from '../../assets/curryrice.png'
import logo from '../../assets/logo.png'
import line from '../../assets/line.png'
import fat from '../../assets/fat.png'
import spoon from '../../assets/spoon.png'
import zero from '../../assets/zero.png'
import currcybox from '../../assets/currcybox.png'
import abouths__bg from '../../assets/abouths__bg.png'
import btn__bg from '../../assets/btn__bg.png'
import btn__bg1 from '../../assets/btn__bg1.png'
import icon_right from '../../assets/icon_right.png'
import icon_right1 from '../../assets/icon_right1.png'
import aboutbmd__titlebg from '../../assets/aboutbmd__titlebg.png'
import classic__titlebg from '../../assets/classic__titlebg.png'
import abouths__titlebg from '../../assets/abouths__titlebg.png'
import classroom__titlebg1 from '../../assets/classroom__titlebg1.png'
import classroom__titlebg2 from '../../assets/classroom__titlebg2.png'
import bee1 from '../../assets/bee1.png'
import bee2 from '../../assets/bee2.png'
import demo from '../../assets/demo.png'
import step1 from '../../assets/step1.png'
import step2 from '../../assets/step2.png'
import step3 from '../../assets/step3.png'
import chickenrice__bg from '../../assets/chickenrice__bg.png'
import chickenrice__content from '../../assets/chickenrice.png'
import fancy__titlebg from '../../assets/fancy__titlebg.png'
import blockbg from '../../assets/block.png'
import chocolate from '../../assets/chocolate.png'
import totop from '../../assets/totop.png'
import coriander from '../../assets/coriander.png'
import xianggu from '../../assets/xianggu.png'
import rice from '../../assets/rice.png'
import swiper_left from '../../assets/swiper_left.png'
import swiper_left1 from '../../assets/swiper_left1.png'
import swiper_right1 from '../../assets/swiper_right1.png'
import swiper_right from '../../assets/swiper_right.png'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import tomato from '../../assets/tomato.png'
import seefood from '../../assets/seefood.png'
import cassia from '../../assets/cassia.png'
import poster2 from '../../assets/poster2.png'
import pcLogo from '../../assets/pc-logo.png'
import pcWine from '../../assets/pc-wine.png'
import pcBannercurry from '../../assets/pc-bannercurry.png'
import classicpc1 from '../../assets/classic-pc1.png'
import classicpc2 from '../../assets/classic-pc2.png'
import classicpc3 from '../../assets/classic-pc3.png'
import classicpc4 from '../../assets/classic-pc4.png'
import classicpc5 from '../../assets/classic-pc5.png'
import classicpc6 from '../../assets/classic-pc6.png'
import classicpc7 from '../../assets/classic-pc7.png'
import classicpc8 from '../../assets/classic-pc8.png'
import fancypc1 from '../../assets/fancy-pc1.png'
import classroompc2 from '../../assets/classroom-pc2.png'
import classroompc1 from '../../assets/classroom-pc1.png'
import classroompc4 from '../../assets/classroom-pc4.png'
import classroompc6 from '../../assets/classroom-pc6.png'
import classroompc5 from '../../assets/classroom-pc5.png'
import classroompc7 from '../../assets/classroom-pc7.png'

const Home = () => {
  const [active1, setActive1] = useState(0)
  const [active2, setActive2] = useState(0)
  const [stepShow, setStepShow] = useState(true)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const [navIndex, setNavIndex] = useState(0)
  const [showDesc, setShowDesc] = useState(false)

  const _step1 = useRef(null)
  const _step2 = useRef(null)
  const _step3 = useRef(null)
  const block = useRef(null)
  const _tomato = useRef(null)
  const _seefood = useRef(null)
  const _fancypc1 = useRef(null)
  const _classic__classicpc4 = useRef(null)
  const _classic__tomato = useRef(null)
  const _classic__classicpc2 = useRef(null)
  const _classic__classicpc6 = useRef(null)
  const _classic__classicpc5 = useRef(null)
  const _classic__classicpc8 = useRef(null)
  const _classroom__classroompc6 = useRef(null)
  const _classroom__classroompc4 = useRef(null)
  const _aboutbmd__demo = useRef(null)

  const abouths__prev = useRef(null)
  const abouths__next = useRef(null)
  const fancy__prev1 = useRef(null)
  const fancy__prev2 = useRef(null)
  const fancy__next1 = useRef(null)
  const fancy__next2 = useRef(null)

  useEffect(() => {
    adapter()

    setTimeout(() => {
      setStepShow(false)
    }, 2500)

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

    // 观察目标元素
    observe(observer, _step1)
    observe(observer, _step2)
    observe(observer, _step3)
    observe(observer, block)
    observe(observer, _tomato)
    observe(observer, _seefood)
    observe(observer, _fancypc1)
    observe(observer, _classic__classicpc2)
    observe(observer, _classic__classicpc4)
    observe(observer, _classic__classicpc6)
    observe(observer, _classic__classicpc5)
    observe(observer, _classic__classicpc8)
    observe(observer, _classic__tomato)
    observe(observer, _classroom__classroompc6)
    observe(observer, _classroom__classroompc4)
    observe(observer, _aboutbmd__demo)

    // 监听窗口大小变化
    window.addEventListener('resize', adapter)

    return () => {
      unobserve(observer, _step1)
      unobserve(observer, _step2)
      unobserve(observer, _step3)
      unobserve(observer, block)
      unobserve(observer, _tomato)
      unobserve(observer, _seefood)
      unobserve(observer, _fancypc1)
      unobserve(observer, _classic__classicpc2)
      unobserve(observer, _classic__classicpc4)
      unobserve(observer, _classic__classicpc6)
      unobserve(observer, _classic__classicpc5)
      unobserve(observer, _classic__classicpc8)
      unobserve(observer, _classic__tomato)
      unobserve(observer, _classroom__classroompc6)
      unobserve(observer, _classroom__classroompc4)
      unobserve(observer, _aboutbmd__demo)

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
      case 1:
        setSlidesPerView(1)
        setShowDesc(false)
        break
      case 2:
        setSlidesPerView(2)
        setShowDesc(true)
        break
      case 3:
        setSlidesPerView(3)
        setShowDesc(true)
        break
    }
  }

  // 导航切换
  const switchNav = (i) => {
    setNavIndex(i)
  }

  return (
    <div className="Home">
      {/* loading */}
      <HsLoading show={stepShow}></HsLoading>
      {/* banner区域 */}
      <div className="banner">
        <img src={banner__bg} className="banner__bg"></img>
        <img src={curryrice} className="banner__curryrice"></img>
        <img src={logo} className="banner__logo"></img>
        <img src={line} className="banner__line"></img>
        <img src={fat} className="banner__fat"></img>
        <img src={spoon} className="banner__spoon"></img>
        <img src={zero} className="banner__zero"></img>
        <img src={currcybox} className="banner__currcybox"></img>
        {/* pc */}
        <img src={pcLogo} className="banner__pcLogo"></img>
        <img src={pcWine} className="banner__pcWine"></img>
        <img src={pcBannercurry} className="banner__pcBannercurry"></img>
        {/* 宣传语 */}
        <div className="banner__slogan">
          <div className="slogan__desc">全家都喜欢</div>
          <div className="slogan__desc">一盘超满足</div>
        </div>
        {/* 按钮区域 */}
        <div className="banner__guide">
          <a
            className={`guide__list ${navIndex === 0 && 'active'}`}
            href="#classic"
            onMouseMove={() => switchNav(0)}
          >
            <div className="list__title">经典菜谱</div>
            <div className="list__dsc">～新手必看～</div>
          </a>
          <a
            className={`guide__list ${navIndex === 1 && 'active'}`}
            href="#fancy"
            onMouseMove={() => switchNav(1)}
          >
            <div className="list__title">花式菜谱</div>
            <div className="list__dsc">～进阶必看～</div>
          </a>
          <a
            className={`guide__list ${navIndex === 2 && 'active'}`}
            href="#classroom"
            onMouseMove={() => switchNav(2)}
          >
            <div className="list__title">日式咖喱课堂</div>
            <div className="list__dsc">～知识轻松学～</div>
          </a>
          <a
            className={`guide__list ${navIndex === 3 && 'active'}`}
            href="#aboutbmd"
            onMouseMove={() => switchNav(3)}
          >
            <div className="list__title">关于百梦多</div>
            <div className="list__dsc">～品牌大揭秘～</div>
          </a>
          <a
            className={`guide__list ${navIndex === 4 && 'active'}`}
            href="#abouths"
            onMouseMove={() => switchNav(4)}
          >
            <div className="list__title">关于好侍</div>
            <div className="list__dsc">～活动全知晓～</div>
          </a>
        </div>
      </div>

      {/* 经典菜谱 */}
      <div className="classic" id="classic">
        <img src={classic__titlebg} className="classic__titlebg"></img>
        <div className="classic__title">经典菜谱</div>
        <div className="classic__desc">制作简单 无需其他调料</div>

        <img src={chocolate} className="classic__chocolate"></img>
        {/* pc */}
        <img src={classicpc1} className="classic__classicpc1"></img>

        <div className="classic__chickenrice">
          <img src={chickenrice__bg} className="chickenrice__bg"></img>
          <img src={bee1} className="classic__bee"></img>

          {/* pc */}
          <div ref={_classic__classicpc2} className="classic__classicpc2">
            <img src={classicpc2}></img>
          </div>
          <img src={classicpc3} className="classic__classicpc3"></img>

          <div ref={_classic__classicpc8} className="classic__classicpc8">
            <img src={classicpc8}></img>
          </div>

          <div ref={_classic__classicpc4} className="classic__classicpc4">
            <img src={classicpc4}></img>
          </div>
          <div ref={_classic__tomato} className="classic__tomato">
            <img src={tomato} />
          </div>

          <div ref={_classic__classicpc6} className="classic__classicpc6">
            <img src={classicpc6}></img>
            <div className="tips">
              <div>「十分钟料理」</div>
              <div>下班回家马上就能做好</div>
              <div>很方便，再也不用吃外卖了</div>
            </div>
          </div>

          <div ref={_classic__classicpc5} className="classic__classicpc5">
            <img src={classicpc5}></img>
            <img src={classicpc7} className="classic__classicpc7"></img>
            <div className="tips">
              <div>「家常食材就能做一顿美味料理」</div>
              <div>哪怕只有一菜一肉一锅</div>
              <div>都能轻松制作一顿美味大餐</div>
            </div>
          </div>

          <div className="chickenrice__desc">百梦多鸡肉咖喱饭</div>
          <div className="chickenrice__content">
            <HsVideo src={video1} poster={chickenrice__content}></HsVideo>
          </div>
        </div>
      </div>

      {/* 花式菜谱 */}
      <div className="fancy" id="fancy">
        <img src={fancy__titlebg} className="fancy__titlebg" />
        <div ref={_tomato} className="fancy__tomato">
          <img src={tomato} />
        </div>
        <div ref={_seefood} className="fancy__seefood">
          <img src={seefood} />
        </div>
        <div ref={_fancypc1} className="fancy__fancypc1">
          <img src={fancypc1} />
        </div>
        <div className="fancy__title">花式菜谱</div>
        <div className="fancy__desc">使用各类食挑战多样咖喱食谱</div>
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
        <div
          className="btn fancy__more"
          onClick={() => {
            jump(pageMap.recipepage)
          }}
        >
          <img src={btn__bg}></img>
          <img src={icon_right1} className="icon"></img>
          <div className="btn__desc ">更多百梦多菜谱</div>
        </div>
      </div>

      {/* 空区域 */}
      <img src={blockbg} className="block"></img>

      {/* 日式咖喱课堂 */}
      <div className="classroom" id="classroom">
        <img src={classroom__titlebg1} className="classroom__titlebg1" />
        <img src={classroom__titlebg2} className="classroom__titlebg2" />
        <div className="classroom__title">日式咖喱课堂</div>
        <img src={bee2} className="classroom__bee" />
        <img src={cassia} className="classroom__cassia" />
        <img src={coriander} className="classroom__coriander" />
        <img src={xianggu} className="classroom__xianggu" />
        {/* pc */}
        <img src={classroompc2} className="classroom__classroompc2" />
        <img src={classroompc1} className="classroom__classroompc1" />

        <div ref={_classroom__classroompc4} className="classroom__classroompc4">
          <img src={classroompc4} />
        </div>

        <div ref={_classroom__classroompc6} className="classroom__classroompc6">
          <img src={classroompc6} />
        </div>

        <img src={classroompc5} className="classroom__classroompc5" />
        <img src={classroompc7} className="classroom__classroompc7" />

        <div className="classroom__content" ref={block}>
          <div className="content__block1 content__block">
            <div className="content__tips">咖喱从日本明治时代初期到现在</div>
            <div className="content__tips">
              经过不断地改良，被越来越多的人接受
            </div>
            <div className="content__tips">
              成为了日本人民非常喜欢的食品之一
            </div>
          </div>
          <div className="content__block2 content__block">
            <div className="content__tips">为什么咖喱会成为</div>
            <div className="content__tips">大家不可或缺的国民食品呢?</div>
            <div className="content__tips">让我们来看看独属于咖喱的魅力吧</div>
          </div>
        </div>
        <div className="classroom__ricewrap">
          <img src={rice} className="classroom__rice" />
        </div>
        <div
          className="btn classroom__btn"
          onClick={() => {
            jump(pageMap.currypage)
          }}
        >
          <img src={btn__bg1}></img>
          <img src={icon_right} className="icon"></img>
          <div className="btn__desc ">成为咖喱达人吧</div>
        </div>
      </div>

      {/* 波浪动画 */}
      <div className="wave"></div>

      {/* 关于百梦多 */}
      <div className="aboutbmd" id="aboutbmd">
        <div className="aboutbmd1">
          <div className="aboutbmd1__container">
            <img src={aboutbmd__titlebg} className="aboutbmd__titlebg"></img>
            <div className="aboutbmd__title">关于百梦多</div>
            <div className="aboutbmd__advantage">
              口味老少皆宜大人小孩都喜欢
            </div>
            <div className="aboutbmd__advantage">
              满足全家各种需求轻松解决一餐所需
            </div>

            <div ref={_aboutbmd__demo} className="aboutbmd__demo">
              <img src={demo}></img>
            </div>
          </div>
        </div>
        <div className="aboutbmd2">
          <div className="aboutbmd2__container">
            <div ref={_step1} className="stepcontainer">
              <img src={step1} className="aboutbmd__step1"></img>
            </div>
            <div ref={_step2} className="stepcontainer">
              <img src={step2} className="aboutbmd__step2"></img>
            </div>
            <div ref={_step3} className="stepcontainer">
              <img src={step3} className="aboutbmd__step3"></img>
            </div>
            {/* 百梦多品牌宣传片 */}
            <div className="aboutbmd__brand">
              <div className="brand__title">百梦多品牌宣传片</div>
              <div className="brand__videocontainer">
                <HsVideo src={video2} poster={poster2}></HsVideo>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 关于好侍 */}
      <div className="abouths" id="abouths">
        <img src={abouths__titlebg} className="abouths__titlebg" />
        <img src={abouths__bg} className="abouths__bg"></img>
        <div className="abouths__title">关于好侍</div>
        {/* 轮播 */}
        <div className="abouths__swipercontainer">
          <HsSwiper
            slides={aboutMap}
            prevRef={abouths__prev}
            nextRef={abouths__next}
          ></HsSwiper>
          <img
            src={swiper_left}
            ref={abouths__prev}
            className="abouths__prev"
          ></img>
          <img
            src={swiper_right}
            ref={abouths__next}
            className="abouths__next"
          ></img>
          <div className="swiper__tips">点击上方轻松了解更多活动哦~</div>
        </div>
        <div
          className="btn abouths__backhome"
          onClick={() => {
            jump(pageMap.homepage)
          }}
        >
          <img src={btn__bg}></img>
          <div className="btn__desc ">进入官网首页</div>
        </div>
      </div>

      {/* 返回顶部 */}
      <div className="totop" onClick={backtotop}>
        <img src={totop} className="totop__icon"></img>
        <div>TOP</div>
      </div>
    </div>
  )
}

export default Home
