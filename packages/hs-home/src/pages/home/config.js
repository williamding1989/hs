import abouths_bg from '../../assets/abouths_bg.png'
import wechat from '../../assets/wechat.png'
import redbook from '../../assets/redbook.png'
import weibo from '../../assets/weibo.png'
import wechatvideo from '../../assets/wechatvideo.png'
import tiktok from '../../assets/tiktok.png'
import tmall from '../../assets/tmall.png'
import jd from '../../assets/jd.png'
import pdd from '../../assets/pdd.png'
import home_curry1 from '../../assets/home/curry1.png'
import home_curry2 from '../../assets/home/curry2.png'
import home_curry3 from '../../assets/home/curry3.png'
import home_curry4 from '../../assets/home/curry4.png'
import home_curry5 from '../../assets/home/curry5.png'
import home_curry6 from '../../assets/home/curry6.png'
import pcBanner1 from '../../assets/pc-banner1.jpg'
import pcBanner2 from '../../assets/pc-banner2.jpg'
import pcBanner3 from '../../assets/pc-banner3.jpg'
import pcBanner4 from '../../assets/pc-banner4.jpg'
import mobBanner1 from '../../assets/mob-banner1.jpg'
import mobBanner2 from '../../assets/mob-banner2.jpg'
import mobBanner3 from '../../assets/mob-banner3.jpg'
import mobBanner4 from '../../assets/mob-banner4.jpg'

// 数据协议 - 导航
export const navMap = [
  {
    link: 'http://www.baidu.com',
    title: '首页',
    sub: null,
    id: 1,
    expand: false,
  },
  {
    link: 'xxx',
    title: '产品介绍',
    id: 2,
    expand: false,
    sub: [
      {
        link: 'xxx',
        title: '产品介绍1-1',
        sub: null,
        id: 21,
        expand: false,
      },
      {
        link: 'xxx',
        title: '产品介绍2-1',
        id: 22,
        expand: false,
        sub: [
          {
            link: 'xxx',
            title: '产品介绍1-1-1',
            sub: null,
            id: 221,
            expand: false,
          },
          {
            link: 'xxx',
            title: '产品介绍2-1-1',
            sub: null,
            id: 222,
            expand: false,
          },
          {
            link: 'xxx',
            title: '产品介绍3-1-1',
            sub: null,
            id: 223,
            expand: false,
          },
        ],
      },
    ],
  },
  {
    link: 'xxx',
    title: '好侍菜谱',
    sub: null,
    id: 3,
    expand: false,
  },
  {
    link: 'xxx',
    title: '公司介绍',
    sub: null,
    id: 4,
    expand: false,
  },
  {
    link: 'xxx',
    title: '业务合作',
    sub: null,
    id: 5,
    expand: false,
  },
  {
    link: 'xxx',
    title: '联系我们',
    sub: null,
    id: 6,
    expand: false,
  },
]

// 数据协议 - pc轮播
export const pcBannerMap = [
  {
    url: pcBanner1,
    link: 'xx',
  },

  {
    url: pcBanner2,
    link: 'xx',
  },

  {
    url: pcBanner3,
    link: 'xx',
  },
  {
    url: pcBanner4,
    link: 'xx',
  },
]

// 数据协议 - 移动轮播
export const mobBannerMap = [
  {
    url: mobBanner1,
    link: 'xx',
  },

  {
    url: mobBanner2,
    link: 'xx',
  },

  {
    url: mobBanner3,
    link: 'xx',
  },
  {
    url: mobBanner4,
    link: 'xx',
  },
]

// 数据协议 -- 底部
export const footerMap1 = [
  {
    icon: wechat,
    qrcode: abouths_bg,
    type: '0', // 0 - 官方
    desc: '家庭用微信', // 业务用微信，家庭用微信
  },
  {
    icon: wechatvideo,
    qrcode: abouths_bg,
    type: '0',
    desc: '视频号',
  },
  {
    icon: redbook,
    qrcode: abouths_bg,
    type: '0',
    desc: '官方用小红书',
  },
  {
    icon: weibo,
    qrcode: abouths_bg,
    type: '0',
    desc: '官方微博',
  },
]

// 数据协议 -- 底部
export const footerMap2 = [
  {
    icon: tiktok,
    qrcode: abouths_bg,
    type: '1', // 1 - 店铺
    link: 'https://z.douyin.com/p53t?scheme=snssdk1128%3A%2F%2Fgoods%2Fstore%3Fsec_shop_id%3DlxYptmZY%26entrance_location%3Ddou_shop_ad_101_2%26tab_id%3D16%26url_maker%3Dshop_sdk',
  },
  {
    icon: tmall,
    qrcode: abouths_bg,
    type: '1',
    link: 'https://haoshishipin.tmall.com/',
  },
  {
    icon: jd,
    qrcode: abouths_bg,
    type: '1',
    link: 'https://mall.jd.com/index-190008.html',
  },
  {
    icon: pdd,
    qrcode: abouths_bg,
    type: '1',
    link: 'https://mobile.yangkeduo.com/mall_page.html?refer_share_uin=LDVQ3FQQ5EUFRWZB62H2OUQO4M_GEXDA&amp;refer_share_id=k2CghMHgUMRpZ45axMjmYxeC7IR5yd0S&amp;msn=q67rxhgwr2bpeq5gn43jfwfism_axbuy&amp;_wv=41729&amp;refer_share_channel=copy_link&amp;has_decoration=1&amp;mall_id=378996690&amp;_wvx=10',
  },
]

// 咖喱饭
export const curryMap1 = [
  {
    url: home_curry1,
    desc: '足球咖喱饭',
    link: 'https://www.housefoods.com.cn/index/Recipe/detail.html?id=735',
  },
  {
    url: home_curry2,
    desc: '南国风情虾仁咖喱饭',
    link: 'https://www.housefoods.com.cn/index/Recipe/detail.html?id=711',
  },
  {
    url: home_curry3,
    desc: '萌宠造型咖喱饭',
    link: 'https://www.housefoods.com.cn/index/Recipe/detail.html?id=746',
  },
]

// 咖喱饭
export const curryMap2 = [
  {
    url: home_curry4,
    desc: '超浓郁苹果咖喱饭',
    link: 'https://www.housefoods.com.cn/index/Recipe/detail.html?id=749',
  },
  {
    url: home_curry5,
    desc: '时蔬秋葵豆腐咖喱饭',
    link: 'https://www.housefoods.com.cn/index/Recipe/detail.html?id=535',
  },
  {
    url: home_curry6,
    desc: '茄子时蔬鸡肉咖喱饭',
    link: 'https://www.housefoods.com.cn/index/Recipe/detail.html?id=533',
  },
]
