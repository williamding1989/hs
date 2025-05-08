import { Table } from "antd";
import "./index.less";
import { HsVideo } from "../../components/index";
import recommandbook from "../../assets/recommandbook.png";
import { useJump } from "../../hooks/index.js";
import { useParams } from "react-router-dom";
import { getProDetail } from "../../request/index.js";
import { useEffect, useState } from "react";

const Prodetail = () => {
  const [detail, setDetail] = useState(null);
  const jump = useJump();
  const { id } = useParams(); // 获取 URL 参数

  useEffect(() => {
    if (!id) return;

    getDetail(id);
  }, [id]);

  const getDetail = async (id) => {
    try {
      const data = await getProDetail(id);
      console.log(data);
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
        <img
          src={detail.cover_image}
          className="prodetail__coverImage__img"
        ></img>
      </div>
      {/* 品牌入口 */}
      <img
        src={recommandbook}
        className="prodetail__brand"
        onClick={() => jump(detail.brand_linkurl)}
      ></img>

      {/* 商品详情 */}
      <div className="prodetail__container">
        {/* 商品介绍 */}
        <div className="prodetail__container__intro">
          <div className="prodetail__title">商品介绍</div>
          <div className="prodetail__container__intro__tips">
            {detail.description}
          </div>
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
        <div className="prodetail__container__video">
          <div className="prodetail__title">视频介绍</div>
          <HsVideo
            className="prodetail__container__video__item"
            src={detail.video}
            poster={detail.video_image}
          ></HsVideo>
        </div>
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
