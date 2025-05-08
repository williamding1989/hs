import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.less";
import { navMap } from "./config.js";
import { useJump, useI18n } from "../../hooks/index.js";
import fork from "../../assets/fork.png";
import banner from "../../assets/pc-banner2.jpg";
import { getCookList } from "../../request/index.js";

const Cookbook = () => {
  const [category_id, setCategory_id] = useState(1);
  const [total_page, setTotal_page] = useState(0);
  const [page, setPage] = useState(1);
  const [cookList, setCookList] = useState([]);
  const jump = useJump();

  const isDetailPage = window.location.pathname.includes("cookdetail");

  useEffect(() => {
    if (!isDetailPage) {
      getList();
    }
  }, [category_id, page]);

  const getList = async () => {
    try {
      const { list, total_page } = await getCookList({ category_id, page });
      setTotal_page(total_page ?? []);
      setCookList(list);
    } catch (error) {}
  };

  const switchNav = (id) => {
    setCategory_id(id);
  };

  return (
    <div className="cookbook">
      {/* 导航 */}
      <div className="cookbook__nav">
        <div className="cookbook__nav__container">
          {navMap.map((n, i) => {
            return (
              <div
                key={i}
                className={`cookbook__nav__container__list ${
                  n.category_id == category_id &&
                  "cookbook__nav__container__list-checked"
                }`}
                onClick={() => switchNav(n.category_id)}
              >
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
              {cookList.map((v, i) => {
                return (
                  <div
                    className="cookbook__goods__item"
                    key={i}
                    onClick={() => {
                      jump(`cookdetail/${v.id}`, true);
                    }}
                  >
                    <img
                      src={v.image}
                      className="cookbook__goods__item__img"
                    ></img>
                    <div className="cookbook__goods__item__title">{v.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookbook;
