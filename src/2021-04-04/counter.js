/**
 * 使用闭包实现一个 counter 函数，全局下每次调用返回值 +1
 * console.log(counter()) // 1
 * console.log(counter()) // 2
 * console.log(counter()) // 3
 */

const counter = (() => {
  let count = 0
  return () => {
    return ++count
  }
})()
