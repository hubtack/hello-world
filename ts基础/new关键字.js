// 创建了一个函数Animal，并在其this上定义了属性:name,
// name 值是函数被执行时的形参
function Animal(name) {
  this.name = name
}

// Animal对象（Animal本身是一个函数对象）上定义了一个静态属性:color,并赋值“black”
Animal.color = 'black'

// 在Animal函数的原型对象prototype上定义了一个say()方法，say方法输出了this的name值
Animal.prototype.say = function () {
  console.log("I'm " + this.name)
}

// Animal对象尝试访问name和color属性，并调用say方法
console.log(
  Animal.name, //Animal
  Animal.color //back
)
// Animal.say() //Animal.say is not a function

// 通过new关键字创建了一个新对象cat
var cat = new Animal('cat')

// height
console.log(
  cat.name, //cat
  cat.color,
  cat.height //undefined
)
cat.say() //I'm cat
