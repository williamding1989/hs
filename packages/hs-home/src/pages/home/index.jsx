// 模块
import { useEffect, useRef, useState, useCallback } from "react";
import { HsSwiper, HsLoading, Totop } from "../../components/index.jsx";
import { newsOptions } from "./config.js";
import "./index.less";
import { device } from "../../utils/index.js";
import { useJump } from "../../hooks/index.js";
import { getHomeData } from "../../request/index.js";
import { parseUrl } from "../../utils/index.js";
import { useLocation } from "react-router-dom";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "swiper/css";
import "swiper/less/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// 资源
import swiper_right from "../../assets/swiper_right.png";
import swiper_left from "../../assets/swiper_left.png";
import classroom_title from "../../assets/classroom_title.png";
import classroom_tips from "../../assets/classroom_tips.png";
import book from "../../assets/book.png";
import btn__bg from "../../assets/btn__bg.png";
import icon_right1 from "../../assets/icon_right1.png";
import news_title from "../../assets/news_title.png";
import news_more from "../../assets/news_more.png";
import abouths_bg from "../../assets/abouths_bg.png";
import abouths_btn from "../../assets/abouths_btn.png";
import product_title from "../../assets/product_title.png";
import product1_left from "../../assets/product1_left.png";
import product1_right from "../../assets/product1_right.png";
import product2_left from "../../assets/product2_left.png";
import product2_right from "../../assets/product2_right.png";
import more from "../../assets/more.png";
import more1 from "../../assets/more1.png";
import hot_title from "../../assets/hot_title.png";
import fancy_title from "../../assets/fancy_title.png";
import fancy_btn from "../../assets/fancy_btn.png";
import swiper_left1 from "../../assets/swiper_left1.png";
import swiper_right1 from "../../assets/swiper_right1.png";
import hot_title1 from "../../assets/hot_title1.png";
import abouths_title from "../../assets/abouths_title.png";
import knowmore from "../../assets/knowmore.png";
import news_more1 from "../../assets/news_more1.png";

import classroom_mob1 from "../../assets/classroom_mob1.png";
import classroom_mob2 from "../../assets/classroom_mob2.png";

