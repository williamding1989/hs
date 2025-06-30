import React, { useEffect, useState, useRef } from "react";
import "./index.less";
import { device } from "../../utils/index.js";
import { useJump } from "../../hooks/index.js";
import { getProList } from "../../request/index.js";
import pro_nav1 from "../../assets/pro_nav1.png";
import pro_nav2 from "../../assets/pro_nav2.png";
import pro_nav1Active from "../../assets/pro_nav1-active.png";
import pro_nav2Active from "../../assets/pro_nav2-active.png";
import { useLocation } from "react-router-dom";

const Productor = () => {
  const [navdata, setNavdata] = useState([]);
  const [navIndex, setNavIndex] = useState(0);
  const [secondNavindex, setSecondNavindex] = useState(0);
  const navRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const jump = useJump();
  const { search } = useLocation();

  // 从URL参数中获取导航类型
  const params = new URLSearchParams(search);
  const type = params.get("type");

  // 设置导航索引,如果没有参数默认为0
  useEffect(() => {
    setNavIndex(Number(type) || 0);
  }, [type]);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    // 只在移动端且数据加载完成后设置监听
    if (device() !== 1 || !navdata.length) return;

    let lastScrollY = window.scrollY;
    let ticking = false;
    const navElement = navRef.current;
    const { top: initialTop } = navElement.getBoundingClientRect();
    setPlaceholderHeight(navRef.current.offsetHeight);
    const handleScroll = () => {
      if (!navElement) return;

      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { top } = navElement.getBoundingClientRect();

          // 向下滚动且元素顶部到达视口顶部时固定
          if (scrollDirection === "down" && top <= 0) {
            setIsSticky(true);
            setPlaceholderHeight(navRef.current.offsetHeight);
          }
          // 向上滚动且超过阈值时取消固定
          else if (scrollDirection === "up" && currentScrollY < initialTop) {
            setIsSticky(false);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navdata]); // 依赖 navdata 的变化

  const getList = async () => {
    try {
      const data = await getProList();
      format(data);
    } catch (error) {}
  };

  const format = ({ category, list }) => {
    let nav;
    nav = list.map((v, i) => {
      return {
        title: v.tab_name,
        tab_id: v.tab_id,
        img: v.tab_id == 1 ? pro_nav1 : pro_nav2,
        imgActive: v.tab_id == 1 ? pro_nav1Active : pro_nav2Active,
        secondNav: category
          .filter((x) => x.tab_id == v.tab_id)
          .map((x) => {
            return {
              title: x.name,
              category_id: x.id,
              goods: "",
            };
          }),
      };
    });

    nav.forEach((v) => {
      const filteredList = list.filter((x) => x.tab_id === v.tab_id);
      const flatList = filteredList.flatMap((item) => item.list || []);
      v.secondNav.forEach((val) => {
        const filterCategory = flatList.filter(
          (x) => x.category_id == val.category_id
        );
        let goods = filterCategory.flatMap((i) => i.products);

        goods = goods.map((x) => {
          return {
            desc: x.keyword,
            id: x.id,
            img: x.image,
            sku: [],
            title: x.name,
          };
        });
        val.goods = goods;
      });
    });

    console.log(nav);

    setNavdata(nav);
  };

  const switchNav = (index) => {
    // 设置一级菜单
    setNavIndex(index);
    // 设置二级菜单
    setSecondNavindex(0);
  };

  if (!navdata.length) return;

  return (
    <div className="productor">
      {/* 一级导航 */}
      <div className="productor__nav">
        {navdata.map((n, i) => {
          return (
            <div
              key={i}
              className={`productor__nav__item ${
                navIndex === i ? "productor__nav__item-active" : ""
              }`}
              onClick={() => switchNav(i)}
            >
              <img src={i == navIndex ? n.imgActive : n.img} />
            </div>
          );
        })}
      </div>
      {/* 二级导航 - pc */}
      <div
        className={`productor__secondnav secondnav-pc tab-${navdata[navIndex].tab_id}`}
      >
        {navdata[navIndex].secondNav.map((n, i) => {
          return (
            <a
              key={i}
              className={`productor__secondnav__item ${
                secondNavindex === i ? "productor__secondnav__item-active" : ""
              }`}
              onClick={() => {
                setSecondNavindex(i);
              }}
              href={`#section-${i}`}
            >
              {n.title}
            </a>
          );
        })}
      </div>

      {/* 二级导航 - mobile */}
      {/* 动态高度的占位元素 */}
      {isSticky && (
        <div
          style={{
            height: `${placeholderHeight}px`,
            width: "100%",
          }}
        />
      )}
      <div className="productor__nav-container-bottom">
        <div
          className={`productor__nav-container  ${isSticky ? "fixed-nav" : ""}`}
          ref={navRef}
        >
          {/* 第一个div包含前3个元素 */}
          <div
            className={`productor__secondnav secondnav-mobile tab-${navdata[navIndex].tab_id} `}
          >
            {navdata[navIndex].secondNav.slice(0, 3).map((n, i) => (
              <a
                key={i}
                className={`productor__secondnav__item ${
                  secondNavindex === i
                    ? "productor__secondnav__item-active"
                    : ""
                }`}
                onClick={() => setSecondNavindex(i)}
                href={`#section-${i}`}
              >
                {n.title}
              </a>
            ))}
          </div>

          {/* 第二个div包含后2个元素 */}
          {navdata[navIndex].secondNav.length > 3 && (
            <div
              className={`productor__secondnav secondnav-mobile tab-${navdata[navIndex].tab_id} `}
            >
              {navdata[navIndex].secondNav.slice(3).map((n, i) => (
                <a
                  key={i + 3} // 注意key要从3开始
                  className={`mobile-item-${i + 3} productor__secondnav__item ${
                    secondNavindex === i + 3
                      ? "productor__secondnav__item-active"
                      : ""
                  }`}
                  onClick={() => setSecondNavindex(i + 3)}
                  href={`#section-${i + 3}`}
                >
                  {n.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 商品区域 */}
      <div className="productor__container">
        {navdata[navIndex].secondNav.map((v, i) => {
          const id = `section-${i}`;
          return (
            v.goods.length > 0 && (
              <div
                className="productor__list"
                key={i}
                id={id}
                style={{ "scroll-margin-top": `${placeholderHeight}px` }}
              >
                <div className="productor__list__title">{v.title}</div>
                <div className="productor__list__goods">
                  {v.goods.map((g, index) => {
                    return (
                      <div
                        key={index}
                        className="productor__list__goods__item"
                        onClick={() => {
                          if (navIndex == 1) {
                            return jump("/business", true);
                          }
                          jump(`/prodetail/${g.id}`, true);
                        }}
                      >
                        <div className="productor__list__goods__item__img">
                          <img src={g.img}></img>
                        </div>

                        <div className="productor__list__goods__item__title">
                          {g.title}
                        </div>
                        <div className="productor__list__goods__item__desc">
                          {g.desc}
                        </div>
                        {/* {g.sku.map((s, num) => {
                          return (
                            <div
                              key={num}
                              className="productor__list__goods__item__sku"
                            >
                              <div className="productor__list__goods__item__sku__title">
                                {s.title}
                              </div>
                              <div className="productor__list__goods__item__sku__dot"></div>
                              <div className="productor__list__goods__item__sku__content">
                                {s.content}
                              </div>
                            </div>
                          );
                        })} */}
                        <div className="productor__list__goods__item__detailbtn">
                          商品详情
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          );
        })}
      </div>
      {/* 返回首页 */}
      <div className="backhome" onClick={() => jump("/", true)}>
        返回首页
      </div>
    </div>
  );
};

export default Productor;
