/**
 * 给定一个 dom 元素，生成 dom 的唯一 css 选择器
 */

enum NODE_TYPE {

}

// 获取元素所在父级 children 的索引
const getDomIndex = (el: HTMLElement): number => {
  if (!el.parentNode) {
    return -1
  }
  const list = el.parentNode.children
  if (!list) {
    return -1
  }
  return Array.prototype.indexOf.call(list, el)
}

// 生成元素的 selector，用于拼接
const getSelector = (el: HTMLElement): string => {
  if (el.id) {
    return '#' + el.id
  } else {
    const i = getDomIndex(el)
    return el.tagName.toLowerCase() + (i >= 0 ? `:nth-child(${i + 1})` : '')
  }
}

// 生成元素唯一选择器
const getDomUniqueSelector = (el: HTMLElement, arr: string[] = []): string => {
  if (!el || !el.parentNode || !el.parentNode.children) {
    return ''
  }
  const name = el.nodeName.toLowerCase()

  if (name === 'body') {
    arr.unshift('body')
    return arr.join('>')
  }

  arr.unshift(getSelector(el))

  if (el.id) {
    return arr.join('>')
  }

  return getDomUniqueSelector(el.parentNode as HTMLElement, arr)
}
