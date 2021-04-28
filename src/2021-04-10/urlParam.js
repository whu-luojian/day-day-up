/**
 * 解析 url 参数为对象
 */

const urlParse = url => {
  const res = {}
  const params = (url.split('?')[1] || '' ).split('&')
  for (let item of params) {
    if (/=/.test(item)) {
      let [key, value] = item.split('=')
      value = decodeURIComponent(value)
      if (res.hasOwnProperty(key)) {
        res[key] = [].concat(res[key], value)
      } else {
        res[key] = value
      }
    }
  }
  return res
}
