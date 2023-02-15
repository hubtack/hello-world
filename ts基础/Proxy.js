const person = {
  like: 'vuejs'
}

const obj = new Proxy(person, {
  get: function (target, propKey) {
    debugger
    if (propKey in target) {
      return target[propKey]
    } else {
      throw new ReferenceError('Prop name "' + propKey + '" does not exist.')
    }
  }
})

console.log(obj.like) // vuejs
obj.test // Uncaught ReferenceError: Prop name "test" does not exist.
