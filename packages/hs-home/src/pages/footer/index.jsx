import { useEffect, useState } from "react";
import { footerMap1, footerMap2 } from "./config.js";
import { device, overload } from "../../utils/index.js";
import { useJump } from "../../hooks/index.js";
import logo from "../../assets/logo.png";
import "./index.less";

const Footer = () => {
  const jump = useJump();
  const [codeindex1, setCodeindex1] = useState(null);

  // 显示二维码
  const showCode = (t, v, i) => {
    // mob
    if (device() == 1) {
      const { type, link } = v;
      // 店铺直接跳转
      if (type === "1") {
        return jump(link);
      }

      // 去二级页面扫码
      jump(`/qrcode/${i}`, true);
      return;
    }
    // pc - 显示二维码
    if (t == 0) {
      setCodeindex1(i);
      return;
    }
    setCodeindex1(null);
  };

  return (
    <div className="footer">
      {/* 关注信息 */}
      <div className="footer__shop">
        <div className="footer__block block__left">
          <div className="footer__title">好侍官方账号</div>
          <div className="footer__channel">
            {footerMap1.map((v, i) => {
              return (
                <div className="footer__channel__list" key={i}>
                  <img
                    src={v.icon}
                    className="icon"
                    onClick={() => showCode(0, v, i)}
                  ></img>
                  <div
                    className={
                      i == codeindex1 ? "qrcodeLeft qrcodeshow" : "qrcodeLeft"
                    }
                  >
                    {v.qrcode.map((code, index) => {
                      return (
                        <div className="qrcodeLeft__list">
                          <div className="qrcodeLeft__list__title">
                            {code.desc}
                          </div>
                          <img
                            src={code.image}
                            className="qrcode"
                            key={index}
                          ></img>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer__block block__right">
          <div className="footer__title">好侍官方店铺</div>
          <div className="footer__channel">
            {footerMap2.map((v, i) => {
              return (
                <div className="footer__channel__list" key={i}>
                  <img
                    src={v.icon}
                    className="icon"
                    onClick={() => jump(v.link, false, "_blank")}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 友情链接 */}
      <div className="footer__links">
        <div className="footer__links__container">
          <img
            src={logo}
            className="footer__links__container__logo"
            onClick={() => jump(`/`, true)}
          ></img>
          <div className="footer__links__container__inner">
            <div
              className="footer__links__container__inner__item"
              onClick={() =>
                jump(`https://housefoods-group.com/`, false, "_blank")
              }
            >
              日本好侍
            </div>
            <div
              className="footer__links__container__inner__item"
              onClick={() =>
                jump(
                  `http://58.34.161.53:6080/index/company/sitemap.html`,
                  false,
                  "self"
                )
              }
            >
              站点地图
            </div>
            <div
              className="footer__links__container__inner__item"
              onClick={() =>
                jump(
                  `http://58.34.161.53:6080/index/company/privacy.html`,
                  false,
                  "self"
                )
              }
            >
              隐私条款
            </div>
            <div
              className="footer__links__container__inner__item"
              onClick={() =>
                jump(
                  `http://58.34.161.53:6080/index/company/ruler.html`,
                  false,
                  "self"
                )
              }
            >
              使用规则
            </div>
          </div>
        </div>
      </div>

      {/* 版权信息 */}
      <div className="footer__rights">
        <div className="footer__rights__container">
          <div
            className="footer__rights__container__item"
            onClick={() =>
              jump(
                `https://beian.mps.gov.cn/#/query/webSearch`,
                false,
                "_blank"
              )
            }
          >
            沪公网安备 31010502001878
          </div>
          <div
            className="footer__rights__container__item"
            onClick={() =>
              jump(
                `https://beian.miit.gov.cn/#/Integrated/index`,
                false,
                "_blank"
              )
            }
          >
            沪ICP备06056327号-2
          </div>
          <div className="footer__rights__container__item">
            Copyright© 2019 House Foods China Inc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
