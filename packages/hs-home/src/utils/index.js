/**
 *  设备检测
 * @returns {1 | 2 | 3} 设备类型标识：
 *   - 1: 手机端（viewport < 768px）
 *   - 2: Pad 或平板类设备（768px ≤ viewport ≤ 1200px）
 *   - 3: PC 或桌面设备（viewport > 1200px）
 */
export const device = function device() {
  const { innerWidth } = window
  if (innerWidth < 768) return 1
  if (innerWidth > 1200) return 3

  return 2
}

/**
 * 函数重载
 * @param {JSON} target - 需要重载的对象
 * @param {String} name - 方法名
 * @param {Function} fn - 具体方法
 */
export const overload = function (target, name, fn) {
  let old = target[name]
  target[name] = function () {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments)
    } else if (typeof old === 'function') {
      return old.apply(this, arguments)
    }
  }
}

export const createOverload = function () {
  const fnMap = new Map()
  function overload() {}
}
