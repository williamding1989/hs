import abouths_bg from "../../assets/abouths_bg.png";
import wechat from "../../assets/wechat.png";
import redbook from "../../assets/redbook.png";
import weibo from "../../assets/weibo.png";
import wechatvideo from "../../assets/wechatvideo.png";
import tiktok from "../../assets/tiktok.png";
import tmall from "../../assets/tmall.png";
import jd from "../../assets/jd.png";
import pdd from "../../assets/pdd.png";

// 数据协议 -- 底部
export const footerMap1 = [
  {
    icon: wechat,
    qrcode: [
      {
        image:
          "https://www.housefoods.com.cn/storage/assets/home/images/house_contact_weixin01.jpg?v1",
        desc: "家庭用微信",
      },
      {
        image:
          "https://www.housefoods.com.cn/storage/assets/home/images/ywy.png",
        desc: "业务用微信",
      },
    ],
    abouths_bg,
    type: "0", // 0 - 官方
    desc: "微信",
  },
  {
    icon: wechatvideo,
    qrcode: [
      {
        image:
          "https://www.housefoods.com.cn/storage/assets/home/images/house_contact_weixin02.jpg",
        desc: "视频号",
      },
    ],
    type: "0",
    desc: "视频号",
  },
  {
    icon: redbook,
    qrcode: [
      {
        image:
          "https://www.housefoods.com.cn/storage/assets/home/images/xhscode.jpg?v1",
        desc: "官方用小红书",
      },
    ],
    type: "0",
    desc: "官方用小红书",
  },
  {
    icon: weibo,
    qrcode: [
      {
        image:
          "https://www.housefoods.com.cn/storage/assets/home/images/house_contact_weibo.jpg",
        desc: "官方微博",
      },
    ],
    type: "0",
    desc: "官方微博",
  },
];

// 数据协议 -- 底部
export const footerMap2 = [
  {
    icon: tiktok,
    qrcode: abouths_bg,
    type: "1", // 1 - 店铺
    link: "https://z.douyin.com/p53t?scheme=snssdk1128%3A%2F%2Fgoods%2Fstore%3Fsec_shop_id%3DlxYptmZY%26entrance_location%3Ddou_shop_ad_101_2%26tab_id%3D16%26url_maker%3Dshop_sdk",
  },
  {
    icon: tmall,
    qrcode: abouths_bg,
    type: "1",
    link: "https://haoshishipin.tmall.com/",
  },
  {
    icon: jd,
    qrcode: abouths_bg,
    type: "1",
    link: "https://mall.jd.com/index-190008.html",
  },
  {
    icon: pdd,
    qrcode: abouths_bg,
    type: "1",
    link: "https://mobile.yangkeduo.com/mall_page.html?refer_share_uin=LDVQ3FQQ5EUFRWZB62H2OUQO4M_GEXDA&amp;refer_share_id=k2CghMHgUMRpZ45axMjmYxeC7IR5yd0S&amp;msn=q67rxhgwr2bpeq5gn43jfwfism_axbuy&amp;_wv=41729&amp;refer_share_channel=copy_link&amp;has_decoration=1&amp;mall_id=378996690&amp;_wvx=10",
  },
];
