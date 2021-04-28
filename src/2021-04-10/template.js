/**
 * 实现一个简单的模板引擎
 *  let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
    let person = {
        name: '布兰',
        age: 12
    }
    render(template, person); // 我是布兰，年龄12，性别undefined
*/

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}'
let person = {
    name: '布兰',
    age: 12
}

const render = (template, data) => {
  return template.replace(/{{(.+?)}}/g, function(item, exp) {
    console.log(item, exp)
    const fn = new Function('data', `with(data){return ${exp}}`)
    return fn(data)
  })
}
