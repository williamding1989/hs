import React, { useEffect, useState } from "react";
import "./index.less";
// import { navMap } from "./config.js";
import { device } from "../../utils/index.js";
import { useJump } from "../../hooks/index.js";
import { getProList } from "../../request/index.js";
import pro_nav1 from "../../assets/pro_nav1.png";
import pro_nav2 from "../../assets/pro_nav2.png";
import pro_nav1Active from "../../assets/pro_nav1-active.png";
import pro_nav2Active from "../../assets/pro_nav2-active.png";

const Productor = () => {
  const [navdata, setNavdata] = useState([]);
  const [navIndex, setNavIndex] = useState(0);
  const [secondNavindex, setSecondNavindex] = useState(0);
  const jump = useJump();

  useEffect(() => {
    getList();
  }, []);

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

    setNavdata(nav);
  };

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
        {navdata[navIndex].secondNav.map((n, i) => {
          return <div></div>;
        })}
      </div>
    );
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
      <div className="productor__secondnav">
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
      {/* 二级导航 - mob */}
      {renderSecondNavMob()}
      {/* 商品区域 */}
      <div className="productor__container">
        {navdata[navIndex].secondNav.map((v, i) => {
          const id = `section-${i}`;
          return (
            <div className="productor__list" key={i} id={id}>
              <div className="productor__list__title">{v.title}</div>
              <div className="productor__list__goods">
                {v.goods.map((g, index) => {
                  return (
                    <div key={index} className="productor__list__goods__item">
                      <div className="productor__list__goods__item__img">
                        <img src={g.img}></img>
                      </div>

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
                      <div
                        className="productor__list__goods__item__detailbtn"
                        onClick={() => jump(`/prodetail/${g.id}`, true)}
                      >
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
