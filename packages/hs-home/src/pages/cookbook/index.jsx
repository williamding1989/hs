import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.less";
import { navMap } from "./config.js";
import { useJump } from "../../hooks/index.js";
import fork from "../../assets/fork.png";
import { getCookList } from "../../request/index.js";
import { Pagination } from "antd";
import { useLocation } from "react-router-dom";

const Cookbook = () => {
  const [category_id, setCategory_id] = useState(1);
  const [total_page, setTotal_page] = useState(0);
  const [total_count, setTotal_count] = useState(0);
  const [page, setPage] = useState(1);
  const [cookList, setCookList] = useState([]);
  const jump = useJump();

  const isDetailPage = window.location.pathname.includes("cookdetail");

  const { search } = useLocation();
  // 从URL参数中获取导航类型
  const params = new URLSearchParams(search);
  const category = params.get("category");

  // 设置导航索引,如果没有参数默认为0
  useEffect(() => {
    switchNav(Number(category) || navMap[0].category_id);
  }, [category]);

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
                onClick={() => {
                  if (isDetailPage) {
                    jump(`/cookbook?category=${n.category_id}`);
                  }
                  switchNav(n.category_id);
                }}
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
                    <div className="cookbook__goods__item__img">
                      <img src={v.image}></img>
                    </div>

                    <div className="cookbook__goods__item__title">{v.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <Pagination
            className="cookbook__pagination"
            align="center"
            defaultCurrent={1}
            current={page} // 添加current属性来控制当前页码
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
