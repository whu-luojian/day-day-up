/**
 * 排序算法实现（从小到大）
 * const arr = [6, 5, 4, 1, 2, 3]
 * 排序的稳定性：
 * 假定在待排序的记录序列中，存在多个具有相同的关键字的记录，
 * 若经过排序，这些记录的相对次序保持不变，即在原序列中，r[i]=r[j]，
 * 且r[i]在r[j]之前，而在排序后的序列中，r[i]仍在r[j]之前，则称这种排序算法是稳定的；
 * 否则称为不稳定的。
 */


/**
 * 1. 冒泡排序
 * 稳定排序
 * 空间复杂度：O(1)
 * 时间复杂度 O(n^2)，最优 O(n)
 */

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let hasSwap = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        hasSwap = true
      }
    }
    if (!hasSwap) {
      break
    }
  }
  return arr
}

// console.log(bubbleSort([6, 5, 4, 1, 2, 3]))

/**
 * 快速排序
 * 不稳定排序
 * 基于递归
 * 实现方式一：取数组中间值为基准，循环数组其他值，大于基准的放到
 * right数组，小于基准的放到left数组，再递归排序、合并left数组、
 * 基准和right数组
 * 平均时间复杂度：O(n * logn)
 * 空间复杂度：O(n * logn)
 */

const quickSort = (arr: number[]): any[] => {
  if (arr.length <= 1) {
    return arr
  }
  const len = arr.length
  const index = Math.floor(len >> 1)
  const pivot = arr.splice(index, 1)[0]
  const left = []
  const right = []
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

// console.log(quickSort([6, 5, 4, 1, 2, 3]))

/**
 * 插入排序（类似抓牌）
 * 稳定排序
 * 构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
 */

const insertSort = (arr: number[]) => {
  const len = arr.length
  let current
  let prev
  for (let i = 1; i < len; i++) {
    current = arr[i]
    prev = i - 1
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev]
      prev--
    }
    arr[prev + 1] = current
  }
  return arr
}

// console.log(insertSort([6, 5, 4, 1, 2, 3]))

/**
 * 选择排序
 * 首先将最小的元素存放在序列的起始位置，再从剩余未排序元素中继续寻找最小元素
 * 然后放到已排序的序列后面，直至所有元素排序完毕。
 */

const selectSort = (arr: number[]) => {
  const len = arr.length
  let temp
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; i < len; j++) {
      // <= 时为不稳定排序，< 时为稳定排序
      if (arr[j] <= arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// console.log(selectSort([6, 5, 4, 1, 2, 3]))

/**
 * 归并排序
 * 稳定排序
 * 分治
 */

const mergeSort = (arr: number[]): number[] => {
  // 合并两个有序数组
  const merge = (left: number[], right: number[]): number[] => {
    let result = []
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    return result.concat(left, right) as number[]
  }
  const sort = (arr: number[]): number[] => {
    if (arr.length === 1) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(sort(left), sort(right))
  }
  return sort(arr)
}

console.log('ms', mergeSort([6, 5, 4, 1, 2, 3]))

/**
 * 堆排序
 * 堆是一颗完全二叉树，根节点最大的堆叫做大根堆，根节点最小的堆叫做小根堆
 * 排序前先建堆，如果父节点的序号为 n, 那么叶子节点的序号就分别是 2n + 1 和 2n + 2
 * 
 */

const heapSort = (arr: number[]) => {
  let len = arr.length
  let temp
  // 将数组映射成一棵二叉树，如果父节点的序号为 n, 那么叶子节点的序号就分别是 2n + 1 和 2n + 2
  // 则最后一个非叶子节点的值应该为 Math.floor(len / 2) - 1
  const lastParentIndex = Math.floor(len / 2) - 1
  for(let i = lastParentIndex; i >=0; i--) {
    adjustHeap(arr, i, len)
  }

  // 将堆顶元素和末尾元素交换，将最大元素沉到数组末端
  // 重新调整结构，使其满足堆条件，然后继续交换堆顶元素和当前末尾元素
  // 反复执行调整+交换步骤，直到整个序列有序
  for (let j = len - 1; j > 0; j--) {
    temp = arr[j]
    arr[j] = arr[0]
    arr[0] = temp
    adjustHeap(arr, 0, j)
  }
  return arr
}

/**
 * 以 i 对应的非叶子节点将一个数组调整为堆
 * @param arr 要调整的数组
 * @param i 非叶子节点在数组中的索引
 * @param len 对多少个元素进行调整，len 是在逐渐减少的
 */
const adjustHeap = (arr: number[], i: number, len: number) => {
  // 先取出当前元素，保存在临时变量
  let temp = arr[i]
  // 调整非叶子节点的顺序时从下到上，从左到右
  // k = i * 2 + 1 是 i 节点的左子节点
  for (let k = i * 2 + 1; k < len; k = k * 2 + 1) {
    // 如果左子节点的值小于右子节点的值
    if (k + 1 < len && arr[k] < arr[k + 1]) {
      // k++，k指向右子节点
      k++
    }
    // 如果子节点大于父节点
    if (arr[k] > temp) {
      // 将较大值赋值给当前节点
      arr[i] = arr[k]
      // i 指向 k，继续循环比较，使得以 i 为顶点的局部二叉树满足大顶堆的条件
      i = k
    } else {
      break
    }
    arr[i] = temp
  }
}

console.log('hs', heapSort([6, 5, 4, 1, 2, 3]))
 