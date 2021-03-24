/**
 * 给你一个按升序排序的整数数组num（可能包含重复数字），请你将它们分割成一个或多个长度不小于3的子序列（子序列下标不需要连续），其中每个子序列都由
 * 连续的整数组成。如果可以完成上述分割，则返回 true；否则，返回 false
 *  输入: [1,2,3,3,4,5]
    输出: True
    解释:
    你可以分割出这样两个连续子序列 : 
    1, 2, 3
    3, 4, 5

    输入: [1,2,3,3,4,4,5,5]
    输出: True
    解释:
    你可以分割出这样两个连续子序列 : 
    1, 2, 3, 4, 5
    3, 4, 5
 */

/**
 * 贪心算法
 * 不足：无法输出分割后的子序列
 * @param nums
 */
const isPossible = (nums: number[]) => {
  const countMap = new Map()
  const endMap = new Map()
  for (const x of nums) {
    const count = (countMap.get(x) || 0) + 1
    countMap.set(x, count)
  }
  for (const x of nums) {
    const count = countMap.get(x) || 0
    if (count > 0) {
      const prevEndCount = endMap.get(x - 1) || 0
      if (prevEndCount > 0) {
        countMap.set(x, count - 1)
        endMap.set(x - 1, prevEndCount - 1)
        endMap.set(x, (endMap.get(x) || 0) + 1)
      } else {
        const count1 = countMap.get(x + 1) || 0
        const count2 = countMap.get(x + 2) || 0
        if (count1 > 0 && count2 > 0) {
          countMap.set(x, count - 1)
          countMap.set(x + 1, count1 - 1)
          countMap.set(x + 2, count2 - 1)
          endMap.set(x + 2, (endMap.get(x + 2) || 0) + 1)
        } else {
          return false
        }
      }
    }
  }
  return true
}

/**
 * start、end数组
 * @param nums [1,2,3,3,4,4,5,5]
 */
const isPossible2 = (nums: number[]) => {
  const start: number[] = []
  const end: number[] = []
  for (const x of nums) {
    const idx = end.lastIndexOf(x - 1) // lastIndexOf 是精髓
    if (idx !== -1) {
      end[idx] = x
    } else {
      start.push(x)
      end.push(x)
    }
  }
  for (let i = 0; i < start.length; i++) {
    if (end[i] - start[i] < 2) {
      return false
    }
  }
  return true
}

console.log(isPossible([1,2,3,3,4,4,5,5]))
console.log(isPossible2([1,2,3,3,4,4,5,5]))
