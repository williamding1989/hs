import "./index.less";
import business_banner from "../../assets/business_banner.png";
import business_info_img from "../../assets/business_info_img.png";
import business_info_img_mobile from "../../assets/business_info_img_mobile.png";

import chief from "../../assets/chief.png";
import list11 from "../../assets/list1-1.png";
import list12 from "../../assets/list1-2.png";
import list13 from "../../assets/list1-3.png";
import list21 from "../../assets/list2-1.png";
import list22 from "../../assets/list2-2.png";
import list23 from "../../assets/list2-3.png";
import list31 from "../../assets/list3-1.png";
import list32 from "../../assets/list3-2.png";
import list33 from "../../assets/list3-3.png";
import list34 from "../../assets/list3-4.png";
import { useJump } from "../../hooks/index.js";

import business_contact_bg from "../../assets/business_contact_bg.png";

import { channelMap } from "./config.js";

const Business = () => {
  const jump = useJump();

  return (
    <div className="business">
      {/* banner */}
      <img className="business__banner" src={business_banner} />
      {/* 集团简介 */}
      <div className="business__company">
        <div className="business__company__container">
          <div className="business__company__container__title business__title">
            集团简介
          </div>
          <div className="business__company__container__line"></div>
          <div className="business__company__container__info">
            <div className="business__company__container__info__img">
              <img
                src={business_info_img}
                className="business__company__container__info__img__pc"
              ></img>
              <img
                src={business_info_img_mobile}
                className="business__company__container__info__img__mobile"
              ></img>
            </div>
            <div className="business__company__container__info__text">
              <div className="business__company__container__info__text__content">
                我们以先进的技术和优良的品质，向餐饮客户及食品加工客户提供各类咖喱及新式西餐调味料产品。
              </div>
              <div className="business__company__container__info__text__content">
                产品应用广泛，在各类中西式餐饮中均能给客户定制化的产品开发以及菜谱开发
              </div>
              <div className="business__company__container__info__text__content">
                我们同时拥有强大的支持团队进行定制化的产品开发，菜谱开发，我们服务过全国各大知名连锁品牌以及各大知名便利店、咖喱专门店、食品加工厂等。
              </div>
            </div>
          </div>
        </div>
        <div className="business__company__staff">
          <div className="business__company__staff__block">
            <div className="business__company__staff__block__title">
              支持团队
            </div>
            <div className="business__company__staff__block__content">
              <img
                className="business__company__staff__block__content__chief"
                src={chief}
              ></img>
              <div className="business__company__staff__block__content__introduce">
                <div className="business__company__staff__block__content__introduce__name">
                  沈祎濛
                </div>
                <div className="business__company__staff__block__content__introduce__title">
                  简历
                </div>
                <div className="business__company__staff__block__content__introduce__text">
                  凯悦酒店集团工作超过十年
                  <br />
                  上海松江凯悦酒店副厨师长 <br />
                  上海前滩金普顿酒店副厨师长
                </div>
              </div>
            </div>
          </div>
          <div className="business__company__staff__block business__company__staff__growth">
            <div className="business__company__staff__block__title">
              增长趋势
            </div>
            <div className="business__company__staff__block__increase">
              <div className="business__company__staff__block__increase__title">
                10年以来稳步增长率
              </div>
              <div className="business__company__staff__block__increase__content">
                350%
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 应用渠道 */}
      <div className="business__channel">
        <div className="business__channel__container">
          <div className="business__title">应用渠道</div>
          <div className="business__channel__container__list">
            {channelMap.map((v, i) => {
              return (
                <div
                  className={`business__channel__container__list__item channel-${v.id}`}
                  key={i}
                >
                  <img
                    src={v.img}
                    className="business__channel__container__list__item__img"
                  ></img>
                  <div className="business__channel__container__list__item__btn">
                    <div className="business__channel__container__list__item__btn__nameCn">
                      {v.name_cn}
                    </div>
                    <div className="business__channel__container__list__item__btn__nameUk">
                      {v.name_uk}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 产品介绍 */}
      <div className="business__product">
        <div className="business__title">产品介绍</div>
        <div className="business__product__list business__product__list1">
          <div className="business__product__list__item">
            <img src={list11}></img>
            <div className="business__product__list__item__name">
              百梦多咖喱
            </div>
          </div>
          <div className="business__product__list__item">
            <img src={list12}></img>
            <div className="business__product__list__item__name">
              百梦多咖喱
            </div>
          </div>
          <div className="business__product__list__item">
            <img src={list13}></img>
            <div className="business__product__list__item__name">
              百梦多咖喱
            </div>
          </div>
        </div>
        <div className="business__product__list business__product__list2">
          <div className="business__product__list__item">
            <img src={list21}></img>
            <div className="business__product__list__item__name">
              好侍福徕客咖喱
            </div>
          </div>
          <div className="business__product__list__item">
            <img src={list22}></img>
            <div className="business__product__list__item__name">
              好侍爪哇咖喱
            </div>
          </div>
          <div className="business__product__list__item">
            <img src={list23}></img>
            <div className="business__product__list__item__name">
              好侍必宜客咖喱
            </div>
          </div>
        </div>
        <div className="business__product__list business__product__list3">
          <div className="business__product__list__item">
            <img src={list31}></img>
            <div className="business__product__list__item__name">
              醇香浓缩咖喱酱
            </div>
          </div>
          <div className="business__product__list__item">
            <img src={list32}></img>
            <div className="business__product__list__item__name">
              辛香浓缩咖喱酱
            </div>
          </div>
          <div className="business__product__list__item">
            <img src={list33}></img>
            <div className="business__product__list__item__name">
              关东煮调味料
            </div>
          </div>
          <div className="business__product__list__item">
            <img src={list34}></img>
            <div className="business__product__list__item__name">
              咖喱调味粉
            </div>
          </div>
        </div>
      </div>
      {/* 联系合作 */}
      <div className="business__contact">
        <div className="business__title">联系合作</div>
        <img
          src={business_contact_bg}
          className="business__contact__bg"
          onClick={() => {
            jump(
              "http://58.34.161.53:6080/index/company/contact.html",
              false,
              "self"
            );
          }}
        />
      </div>
    </div>
  );
};

export default Business;