const Home = () => {
  const jump = useJump();
  const pathname = useLocation();
  const [active1, setActive1] = useState(0);
  const [showDesc, setShowDesc] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  // Banner数据
  const [cv, setCv] = useState([]);
  // 日式咖喱课堂数据
  const [classData, setClassData] = useState(null);
  // 人气菜谱数据
  const [cookbook, setCookbook] = useState([]);
  // 新闻数据
  const [newsData, setNewsData] = useState([]);
  // 花式菜谱数据
  const [fancyData, setFancyData] = useState([]);

  const mobilebanner__prev1 = useRef(null);
  const mobilebanner__next1 = useRef(null);
  const mobilebanner__prev2 = useRef(null);
  const mobilebanner__next2 = useRef(null);
  const _classroom__book = useRef(null);
  const _classroom__tips = useRef(null);
  const _product__list1 = useRef(null);
  const _product__list2 = useRef(null);
  const _abouths__left = useRef(null);
  const _abouths__right = useRef(null);
  const _classroom__mob1 = useRef(null);
  const _classroom__mob2 = useRef(null);

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnInit: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: device() == 1 ? "start" : "center",
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index) => emblaApi?.scrollTo(index);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    emblaApi.scrollTo(1, false);

    const timer = setTimeout(() => {
      if (autoplay.current && typeof autoplay.current.play === "function") {
        autoplay.current.play();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const { isPreview, type } = parseUrl(pathname.search);

    getData(!!isPreview, type);

    adapter();

    setTimeout(() => {}, 2500);

    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(entry.target.children).map((dom) => {
            dom.classList.add("show");
          });
        } else {
          Array.from(entry.target.children).map((dom) => {
            dom.classList.remove("show");
          });
        }
      });
    });

    observe(observer, _classroom__book);
    observe(observer, _classroom__tips);
    observe(observer, _product__list1);
    observe(observer, _product__list2);
    observe(observer, _abouths__left);
    observe(observer, _abouths__right);
    observe(observer, _classroom__mob1);
    observe(observer, _classroom__mob2);

    // 监听窗口大小变化
    window.addEventListener("resize", adapter);

    return () => {
      unobserve(observer, _classroom__book);
      unobserve(observer, _classroom__tips);
      unobserve(observer, _product__list1);
      unobserve(observer, _product__list2);
      unobserve(observer, _abouths__left);
      unobserve(observer, _abouths__right);
      unobserve(observer, _classroom__mob1);
      unobserve(observer, _classroom__mob2);
      window.removeEventListener("resize", adapter);
    };
  }, []);

  // 获取首页数据
  const getData = async (isPreview, type) => {
    try {
      const data = await getHomeData({ isPreview, type });
      console.log("data", data);

      setCv(format(data.cv.item));

      setClassData(data.class);
      setCookbook(data.cookbook.item);
      setNewsData(data.news.item);
      setFancyData(format(data.cookbook2.item));
    } catch (e) {
      console.log(e);
    }
  };

  const format = (data) => {
    return data.map((v) => {
      const { image, url, name } = v;
      return {
        url: image,
        desc: name,
        link: url,
      };
    });
  };

  // 观察
  const observe = (observer, target) => {
    if (target.current) observer.observe(target.current);
  };

  // 取消观察
  const unobserve = (observer, target) => {
    if (target.current) observer.unobserve(target.current);
  };

  // 适配器
  const adapter = () => {
    switch (device()) {
      // 移动
      case 1:
        setSlidesPerView(1);
        setShowDesc(false);
        break;
      // pad
      case 2:
        setSlidesPerView(2);
        setShowDesc(true);
        break;
      // pc
      case 3:
        setSlidesPerView(3);
        setShowDesc(true);
        break;
    }
  };

  // 计算新闻class
  const calcNewsClass = (type) => {
    switch (type) {
      // 公司
      case 2:
        type = "company";
        break;
      // 产品
      case 1:
        type = "productor";
        break;
      // 活动
      case 3:
        type = "activity";
        break;
    }
    return `news__type news__type-${type}`;
  };

  return (
    <div className="Home">
      {/* 轮播 */}
      <div className="banner">
        {cv.length > 0 && (
          <>
            <div
              className={`embla-wrapper ${
                device() == 1 ? "mobile" : "desktop"
              }`}
            >
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {cv.map((item) => (
                    <div
                      className={`embla__slide ${
                        device() == 1 ? "mobile" : "desktop"
                      }`}
                      key={item.id}
                      onClick={() => {
                        window.location.href = item.link;
                      }}
                    >
                      <img src={item.url} className="embla__img" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* 自定义左右按钮 */}
        <div className="embla__buttons">
          <img
            src={swiper_left}
            className="embla__btn left"
            onClick={scrollPrev}
          ></img>

          <img
            src={swiper_right}
            className="embla__btn right"
            onClick={scrollNext}
          ></img>
        </div>

        {/* 自定义分页器 */}
        <div className="embla__pagination">
          {scrollSnaps.map((_, index) => (
            <div
              key={index}
              className={`embla__dot ${
                index === selectedIndex ? "is-selected" : ""
              }`}
              onClick={() => scrollTo(index)}
            ></div>
          ))}
        </div>
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

        <div className="classroom__mob1" ref={_classroom__mob1}>
          <img src={classroom_mob1}></img>
        </div>

        <div className="classroom__mob2" ref={_classroom__mob2}>
          <img src={classroom_mob2}></img>
        </div>

        <div
          className="btn"
          onClick={() => {
            jump(classData.url);
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
            {cookbook.map((v, i) => {
              return (
                <div className="caseItem" key={i}>
                  <div className="caseItem__title">{v.name}</div>
                  <div className="caseItem__img">
                    <img src={v.image} />
                  </div>
                  <div className="caseItem__mobileTitle">{v.name}</div>
                  <img
                    src={more1}
                    className="caseItem__more"
                    onClick={() => {
                      jump(v.url);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 花式菜谱 */}
        <div className="fancy">
          <img src={fancy_title} className="fancy__title"></img>
          {/* pc */}
          <div className="fancy__showcase row-1">
            {fancyData.slice(0, 3).map((v, i) => {
              return (
                <div
                  className="fancy__showcase__item "
                  key={i}
                  onClick={() => jump(v.link)}
                >
                  <div className="fancy__showcase__item__img">
                    <img src={v.url} />
                  </div>
                  <div className="fancy__showcase__item__desc">{v.desc}</div>
                </div>
              );
            })}
          </div>
          {/* pc */}
          <div className="fancy__showcase row-2">
            {fancyData.slice(3, 7).map((v, i) => {
              return (
                <div
                  className="fancy__showcase__item "
                  key={i}
                  onClick={() => jump(v.link)}
                >
                  <div className="fancy__showcase__item__img">
                    <img src={v.url} />
                  </div>
                  <div className="fancy__showcase__item__desc">{v.desc}</div>
                </div>
              );
            })}
          </div>

          {/* mobile */}
          {fancyData.length > 0 && (
            <div className="fancy__mobileBanner mobileBanner1">
              <HsSwiper
                slides={fancyData.slice(0, 3)}
                prevRef={mobilebanner__prev1}
                nextRef={mobilebanner__next1}
                showDesc={true}
                autoplay
              ></HsSwiper>
              <img
                src={swiper_left1}
                ref={mobilebanner__prev1}
                className="mobilebanner__prev"
              ></img>
              <img
                src={swiper_right1}
                ref={mobilebanner__next1}
                className="mobilebanner__next"
              ></img>
            </div>
          )}

          {/* mobile */}
          {fancyData.length > 3 && (
            <div className="fancy__mobileBanner mobileBanner2">
              <HsSwiper
                slides={fancyData.slice(3, 7)}
                prevRef={mobilebanner__prev2}
                nextRef={mobilebanner__next2}
                showDesc={true}
                autoplay
              ></HsSwiper>
              <img
                src={swiper_left1}
                ref={mobilebanner__prev2}
                className="mobilebanner__prev"
              ></img>
              <img
                src={swiper_right1}
                ref={mobilebanner__next2}
                className="mobilebanner__next"
              ></img>
            </div>
          )}

          <div
            className="btn fancy__btn"
            onClick={() => jump("/cookbook", true)}
          >
            <img src={btn__bg} className="btn__bg"></img>
            <img src={icon_right1} className="icon"></img>
            <div className="btn__desc ">查看所有菜谱</div>
          </div>
        </div>
      </div>

      {/* 产品介绍 */}
      <div className="product">
        <img src={product_title} className="product__title"></img>
        <div className="product__container">
          <div className="product__container__list list1" ref={_product__list1}>
            <img src={product1_left} className="list__left"></img>
            <img src={product1_right} className="list__right"></img>
            <img
              src={more}
              className="list__more"
              onClick={() => jump("/productor?type=0", true)}
            ></img>
          </div>
          <div className="product__container__list list2" ref={_product__list2}>
            <img src={product2_right} className="list__right"></img>
            <img src={product2_left} className="list__left"></img>
            <img
              src={more}
              className="list__more"
              onClick={() => jump("/productor?type=1", true)}
            ></img>
          </div>
        </div>
        <img
          src={more}
          className="more"
          onClick={() => jump("/productor?type=0", true)}
        ></img>
      </div>

      {/* 波浪 */}
      {/* <div className="wave1"></div> */}

      {/* 关于好侍 */}
      <div className="abouths">
        <img src={abouths_title} className="abouths__title"></img>
        <div className="abouths__container">
          <div className="abouths__left" ref={_abouths__left}>
            <img
              src={abouths_btn}
              className="abouths__btn"
              onClick={() =>
                jump("https://www.housefoods.com.cn/index/company/index.html")
              }
            ></img>
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
        </div>

        <img
          src={knowmore}
          className="abouths__knowmore"
          onClick={() =>
            jump("https://www.housefoods.com.cn/index/company/index.html")
          }
        ></img>
      </div>

      {/* 新闻中心 */}
      <div className="news">
        <img src={news_title} className="news__title"></img>
        <div className="news__container">
          {newsData.map((v, i) => {
            return (
              <div className={`news__list ${v.top == 1 && "topping"}`} key={i}>
                <div className={calcNewsClass(v.type)}>
                  {newsOptions[v.type]}
                </div>
                <div className="news__date">{v.date}</div>
                <div
                  className="news__desc"
                  onClick={() => {
                    jump(`/newsdetail/${v.news_id}`, true);
                  }}
                >
                  {v.title}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className=" btn news__more"
          onClick={() => jump("/newslist", true)}
        >
          <img src={btn__bg} className="btn__bg"></img>
          <img src={icon_right1} className="icon"></img>
          <div className="btn__desc ">查看更多</div>
        </div>
        <img
          src={news_more1}
          className="news__more1"
          onClick={() => jump("/newslist", true)}
        ></img>
      </div>
      {/* 返回顶部 */}
      <Totop></Totop>
    </div>
  );
};

export default Home;
