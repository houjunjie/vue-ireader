/* global window */
import axios from 'axios'
// import qs from 'qs'
// import jsonp from 'jsonp'
import lodash from 'lodash'
// import pathToRegexp from 'path-to-regexp'
// import { message } from 'antd'
// import { YQL, CORS } from './config'

// 在创建实例时设置配置默认值

// axios.defaults.baseURL = 'http://183.6.168.58:9885'
// axios.defaults.timeout = 5000
const request = (options) => {
  let {
    method = 'get',
    data,
    // fetchType,
    url
  } = options
  // console.log(data)
  // console.log(window.localStorage.getItem('accessToken'), '3333')
  // const AUTH_TOKEN = window.localStorage.getItem('accessToken')
  // // 设置请求头的token
  // if (AUTH_TOKEN) {
  //   axios.defaults.headers.common['Authorization-Admin-User'] = `admin_user_access_token ${AUTH_TOKEN}`
  // }
  const cloneData = lodash.cloneDeep(data)

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData
      })
    case 'post':
      return axios.post(url, cloneData)
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function fetch (options) {
  return request(options).then((response) => {
    const { statusText, status } = response
    let data = response.data
    // if (data instanceof Array) {
    //   data = {
    //     list: data
    //   }
    // }
    console.log(data)
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      data: data
    })
  }).catch((error) => {
    const { response } = error
    console.log(response, error, 'err')
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const { data, statusText, status } = response
      statusCode = response.status
      msg = data.message || statusText
      // 登录过期
      if (status === 406) {
        // console.log("admin_user_access_token " + (window.localStorage["accessToken"] || "not_access"));
        // window.localStorage.clear() // 清空
        // toastr.error("请重新登陆", "认证失败");
        // window.localStorage.ERP_RELOGIN_URL = window.location.href
        // window.location.href = '/login'
      }
    } else {
      statusCode = 600
      msg = error.message || 'Network Error'
    }
    // eslint-disable-next-line
    return Promise.reject({ success: false, statusCode, message: msg })
    /* eslint-disable */
  })
}
