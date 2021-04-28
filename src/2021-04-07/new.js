/**
 * 怎么判断一个函数是在 new , 比如 new f
 * this instanceof f 判断不了 f.call(f) 这种情况，es6 new.target
 * 
 * new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的。
 * 在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用。
 * 在普通的函数调用中，new.target 的值是undefined。
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target
 */