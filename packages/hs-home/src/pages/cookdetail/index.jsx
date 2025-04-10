import { useEffect, useRef, useState } from "react";
import "./index.less";
import { HsVideo, HsSwiper } from "../../components";
import video1 from "../../assets/video2.mp4";
import chickenrice__content from "../../assets/mob-banner1.jpg";
import { device } from "../../utils/index.js";
import swiper_right from "../../assets/arr_right.png";
import swiper_left from "../../assets/arr_left.png";
import play_1 from "../../assets/play_1.png";

const CookDetail = () => {
  const banner__prev = useRef(null);
  const banner__next = useRef(null);
  const cv = [
    {
      url: "https://www.housefoods.com.cn/storage//home/assets/img/cms/files/20241231/b51e6bf4b6db61b129fbeaba945e8248.jpg",
      link: "https://www.housefoods.com.cn/index.php/index/Product/detail.html?id=6069",
      desc: "20周年",
    },
    {
      url: "https://www.housefoods.com.cn/storage//home/assets/img/cms/files/20241231/b51e6bf4b6db61b129fbeaba945e8248.jpg",
      link: "https://www.housefoods.com.cn/index.php/index/Product/detail.html?id=6069",
      desc: "咖王咖喱",
    },
  ];
  return (
    <div className="cookDetail">
      <div className="cookDetail__container">
        {/* 标题 */}
        <div className="cookDetail__container__title">
          <div className="cookDetail__container__title__tips1">
            百梦多鸡肉咖喱饭
          </div>
          <div className="cookDetail__container__title__tips2">
            ～口感柔和，美味醇香，色泽金黄～
          </div>
        </div>
        {/* 视频 */}
        <HsVideo
          src={video1}
          poster={chickenrice__content}
          playbtn={play_1}
        ></HsVideo>
        {/* 用料 && 做法 */}
        <div className="cookDetail__container__way">
          {/* 用料 */}
          <div className="cookDetail__container__way__material">
            <div className="cookDetail__container__titlegroup">用料</div>
            <div className="cookDetail__container__way__material__list">
              <div className="cookDetail__container__way__material__list__item">
                <div className="cookDetail__container__way__material__list__item__title">
                  好侍百梦多咖喱
                </div>
                <div className="cookDetail__container__way__material__list__item__content">
                  1盒
                </div>
              </div>
              <div className="cookDetail__container__way__material__list__item">
                <div className="cookDetail__container__way__material__list__item__title">
                  鸡肉或其他肉
                </div>
                <div className="cookDetail__container__way__material__list__item__content">
                  2调羹（30ml）
                </div>
              </div>
            </div>
          </div>
          {/* 做法 */}
          <div className="cookDetail__container__way__method">
            <div className="cookDetail__container__titlegroup">做法</div>
            <div className="cookDetail__container__way__method__list">
              <div className="cookDetail__container__way__method__list__item">
                <div className="cookDetail__container__way__method__list__item__title">
                  1
                </div>
                <div className="cookDetail__container__way__method__list__item__content">
                  倒入油烧热，再将切好的洋葱、肉类、胡萝卜、土豆顺次下锅翻炒。
                </div>
              </div>
              <div className="cookDetail__container__way__method__list__item">
                <div className="cookDetail__container__way__method__list__item__title">
                  2
                </div>
                <div className="cookDetail__container__way__method__list__item__content">
                  加水，刚好淹没食材。炖煮至食材熟软。煮熟后关火。
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 推荐菜谱 */}
        <div className="cookDetail__container__recommand">
          <div className="cookDetail__container__titlegroup">推荐菜谱</div>
          <div className="cookDetail__container__recommand__banner">
            <HsSwiper
              slides={cv}
              prevRef={banner__prev}
              nextRef={banner__next}
              pagination={device() == 1 ? true : false}
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
