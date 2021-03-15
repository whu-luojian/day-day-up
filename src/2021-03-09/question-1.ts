/**
 * 解答参考：
 * 1. https://www.zhihu.com/question/441984115/answer/1706353093
 * 2. https://www.zhihu.com/question/408642623/answer/1376646801
 * 3. https://www.zhihu.com/question/430549238/answer/1616661842
 */

Promise.resolve().then(() => {
  console.log(0)
  return Promise.resolve(4)
}).then(res => {
  console.log(res)
})

// then 返回 promise（p） 时，会创建一个 PromiseResolveThenableJob 放入微任务队列
// PromiseResolveThenableJob 执行 p.then(undefined), .then又会插入一个微任务

/** 微任务队列变化
 * []
 * [0, 1]
 * [1, PromiseResolveThenableJob]
 * [PromiseResolveThenableJob, 2]
 * [2, 4then]
 * [4then, 3]
 * [3, 4]
 * [4, 5]
 * [5, 6]
 * [6]
 * []
 */

Promise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})
