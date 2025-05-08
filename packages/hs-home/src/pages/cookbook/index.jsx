import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.less";
import { navMap } from "./config.js";
import { useJump } from "../../hooks/index.js";
import fork from "../../assets/fork.png";
import { getCookList } from "../../request/index.js";
import { Pagination } from "antd";

const Cookbook = () => {
  const [category_id, setCategory_id] = useState(1);
  const [total_page, setTotal_page] = useState(0);
  const [total_count, setTotal_count] = useState(0);
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
      const { list, total_page, total_count } = await getCookList({
        category_id,
        page,
      });
      setTotal_page(total_page ?? []);
      setCookList(list);
      setTotal_count(total_count);
    } catch (error) {}
  };

  const switchNav = (id) => {
    setCategory_id(id);
    setPage(1);
  };

  const changePagination = (page) => {
    setPage(page);
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
          <Pagination
            align="center"
            defaultCurrent={1}
            total={total_count}
            pageSize={20}
            onChange={(page) => {
              changePagination(page);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Cookbook;
