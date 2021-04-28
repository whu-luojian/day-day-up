function test() {
  var value = 1
  function add() {
    this.value++
  }
  const add2 = () => {
    this.value++
  }
  return {
    value,
    add,
    add2
  }
}

var t = test()
var add = t.add
add()
console.log(t.value) // 1
t.add()
console.log(t.value) // 2
t.add2()
console.log(t.value) // 2
var add2 = t.add2
add2()
