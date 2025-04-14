/**
 * 弹窗服务
 * 1. 注册弹窗
 * 2. 打开弹窗
 */
export class ModalService {
  constructor() {
    if (ModalService.instance) {
      return ModalService.instance;
    }
    ModalService.instance = this;
  }

  registry(fn) {
    this.handle = fn;
  }

  /**
   *
   * @param {*} options
   * @param {string} options.type 弹窗类型
   * @param {string} options.title 标题
   * @param {string} options.content 内容
   *
   */
  open(options) {
    this.visible = true;
    this.handle(options);
  }
}
