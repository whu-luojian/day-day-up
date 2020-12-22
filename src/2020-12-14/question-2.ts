/**
 * 大数相乘
 */

const add = (a: string, b: string) => {
  let result = ''
  let carry = 0
  let len = Math.max(a.length, b.length)
  let i = len
  while (i--) {
    const sum = (+a[a.length - len + i] || 0) + (+b[b.length - len + i] || 0) + carry
    result = sum % 10 + result
    carry = Math.floor(sum / 10)
  }
  if (carry) {
    result = carry + result
  }
  return result
}

/**
 * 遍历 a 每一位与 b 进行相乘，将每一步的结果进行累加。
 * 可优化思路：使用 Map 存储乘积，避免重复计算
 * @param a 
 * @param b 
 */
const multiply = (a: string, b: string) => {
  if (a === '0' || b === '0') {
    return '0'
  }
  let result = ''
  let i = a.length
  while (i--) {
    const m = +a[i]
    if (m) {
      let r = Array(a.length - i - 1).fill(0).join('')
      let carry = 0
      let j = b.length
      while (j--) {
        const product = m * (+b[j]) + carry
        r = product % 10 + r
        carry = Math.floor(product / 10)
      }
      if (carry) {
        r = carry + r
      }
      result = add(result, r)
    }
  }
  return result
}

/**
 * 竖式优化算法
 * 1. 乘数 a 位数为 M，被乘数 b 位数为 N， a x b 结果 res 最大总位数为 M+N
   2. a[i] x b[j] 的结果为 tmp(位数为两位，"0x","xy"的形式)，其第一位位于 res[i+j]，第二位位于 res[i+j+1]。
 * @param a 
 * @param b 
 */
const multiply1 = (a: string, b: string) => {
  if (a === '0' || b === '0') {
    return '0'
  }
  let result = Array(a.length + b.length).fill(0)
  let i = a.length
  while (i--) {
    const m = +a[i]
    if (m) {
      let j = b.length
      while (j--) {
        const product = m * (+b[j])
        result[i + j + 1] += product % 10
        if (result[i + j + 1] > 9) {
          result[i + j] += Math.floor(result[i + j + 1] / 10)
          result[i + j + 1] = result[i + j + 1] % 10
        }
        result[i + j] += Math.floor(product / 10)
      }
    }
  }
  return result.join('').replace(/^0+/, '')
}

console.log(multiply('123', '45'), 123 * 45)
console.log(multiply1('123', '45'), 123 * 45)
