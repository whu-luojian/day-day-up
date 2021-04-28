/**
 * 1
 * 3
 * 5
 * 7
 * 2
 * 6
 * 4
 */

async function async1() {
  console.log(1)
  await async2()
  console.log(2)
}

async function async2() {
  console.log(3)
}

async1()

setTimeout(() => console.log(4), 0)

new Promise(resolve => {
  resolve()
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)