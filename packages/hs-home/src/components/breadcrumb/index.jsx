import { Breadcrumb } from "antd";
import { useEffect, useRef, useState } from "react";
import "./index.less";

const HsBreadcrumb = ({ pathname }) => {
  const defaultMap = [
    {
      title: "首页",
      href: "/",
    },
  ];

  const routeMap = {
    "/": "首页",
    "/productor": "产品介绍",
    "/cookbook": "好侍菜谱",
    "/business": "业务合作",
  };

  const detailMap = {
    cookdetail: "/cookbook",
    prodetail: "/productor",
  };

  const [items, setItems] = useState(defaultMap);

  useEffect(() => {
    let item = items;
    const current = make(pathname);
    const key = Object.keys(detailMap).find((i) => pathname.includes(i));
    if (current.title) {
      item.length = 1;
      item.push(make(pathname));
      setItems([...item]);
    } else if (key) {
      item.length = 1;
      setTimeout(() => {
        const name = localStorage.getItem(key);
        item.push(make(detailMap[key]));
        item.push({
          title: name,
          href: pathname,
        });
        setItems([...item]);
      }, 700);
    }
  }, [pathname]);

  const make = (pathname) => ({
    title: routeMap[pathname],
    href: pathname,
  });

  return <Breadcrumb className="HsBreadcrumb" separator=">" items={items} />;
};

export default HsBreadcrumb;
