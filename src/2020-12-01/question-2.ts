/**
 * 实现 12345678.002345 -> 12,345,678.002345
 */

/**
 * 方法一：字符串遍历拼接
 * @param num
 */
const thousands = (num: number) => {
  const [integerPart, fractionPart] = num.toString().split('.')
  let result = ''
  const len = integerPart.length
  for (let i = len - 1; i >= 0; i--) {
    if ((len - i) > 3 && (len - i) % 3 === 1) {
      result = ',' + result
    }
    result = integerPart[i] + result
  }
  if (fractionPart) {
    result = result + '.' + fractionPart
  }
  return result
}

/**
 * 方法二：使用 Number.prototype.toLocaleString 方法, 返回一个语言环境下的表示字符串。
 * 当前环境 U.S. English locale
 * @param num
 */
const thousands_2 = (num: number) => {
  const [integerPart, fractionPart] = num.toString().split('.')
  let result = parseInt(integerPart).toLocaleString()
  if (fractionPart) {
    result = result + '.' + fractionPart
  }
  return result
}

/**
 * 方法三：使用正则表达式
 * ?=pattern 零宽正向先行断言，要求已匹配字符序列之后的字符序列能够匹配pattern
 * (?:) 表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来
 * $ 字符串末尾
 * @param num
 */
const thousands_3 = (num: number) => {
  const str = num.toString()
  return str.includes('.') ? str.replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,') : str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

/**
 * 方法四：API版
 * 熟练使用 reverse, map
 * @param num
 */
const thousands_4 = (num: number) => {
  const [integerPart, fractionPart] = num.toString().split('.')
  let result = integerPart.split('').reverse().map((value, i) => {
    return (i && i % 3 === 0) ? `${value},` : value
  }).reverse().join('')
  if (fractionPart) {
    result = result + '.' + fractionPart
  }
  return result
}

console.log(thousands(12345678.002345))
console.log(thousands_2(12345678.002345))
console.log(thousands_3(12345678.002345))
console.log(thousands_4(12345678.002345))
