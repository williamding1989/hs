import test from '../../assets/test.png'
import wechat from '../../assets/wechat.png'
import redbook from '../../assets/redbook.png'
import weibo from '../../assets/weibo.png'
import wechatvideo from '../../assets/wechatvideo.png'
import tiktok from '../../assets/tiktok.png'
import tmall from '../../assets/tmall.png'
import jd from '../../assets/jd.png'
import pdd from '../../assets/pdd.png'

// 数据协议 - 导航
export const navMap = [
  {
    link: 'http://www.baidu.com',
    title: '首页',
    sub: null,
  },
  {
    link: 'xxx',
    title: '产品介绍',
    sub: [
      { link: 'xxx', title: '产品介绍11' },
      { link: 'xxx', title: '产品介绍22' },
      { link: 'xxx', title: '产品介绍33' },
    ],
  },
  {
    link: 'xxx',
    title: '好侍菜谱',
    sub: null,
  },
  {
    link: 'xxx',
    title: '公司介绍',
    sub: null,
  },
  {
    link: 'xxx',
    title: '业务合作',
    sub: null,
  },
  {
    link: 'xxx',
    title: '联系我们',
    sub: null,
  },
]

// 数据协议 - 轮播
export const bannerMap = [
  {
    url: test,
    link: 'xx',
  },

  {
    url: test,
    link: 'xx',
  },

  {
    url: test,
    link: 'xx',
  },
]

// 数据协议 -- 底部
export const footerMap1 = [
  {
    icon: wechat,
    qrcode: test,
  },
  {
    icon: wechatvideo,
    qrcode: 'xx',
  },
  {
    icon: redbook,
    qrcode: 'xx',
  },
  {
    icon: weibo,
    qrcode: 'xx',
  },
]

// 数据协议 -- 底部
export const footerMap2 = [
  {
    icon: tiktok,
    qrcode: test,
  },
  {
    icon: tmall,
    qrcode: 'xx',
  },
  {
    icon: jd,
    qrcode: 'xx',
  },
  {
    icon: pdd,
    qrcode: 'xx',
  },
]
