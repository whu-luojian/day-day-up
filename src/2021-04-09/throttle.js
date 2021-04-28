/**
 * 节流：事件以固定频率执行
 */

const throttle = function(fn, delay = 100) {
  let start = Date.now()

  return function(...args) {
    let cur = Data.now()
    const context = this
    if (cur - start > delay) {
      start = cur
      fn.apply(context, args)
    }
  }
}

/**
 * 节流：事件以固定频率执行
 * 1. 支持取消
 * 2. 第三个参数，options.leading 来表示是否可以立即执行一次，opitons.trailing 表示结束调用的时候是否还要执行一次，默认都是 true。
 *  注意设置的时候不能同时将 leading 或 trailing 设置为 false。
 */

const throttle = function(fn, delay, options) {
  let timeId = null
  let start = 0
  let context

  if (!options) {
    options = {}
  }

  const func = function(...args) {
    let now = Date.now()
    if (!start && options.leading === false) {
      start = now
    }
    const remaining = delay - (now - start)
    context = this

    if (remaining <= 0 || remaining > delay) {
      if (timeId) {
        clearTimeout(timeId)
        timeId = null
      }
      fn.apply(context, args)
      start = now
    } else if (!timeId && options.trailing !== false) {
      timeId = setTimeout(function() {
        fn.apply(context, args)
        timeId = null
        start = options.leading === false ? 0 : Date.now()
      }, remaining)
    }
  }

  func.cancel = function() {
    clearTimeout(timeId)
    timeId = null
    start = 0
  }
}
