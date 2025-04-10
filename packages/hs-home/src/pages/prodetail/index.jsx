import { Table } from "antd";
import "./index.less";
import { HsVideo } from "../../components/index";
import video1 from "../../assets/video2.mp4";
import chickenrice__content from "../../assets/mob-banner1.jpg";
import recommandbook from "../../assets/recommandbook.png";
import { useJump } from "../../hooks/index.js";

const Prodetail = () => {
  const jump = useJump();

  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "口味",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "产品规格（净含量）",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "保质期",
      dataIndex: "address",
      key: "address",
    },
  ];

  const getRowClassName = (record, index) => {
    // 偶数行添加类名
    if (index % 2 === 0) {
      return "even-row";
    }
    return "odd-row";
  };

  return (
    <div className="prodetail">
      {/* 品牌入口 */}
      <div>品牌入口</div>
      {/* 商品详情 */}
      <div className="prodetail__container">
        {/* 商品介绍 */}
        <div className="prodetail__container__intro">
          <div className="prodetail__title">商品介绍</div>
          <div className="prodetail__container__intro__tips">
            口感柔和，美味醇香，色泽金黄，一款适合全家人食用的咖喱。
            爱好咖喱的浓浓醇香，又不要过分刺激，那么百梦多咖喱的柔和口感和醇香味道也许正好是你想要的。
          </div>
        </div>
        <div className="prodetail__container__additional">
          {/* 产品规格 */}
          <div className="prodetail__container__additional__sku">
            <div className="prodetail__title">产品规格</div>
            <Table
              pagination={false}
              dataSource={dataSource}
              columns={columns}
              rowClassName={getRowClassName} // 绑定类名函数
            />
          </div>
          {/* 过敏信息 */}
          <div className="prodetail__container__additional__allergy">
            <div className="prodetail__title">过敏信息</div>
            <div className="prodetail__container__additional__allergy__info">
              <div className="prodetail__container__additional__allergy__info__tips">
                本产品含有：小麦、大豆、乳成分 可能含有
              </div>
              <div className="prodetail__container__additional__allergy__info__tips">
                可能含有微量：花生、鱼、虾、蟹、蛋、坚果成分
              </div>
            </div>
          </div>
        </div>
        {/* 视频介绍 */}
        <div className="prodetail__container__video">
          <div className="prodetail__title">视频介绍</div>
          <HsVideo
            className="prodetail__container__video__item"
            src={video1}
            poster={chickenrice__content}
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
