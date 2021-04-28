/**
 * 防抖：执行频率过快的函数只执行最后一次
 */

const debounce = function(fn, delay = 100) {
  let timeId = null
  return function(...args) {
    const context = this
    if (timeId) {
      clearTimeout(timeId)
    }
    timeId = setTimeout( function() {
      fn.apply(context, args)
    }, delay)
  }
}

/**
 * 防抖：执行频率过快的函数只执行最后一次
 * 进阶功能：
 * 1. 支持立即执行
 * 2. 支持函数返回值
 * 3，支持取消
 */

const debounce2 = function(fn, delay = 100, immediate = false) {
  let timeId = null
  let result
  const func = function(...args) {
    const context = this
    clearTimeout(timeId)
    if (immediate) {
      let callNow = !timeId
      if (callNow) {
        result = fn.apply(context, args)
      }
      // key
      timeId = setTimeout(function() {
        timeId = null
      }, delay)
    } else {
      timeId = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
    return result
  }

  func.cancel = function() {
    if (timeId) {
      clearTimeout(timeId)
      timeId = null
    }
  }

  return func
}
