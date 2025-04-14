import { useState } from "react";
import "./index.less";
import { ModalService } from "../../service";

const Modal = () => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState({});

  const modal = new ModalService();

  //  注册
  modal.registry((options) => {
    setVisible(true);
    setOptions(options);
  });
  if (!visible) return null;

  return (
    <div className="modalcontainer">
      <div>标题：{options.title}</div>
      <div>内容:{options.content}</div>
      <div>类型：{options.type}</div>
    </div>
  );
};

export default Modal;
