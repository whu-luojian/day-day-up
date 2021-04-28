var name = '222'
var a = {
  name: '111',
  say: function() {
    console.log(this.name)
  }
}
var fun = a.say
fun() // 222
a.say() // 111

var b = {
  name: '333',
  say: function(fun) {
    fun()
  }
}

b.say(a.say) // 222
b.say = a.say
b.say() // 333