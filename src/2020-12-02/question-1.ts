/**
 * Semantic Versioning 是一个前端通用的版本规范。格式为“{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}”，
 * 要求实现 compare(a, b) 方法，比较 a, b 两个版本大小，
 */

/**
 * 使用正则 match，match结果数组第一个为元素本身，后续元素为分组捕获到的元素
 * @param a
 * @param b
 */
const compare = (a: string, b: string) => {
  const weightMap: any = {
    rc: 3,
    beta: 2,
    alpha: 1
  }
  const groupA = (a.replace(/alpha|beta|rc/g, (str) => {
    return weightMap[str] || ''
  }).match(/^(\d+)\.(\d+)\.(\d+)(?:-(\d+)\.(\d+)){0,1}$/) || []).slice(1)
  const groupB = (b.replace(/alpha|beta|rc/g, (str) => {
    return weightMap[str] || ''
  }).match(/^(\d+)\.(\d+)\.(\d+)(?:-(\d+)\.(\d+)){0,1}$/) || []).slice(1)
  while(groupA.length) {
    let tempA = groupA.shift() || 0
    let tempB = groupB.shift() || 0
    if (tempA !== tempB) {
      return tempA > tempB ? 1 : -1
    }
  }
  return 0
}

console.log(compare('1.0.0-rc.11', '1.0.0-rc.10'))
