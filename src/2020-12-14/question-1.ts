/**
 * 大数相加
 */

export const add = (a: string, b: string) => {
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

console.log(add('123', '99'), 123 + 99)
console.log(add('444', '556'), 444 + 556)
