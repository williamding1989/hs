import "./index.less";
import news_title from "../../assets/news_title.png";
import { getNewsList } from "../../request/index.js";
import { useEffect, useState } from "react";
import { useJump } from "../../hooks/index.js";
import { HsTag } from "../../components/index.jsx";

const Newslist = () => {
  const jump = useJump();
  const [news, setNews] = useState([]);
  const [newsMap, setNewsMap] = useState({});
  const [active, setActive] = useState(0);
  let _years = [];

  useEffect(() => {
    getData();
  }, []);

  const switchNav = (year, i) => {
    setActive(i);
    setNews(newsMap[year] ?? []);
  };

  // 生成最近7年的年份列表
  const generateYearList = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 7; i++) {
      years.push(currentYear - i + "年");
    }

    return years;
  };

  // 渲染导航
  const renderNav = () => {
    const years = generateYearList();

    _years = years;

    return (
      <div className="Newslist__nav">
        {years.map((year, i) => (
          <div
            key={i}
            className={`Newslist__nav__item ${active == i ? "active" : ""}`}
            onClick={() => switchNav(year, i)}
          >
            {year}
          </div>
        ))}
      </div>
    );
  };

  const getData = async () => {
    try {
      const data = await getNewsList();
      const newsMap = {};
      const news = [];
      data.map((v, i) => {
        news.push(...v.list);
        newsMap[v.year] = v.list;
      });

      setNews(newsMap[_years[active]] ?? []);
      setNewsMap(newsMap);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="Newslist">
      {/* 标题 */}
      <div className="Newslist__title">
        <img src={news_title} className="Newslist__title__img" />
      </div>

      {/* 导航 */}
      {renderNav()}

      {/* 内容 */}
      <div className="Newslist__content">
        {news.map((v, i) => {
          return (
            <div
              className="Newslist__content__item"
              key={i}
              onClick={() => jump(`./newsdetail/${v.news_id}`)}
            >
              <HsTag type={v.type} className="Newslist__content__item__tag" />
              <div className="Newslist__content__item__news">{v.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Newslist;
