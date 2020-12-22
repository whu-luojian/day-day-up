/**
 * 实现数组里找任意两个数加值为一个目标值的算法，输出下标，
 * 如：[2, 4, 5, 6, 7, 1, 8] target = 8, 最终输出为 [[0, 3], [4, 5]]
 * 思路：如果是有序数组，则使用双指针，无序数组，则使用 map
 */

const find = (array: number[], target: number) => {
  const map = new Map()
  let result = []
  for (let i = 0; i < array.length; i++) {
    let remain = target - array[i]
    if (map.has(remain)) {
      result.push([map.get(remain), i])
    }
    map.set(array[i], i)
  }
  return result
}

console.log(find([2, 4, 5, 6, 7, 1, 8], 8))
