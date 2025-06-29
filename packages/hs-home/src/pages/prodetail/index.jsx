import { Table } from "antd";
import "./index.less";
import { HsVideo } from "../../components/index";
import recommandbook from "../../assets/recommandbook.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import play2 from "../../assets/play_2.png";
import { useJump } from "../../hooks/index.js";
import { useParams } from "react-router-dom";
import { getProDetail } from "../../request/index.js";
import { useEffect, useState } from "react";
import { parseUrl } from "../../utils/index.js";
import { useLocation } from "react-router-dom";

const Prodetail = () => {
  const [detail, setDetail] = useState(null);
  const jump = useJump();
  const pathname = useLocation();
  const { id } = useParams(); // 获取 URL 参数

  const brandMap = {
    1: brand1,
    2: brand2,
    3: brand3,
  };

  useEffect(() => {
    if (!id) return;

    const { isPreview, type } = parseUrl(pathname.search);

    getDetail(id, !!isPreview, type);
  }, [id]);

  const getDetail = async (id, isPreview, type) => {
    try {
      const data = await getProDetail({ id, isPreview, type });
      localStorage.setItem("prodetail", data.name);

      setDetail(data);
    } catch (error) {}
  };

  const columns = [
    {
      title: "口味",
      dataIndex: "taste",
    },
    {
      title: "产品规格（净含量）",
      dataIndex: "net_content",
    },
    {
      title: "保质期",
      dataIndex: "expiration",
    },
  ];

  const getRowClassName = (record, index) => {
    // 偶数行添加类名
    if (index % 2 === 0) {
      return "even-row";
    }
    return "odd-row";
  };

  if (!detail) return;

  return (
    <div className="prodetail">
      <div className="prodetail__coverImage">
        <div className="prodetail__coverImage__img">
          <img src={detail.cover_image}></img>
        </div>

        <div className="prodetail__coverImage__name">{detail.name}</div>
      </div>
      {/* 品牌入口  */}
      <div
        className="prodetail__brand"
        onClick={() => jump(detail.brand_linkurl)}
      >
        品牌专题页入口
        {[1, 2, 3].includes(detail.brand_id) && (
          <img
            src={`${brandMap[detail.brand_id]}`}
            className={`prodetail__brand__img brand-${detail.brand_id}`}
            onClick={() => jump(detail.brand_linkurl)}
          ></img>
        )}
      </div>

      {/* 商品详情 */}
      <div className="prodetail__container">
        {/* 商品介绍 */}
        <div className="prodetail__container__intro">
          <div className="prodetail__title">商品介绍</div>
          <div
            className="prodetail__container__intro__tips"
            dangerouslySetInnerHTML={{ __html: detail.product_info }}
          ></div>
        </div>
        <div className="prodetail__container__additional">
          {/* 产品规格 */}
          <div className="prodetail__container__additional__sku">
            <div className="prodetail__title">产品规格</div>
            <Table
              pagination={false}
              dataSource={detail.sku}
              columns={columns}
              rowClassName={getRowClassName} // 绑定类名函数
            />
          </div>
          {/* 过敏信息 */}
          <div className="prodetail__container__additional__allergy">
            <div className="prodetail__title">过敏信息</div>
            <div className="prodetail__container__additional__allergy__info">
              <div
                className="prodetail__container__additional__allergy__info__tips"
                dangerouslySetInnerHTML={{ __html: detail.allergy_info }}
              ></div>
            </div>
          </div>
        </div>
        {/* 视频介绍 */}
        {detail.video && (
          <div className="prodetail__container__video">
            <div className="prodetail__title">视频介绍</div>
            <HsVideo
              className="prodetail__container__video__item"
              src={detail.video}
              poster={detail.video_image}
              playbtn={play2}
            ></HsVideo>
          </div>
        )}

        {/* 菜谱 */}
        <div className="prodetail__container__cookbook">
          <div className="prodetail__title">菜谱</div>
          <img
            className="prodetail__container__cookbook__more"
            src={recommandbook}
            onClick={() => jump("/cookbook", true)}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Prodetail;
