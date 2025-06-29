import "./index.less";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { parseUrl } from "../../utils/index.js";
import { pageMap } from "./config.js";

const Preview = () => {
  const pathname = useLocation();
  const [url, setUrl] = useState("");
  const [type, setType] = useState(1); // 1: pc 2: mobile

  useEffect(() => {
    const { type, page, id } = parseUrl(pathname.search);

    setUrl(makeUrl(page, id));
    setType(type);
  }, [pathname]);

  const makeUrl = (page, id) => {
    let host = "http://124.223.0.156:8083";

    if (page == 1) return host;

    return `${host}/${pageMap[page]}/${id}`;
  };

  return (
    <div className="Preview">
      <iframe
        className={type == 1 ? "pc" : "mobile"}
        src={`${url}?isPreview=true&type=${type}`}
      ></iframe>
    </div>
  );
};

export default Preview;
