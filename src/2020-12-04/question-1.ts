/**
 * 实现一个请求函数 function ajax(url, wait, count), 在 wait 时间内无结果则进行重试，最多重试 count 次。
 * 要求不使用 xhr 的 timeout 属性。如果 wait 的时间要尽可能排除掉 xhr pending 的时间可以怎么做
 */

 // todo? 无结果是什么意思？

const ajax = (url: string, wait: number, count: number) => {
  let xhr = new XMLHttpRequest()
  xhr.onloadend = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
      } else {
        console.log(xhr.statusText)
      }
    } else {

    }
  }
  xhr.onloadstart = () => {

  }
  xhr.open('GET', url, true)
  xhr.send(null)
}
