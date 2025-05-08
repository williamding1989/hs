import "./index.less";
import { useJump } from "../../hooks/index.js";
import { useEffect, useState } from "react";
import { getNewsDetail } from "../../request/index.js";
import { useParams } from "react-router-dom";
import news_title from "../../assets/news_title.png";
import clock from "../../assets/clock.png";
import { HsTag } from "../../components/index.jsx";

const Newsdetail = () => {
  const jump = useJump();
  const [detail, setDetail] = useState({});
  const { id } = useParams(); // 获取 URL 参数

  useEffect(() => {
    if (!id) return;

    getDetail(id);
  }, [id]);

  const getDetail = async (id) => {
    try {
      const data = await getNewsDetail(id);
      setDetail(data);
    } catch (error) {}
  };

  return (
    <div className="Newsdetail">
      <div className="Newsdetail__title">
        <img src={news_title} className="Newsdetail__title__img"></img>
      </div>
      <div className="Newsdetail__newstitle">
        <HsTag type={detail.type} className="Newsdetail__newstitle__tag" />
        <div className="Newsdetail__newstitle__content">{detail.title}</div>
      </div>
      <div className="Newsdetail__date">
        <img src={clock} className="Newsdetail__date__clock" />
        <div className="Newsdetail__date__content">{detail.date}</div>
      </div>
      <div
        className="Newsdetail__content"
        dangerouslySetInnerHTML={{ __html: detail.content }}
      ></div>
    </div>
  );
};

export default Newsdetail;
