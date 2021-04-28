/**
 * 合并两个有序数组 num1 和 num2，num1 和 num2 的元素数量分别为 m 和 n
 * 输入：
 * var num1 = [1, 2, 3, 7], m = 4
 * var num2 = [2, 5, 6], n = 3
 * 输出：
 * [1, 2, 2, 3, 5, 6, 7]
 */

var merge = function(num1, m, num2, n) {
  let res = []
  while (m > 0 && n > 0) {
    if (num1[0] < num2[0]) {
      res.push(num1.shift())
      m--
    } else {
      res.push(num2.shift())
      n--
    }
  }
  if (m > 0) {
    res = res.concat(num1)
  }
  if (n > 0) {
    res = res.concat(num2)
  }
  return res
}

var num1 = [1, 2, 3, 7], m = 4
var num2 = [2, 5, 6], n = 3

console.log(merge(num1, 4, num2, 3))