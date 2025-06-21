import "./index.less";

const Tag = ({ type, className }) => {
  const typeMap = {
    2: {
      className: "company",
      text: "公司",
    },
    1: {
      className: "product",
      text: "产品",
    },
    3: {
      className: "activity",
      text: "活动",
    },
  };

  if (!type) return;

  return (
    <div className={`HsTag HsTag-${typeMap[type].className} ${className}`}>
      {typeMap[type].text}
    </div>
  );
};

export default Tag;
