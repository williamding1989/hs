import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.less";
import { HsVideo, HsSwiper } from "../../components";
import { device } from "../../utils/index.js";
import swiper_right from "../../assets/arr_right.png";
import swiper_left from "../../assets/arr_left.png";
import play_1 from "../../assets/play_1.png";
import { getCookDetail } from "../../request/index.js";
import { useJump } from "../../hooks/index.js";
import { parseUrl } from "../../utils/index.js";
import { useLocation } from "react-router-dom";

const CookDetail = () => {
  const jump = useJump();
  const pathname = useLocation();
  const [detail, setDetail] = useState({});
  const [recommend, setRecommend] = useState([]);
  const { id } = useParams(); // 获取 URL 参数
  useEffect(() => {
    if (!id) return;

    const { isPreview } = parseUrl(pathname.search);

    getDetail(id, !!isPreview);
  }, [id]);

  const getDetail = async (id, isPreview) => {
    try {
      const data = await getCookDetail({ id, isPreview });

      setDetail(data);
      setRecommend(format(data.recommend));
    } catch (error) {}
  };

  const format = (data) => {
    return data.map((v) => {
      return {
        id: v.id,
        url: v.image,
        desc: v.title,
      };
    });
  };

  const banner__prev = useRef(null);
  const banner__next = useRef(null);

  if (!detail.id) return;

  return (
    <div className="cookDetail">
      <div className="cookDetail__container">
        {/* 标题 */}
        <div className="cookDetail__container__title">
          <div className="cookDetail__container__title__tips1">
            {detail.name}
          </div>
          <div className="cookDetail__container__title__tips2">
            {detail.title}
          </div>
        </div>
        {/* 视频 */}
        <HsVideo
          src={detail.video}
          poster={detail.video_cover}
          playbtn={play_1}
        ></HsVideo>

        {/* 用料 && 做法 */}
        <div className="cookDetail__container__way">
          {/* 用料 */}
          <div className="cookDetail__container__way__material">
            <div className="cookDetail__container__titlegroup">用料</div>
            <div className="cookDetail__container__way__material__list">
              {detail?.ingredient.map((v, i) => {
                return (
                  <div
                    className="cookDetail__container__way__material__list__item"
                    key={i}
                  >
                    <div className="cookDetail__container__way__material__list__item__title">
                      {v.name}
                    </div>
                    <div className="cookDetail__container__way__material__list__item__content">
                      {v.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 做法 */}
          <div className="cookDetail__container__way__method">
            <div className="cookDetail__container__titlegroup">做法</div>
            <div className="cookDetail__container__way__method__list">
              {detail?.method.map((v, i) => {
                return (
                  <div
                    className="cookDetail__container__way__method__list__item"
                    key={i}
                  >
                    <div className="cookDetail__container__way__method__list__item__title">
                      {i + 1}
                    </div>
                    <div className="cookDetail__container__way__method__list__item__content">
                      {v.content}
                    </div>
                    {v.image && (
                      <img
                        src={v.image}
                        className="cookDetail__container__way__method__list__item__img"
                      ></img>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* 推荐菜谱 */}
        <div className="cookDetail__container__recommand">
          <div className="cookDetail__container__titlegroup">推荐菜谱</div>
          <div className="cookDetail__container__recommand__banner">
            <HsSwiper
              slides={recommend}
              prevRef={banner__prev}
              nextRef={banner__next}
              pagination={device() == 1 ? true : false}
              clickEvent={(item) => {
                jump(`/cookbook/cookdetail/${item.id}`);
              }}
            ></HsSwiper>
            <img
              src={swiper_left}
              ref={banner__prev}
              className="banner__prev"
            ></img>
            <img
              src={swiper_right}
              ref={banner__next}
              className="banner__next"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CookDetail;
