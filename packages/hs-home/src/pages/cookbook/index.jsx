import { Outlet } from "react-router-dom";
import "./index.less";
import { navMap } from "./config.js";
import { useJump, useI18n } from "../../hooks/index.js";
import fork from "../../assets/fork.png";
import banner from "../../assets/pc-banner2.jpg";

const Cookbook = () => {
  const jump = useJump();
  const isDetailPage = window.location.pathname.includes("cookdetail");

  return (
    <div className="cookbook">
      {/* 导航 */}
      <div className="cookbook__nav">
        <div className="cookbook__nav__container">
          {navMap.map((n, i) => {
            return (
              <div key={i} className="cookbook__nav__container__list">
                {n.title}
                <img src={n.bg}></img>
              </div>
            );
          })}
        </div>
      </div>
      {isDetailPage ? (
        <Outlet />
      ) : (
        <div className="cookbook__goods">
          <div className="cookbook__goods__title">
            <img src={fork} className="cookbook__goods__title__fork"></img>
            <div className="cookbook__goods__title__tips">
              <div className="cookbook__goods__title__tips__chinese">
                好侍菜谱
              </div>
              <div className="cookbook__goods__title__tips__english">
                House Cookbook
              </div>
            </div>
            <img src={fork} className="cookbook__goods__title__fork"></img>
          </div>
          <div className="cookbook__goods__list">
            <div className="cookbook__goods__list__container">
              <div
                className="cookbook__goods__item"
                onClick={() => {
                  jump("cookdetail/2", true);
                }}
              >
                <img src={banner} className="cookbook__goods__item__img"></img>
                <div className="cookbook__goods__item__title">
                  白梦多鸡肉咖喱饭
                </div>
              </div>
              <div className="cookbook__goods__item">
                <img src={banner} className="cookbook__goods__item__img"></img>
                <div className="cookbook__goods__item__title">
                  白梦多鸡肉咖喱饭
                </div>
              </div>
              <div className="cookbook__goods__item">
                <img src={banner} className="cookbook__goods__item__img"></img>
                <div className="cookbook__goods__item__title">
                  白梦多鸡肉咖喱饭
                </div>
              </div>
              <div className="cookbook__goods__item">
                <img src={banner} className="cookbook__goods__item__img"></img>
                <div className="cookbook__goods__item__title">
                  白梦多鸡肉咖喱饭
                </div>
              </div>
              <div className="cookbook__goods__item">
                <img src={banner} className="cookbook__goods__item__img"></img>
                <div className="cookbook__goods__item__title">
                  白梦多鸡肉咖喱饭
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookbook;
