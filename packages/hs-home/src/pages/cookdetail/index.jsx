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

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/less/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const CookDetail = () => {
  const jump = useJump();
  const pathname = useLocation();
  const [detail, setDetail] = useState({});
  const [recommend, setRecommend] = useState([]);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const { id } = useParams(); // 获取 URL 参数
  const swiper_leftRef = useRef(null);
  const swiper_rightRef = useRef(null);

  useEffect(() => {
    if (!id) return;

    const { isPreview } = parseUrl(pathname.search);

    getDetail(id, !!isPreview);
  }, [id]);

  const getDetail = async (id, isPreview) => {
    try {
      const data = await getCookDetail({ id, isPreview });

      localStorage.setItem("cookdetail", data.name);
      setDetail(data);
      setRecommend(format(data.recommend));
    } catch (error) {}
  };

  const format = (data) => {
    return data.map((v) => {
      return {
        id: v.id,
        url: v.image,
        desc: v.name,
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
        <div className="cookDetail__container__video">
          {detail.video ? (
            <HsVideo
              src={detail.video}
              poster={detail.video_cover}
              playbtn={play_1}
            ></HsVideo>
          ) : (
            <img
              className="cookDetail__container__video__img"
              src={detail.content_cover}
            ></img>
          )}
        </div>

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
                      <div className="cookDetail__container__way__method__list__item__img">
                        <img src={v.image}></img>
                      </div>
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
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"} // 改为auto可以更好地控制显示数量
              initialSlide={1} // 默认从第二个开始（如果数组长度允许）
              coverflowEffect={{
                rotate: 0, // 减少旋转角度
                stretch: 0, // 减少拉伸
                depth: 100, // 调整深度控制覆盖程度
                modifier: 2, // 增加修饰器强度
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Navigation]}
              className="mySwiper"
              onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
              navigation={{
                nextEl: ".swiper_right",
                prevEl: ".swiper_left",
              }}
            >
              {recommend.map((v, i) => {
                return (
                  <SwiperSlide
                    key={i}
                    onClick={() => {
                      jump(v.id);
                    }}
                  >
                    <img src={v.url} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <img
              src={swiper_left}
              ref={swiper_leftRef}
              className="swiper_left"
            ></img>
            <img
              src={swiper_right}
              ref={swiper_rightRef}
              className="swiper_right"
            ></img>
            <div className="cookDetail__container__recommand__banner__desc">
              {recommend[swiperIndex]?.desc}
            </div>
          </div>
        </div>

        {/* 返回首页 */}
        <div className="backhome" onClick={() => jump("/", true)}>
          返回首页
        </div>
      </div>
    </div>
  );
};
export default CookDetail;
