/**
 * 图片懒加载
 */

const imgList = [...document.querySelectorAll('img')]
let len = imgList.length
let count = 0

const imageLazyLoad = function() {
  let loadedList = []
  imgList.forEach((img, i) => {
    let rect = img.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      img.src = img.dataset.src
      loadedList.push(i)
      count++
      if (count === len) {
        document.removeEventListener('scroll', imageLazyLoad)
      }
    }
  })
  imgList = imgList.filter((v, i) => !loadedList.includes(i))
}

document.addEventListener('scroll', imageLazyLoad)