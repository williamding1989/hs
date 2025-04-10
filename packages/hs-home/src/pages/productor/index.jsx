import React, { useEffect } from "react";
import "./index.less";
import { navMap } from "./config.js";
import { device } from "../../utils/index.js";
import { useJump } from "../../hooks/index.js";

const Productor = () => {
  const [navIndex, setNavIndex] = React.useState(0);
  const [secondNavindex, setSecondNavindex] = React.useState(0);
  const jump = useJump();

  useEffect(() => {}, []);

  const switchNav = (index) => {
    // 设置一级菜单
    setNavIndex(index);
    // 设置二级菜单
    setSecondNavindex(0);
  };

  const renderSecondNavMob = () => {
    if (device() !== 1) return null;
    return (
      <div>
        {navMap[navIndex].secondNav.map((n, i) => {
          return <div></div>;
        })}
      </div>
    );
  };

  return (
    <div className="productor">
      {/* 一级导航 */}
      <div className="productor__nav">
        {navMap.map((n, i) => {
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
      <div className="productor__secondnav">
        {navMap[navIndex].secondNav.map((n, i) => {
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
      {/* 二级导航 - mob */}
      {renderSecondNavMob()}
      {/* 商品区域 */}
      <div className="productor__container">
        {navMap[navIndex].secondNav.map((v, i) => {
          const id = `section-${i}`;
          return (
            <div className="productor__list" key={i} id={id}>
              <div className="productor__list__title">{v.title}</div>
              <div className="productor__list__goods">
                {v.goods.map((g, index) => {
                  return (
                    <div key={index} className="productor__list__goods__item">
                      <img
                        src={g.img}
                        className="productor__list__goods__item__img"
                      ></img>
                      <div className="productor__list__goods__item__title">
                        {g.title}
                      </div>
                      <div className="productor__list__goods__item__desc">
                        {g.desc}
                      </div>
                      {g.sku.map((s, num) => {
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
                      })}
                      <div className="productor__list__goods__item__detailbtn">
                        商品详情
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
