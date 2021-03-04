/**
 * 数组扁平化
 */

// 1. 递归实现
const flatten = (arr: any[]): any[] => {
  let result: any[] = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// 2. reduce 实现
const flatten2 = (arr: any[]): any[] => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur)
  }, [])
}

// 3. 扩展运算符实现 (some + concat + 扩展运算符)
const flatten3 = (arr: any[]): any[] => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// 4. split + toString 共同处理，处理纯数字数组
const flatten4 = (arr: any[]): any[] => {
  return arr.toString().split(',').map(item => +item)
}

// 5. 使用 es6 的 flat 函数：arr.flat(depth)，depth 为展开深度，默认为 1
const flatten5 = (arr: any[]): any[] => {
  // 传入 Infinity，表示无论多少层都要展开
  return arr.flat(Infinity)
}
