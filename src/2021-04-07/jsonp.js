/**
 * 实现 jsonp(url, cb)
 * jsonp('https://www.a.com/getdata', function(res) { console.log(res) })
 * 
 * timeout 等设置可参考库 https://github.com/webmodules/jsonp/blob/master/index.js
 */

 const jsonp = (function(){
    let count = 0
    return (url, cb) => {
      const callbackName = 'jsonpCallback' + (count++)
      url = url + (url.includes('?') ? '&' : '?') + `callback=${callbackName}`
      let script = document.createElement('script')
      script.src = url
      document.body.appendChild(script)
    
      window[callbackName] = function(data) {
          cb(data)
          document.body.removeChild(script)
          delete window[callbackName]
      }
    }
 })()

const jsonpCall = (function() {
  let count = 0

  return url => {
    count++
    const callbackName = 'jsonpCallback' + count
    url = url + (url.includes('?') ? '&' : '?') + `callback=${callbackName}`
    let script = document.createElement('script')
    script.src = url
    document.body.appendChild(script)

    script.onload = script.onerror = function() {
      document.body.removeChild(script)
      delete window[callbackName]
    }

    return new Promise((reslove, reject) => {
      window[callbackName] = function(data) {
        try {
          reslove(data)
        } catch(e) {
          reject(e)
        }
      }
    })
  }
})()

function jsonp1(url, cb) {
  jsonpCall(url).then(data => {
    cb(data)
  })
}