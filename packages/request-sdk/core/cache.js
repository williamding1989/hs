import { CreateEnhancedRequest } from './index.js'

/**
 * 创建一个支持缓存的请求实例
 * @param {Object} options - 缓存配置选项
 * @param {Function} options.key - 生成缓存键的函数，接收请求配置对象作为参数
 * @param {boolean} [options.persist=false] - 是否持久化缓存（默认值: false），开启后将会存在localstorage中
 * @param {number} [options.duration] - 缓存有效期（毫秒）
 * @returns {Object} 返回一个缓存请求实例
 */
function CreateCacheRequest(options) {
  // 参数归一化
  options = normalize(options)

  const request = CreateEnhancedRequest()

  // 请求之前
  request.on('beforeRequest', (config) => {
    //  查缓存
    console.log('请求之前----', config)
  })

  // 请求之后
  request.on('afterRequest', (config, response) => {
    // 设置缓存
    console.log('请求之后++++', config)
  })

  return request
}

// 参数归一化
function normalize(options) {
  //   console.log('123', options)
}

export default CreateCacheRequest
