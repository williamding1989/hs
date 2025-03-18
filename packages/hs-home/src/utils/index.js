/**
 *  设备检测
 * @returns 1 手机端  2 pad  3 pc
 */
function device() {
  const { innerWidth } = window
  if (innerWidth < 768) return 1
  if (innerWidth > 1200) return 3

  return 2
}

export { device }
