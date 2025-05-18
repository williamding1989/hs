import { Breadcrumb } from "antd";
import { useEffect, useRef, useState } from "react";
import "./index.less";

const HsBreadcrumb = ({ pathname }) => {
  const routeMap = {
    "/": "首页",
    "/productor": "产品介绍",
    "/cookbook": "好侍菜谱",
  };

  const [items, setItems] = useState([
    {
      title: "首页",
      href: "/",
    },
  ]);

  useEffect(() => {
    let item = items;
    item.lengths = 2;
    item[1] = make(pathname);
    setItems([...item]);
  }, [pathname]);

  const make = (pathname) => ({
    title: routeMap[pathname],
    href: pathname,
  });

  return <Breadcrumb className="HsBreadcrumb" separator=">" items={items} />;
};

export default HsBreadcrumb;
