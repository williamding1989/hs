import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/less/navigation'
import { useEffect, useRef } from 'react'
import './index.less'

/**
 * 轮播组件 https://www.npmjs.com/package/swiper
 * @param {Array}  slides 轮播数据  { url ,desc ,link }
 * @param {ReactRef} prevRef 前箭头
 * @param {ReactRef} nextRef 后箭头
 * @param {Function} onSlideChange 滑动回调
 *
 */
const HsSwiper = ({
  slides,
  prevRef,
  nextRef,
  onSlideChange,
  showDesc = false,
  ...props
}) => {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      prevRef.current &&
      nextRef.current
    ) {
      const swiper = swiperRef.current.swiper

      // 绑定导航按钮
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current

      // 重新初始化导航模块
      swiper.navigation.destroy() // 销毁旧的导航模块
      swiper.navigation.init() // 重新初始化导航模块
      swiper.navigation.update() // 更新导航按钮状态

      // 更新 Swiper
      swiper.update()
    }
  }, [prevRef, nextRef])

  const jump = (link) => {
    if (!link) return
    window.location.href = link
  }

  return (
    <>
      {/* 轮播实体  */}
      <Swiper
        className="HsSwiper"
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        onSlideChange={(swiper) => {
          onSlideChange && onSlideChange(swiper.realIndex)
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false, // 用户交互后不禁用自动播放
        }}
        {...props}
      >
        {slides.map((item, i) => {
          return (
            <SwiperSlide
              className="slideItem"
              key={i}
              onClick={() => jump(item.link)}
            >
              <div className="slideContainer">
                <img src={item.url} loading="lazy"></img>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
              {showDesc && <div className="slideDesc">{item.desc}</div>}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default HsSwiper
