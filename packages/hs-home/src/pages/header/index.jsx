import { useEffect, useRef, useState } from "react";
import { useJump } from "../../hooks/index.js";
import { navMap } from "./config.js";

import "./index.less";
import logo from "../../assets/logo.png";
import mob_navdrop from "../../assets/mob_nav-drop.png";
import mob_nav from "../../assets/mob_nav.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon_right1 from "../../assets/icon_right1.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const jump = useJump();
  const [mobnavshow, setMobnavshow] = useState(false);
  const [navData, setNavData] = useState(navMap);
  const [active, setActive] = useState(0);

  const pathname = useLocation().pathname;

  useEffect(() => {
    setActive(
      navMap.findIndex((n) => {
        return n.link == pathname;
      })
    );
  }, [pathname]);

  // mob导航切换
  const mobnavClick = (n) => {
    // 没子菜单，直接跳转
    if (!n.sub) {
      return jump(n.link);
    }

    // clone
    const _navData = JSON.parse(JSON.stringify(navData));

    // Set
    setNavData(toogleExpand(n.id, _navData));
  };

  // 切换状态
  const toogleExpand = (id, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i].expand = !data[i].expand;
        break;
      }
      data[i].sub && toogleExpand(id, data[i].sub);
    }

    return data;
  };

  // 移动端导航切换
  const togglemobnav = () => {
    setMobnavshow(!mobnavshow);
  };

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
                  mobnavClick(n);
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
          );
        })}
      </div>
    );
  };

  return (
    <div className="header">
      <img
        src={logo}
        className="header__logo"
        onClick={() => {
          jump("/", true);
        }}
      ></img>
      <div className="header__nav">
        {navMap.map((n, i) => {
          return (
            <div
              className={`header__nav__list ${active == i && "active"}`}
              onClick={() => {
                setActive(i);
                jump(n.link, !n.isExternal);
              }}
              key={i}
            >
              {/* 内容 */}
              <div className={`header__nav__list__content `}>{n.title}</div>
            </div>
          );
        })}
      </div>

      {/* 移动端导航 */}
      <img
        src={mobnavshow ? mob_navdrop : mob_nav}
        className="mob__nav__btn"
        onClick={togglemobnav}
      ></img>

      <div className={mobnavshow ? "mob__nav mob__nav-show" : "mob__nav"}>
        {renderMobNav(navData, 1, true)}
      </div>
    </div>
  );
};

export default Header;
