import request from '@/common/request.js'
export function wechatLogin(data) {
  let opts = {
    url: '/preLoginByWechat',
    method: 'post'
  }

  return request.requestUtil(opts, data)
}

export function phoneLogin(data) {
  let opts = {
    url: '/preLoginByWechat',
    method: 'post'
  }

  return request.requestUtil(opts, data)
}
