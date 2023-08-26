import request from '@/common/request.js'
export function getlist() {
  let opts = {
    url: '/qdpz/articles/list',
    method: 'get'
  }

  return request.requestUtil(opts)
}

export function getTypeList(data) {
  let opts = {
    url: '/qdpz/articles',
    method: 'post'
  }

  return request.requestUtil(opts, data)
}
