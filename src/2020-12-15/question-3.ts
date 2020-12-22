/**
 * 实现一个 Observer 类对指定数据进行劫持
 * function observer(obj, k, callback) {
  let old = obj[k]  
  Object.defineProperty(obj, k, {
    enumerable: true,
    configurable: true,
    get: function() {
      return old
    },
    set: function(now) {
      if(now !== old) {
        callback(old, now)
      }
      old = now
    }
  })
}
 */

class Observer {

}
