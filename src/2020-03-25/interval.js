/**
 * interval 不准的问题
 * 
 * 解决方案：
 * 使用 setTimeout 模拟 setInterval，动态修正时间
 */

const mySetInterval = (fn, delay) => {
  let count = 0
  let startTime = performance.now()

  const modifyFn = () => {
    fn()
    count++
    const offset = performance.now() - (startTime + count * delay)
    setTimeout(modifyFn, delay - offset)
  }

  setTimeout(modifyFn, delay)
}
