/**
 * 如果有n个接口，需要按接口顺序渲染dom，怎么实现（提供 get(id)，render(id) 方法）
 * 解读：接口返回顺序会不一致
 */

 const get = (id: number) => {
   return new Promise((resolve) => {
    setTimeout(() => {
      console.log('get: ', id)
      resolve(id)
    }, 5000 / id)
   })
 }

const render = (data: any) => {
  console.log('render:', data)
}

const renderUI = async (ids: number[]) => {
  const dataArr = ids.map(id => new Promise((resolve) => resolve(get(id))))
  for (let i = 0; i < dataArr.length; i++) {
    const data = await dataArr[i]
    render(data)
  }
}

renderUI([1, 2, 3, 4, 5])
