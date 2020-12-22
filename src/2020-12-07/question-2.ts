/**
 * 手写，模拟红绿灯：红灯3s，绿灯2s，黄灯1s，如此循环（async await）
 */

const delay = async (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

const light = async (color: string, duration: number) => {
  console.log(color)
  await delay(duration)
}

const trafficLight = async () => {
  await light('red', 3000)
  await light('green', 2000)
  await light('yellow', 1000)
  trafficLight()
}

trafficLight()
