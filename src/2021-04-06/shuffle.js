/**
 * 洗牌算法
 */

// a = [1, 2, 3, 4]
const shuffle = (a) => {
  let res = []
  while (a.length) {
    // 0 <= Math.random() < 1
    const i = parseInt(Math.random() * a.length)
    res.push(a.splice(i, 1)[0])
  }
  return res
}
