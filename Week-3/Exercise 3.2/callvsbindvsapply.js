var obj = {
    num: 100
}
var add = function (a, b, c) {
  return this.num + a + b + c;
}

// call
var result = add.call(obj, 1, 2, 3) 
console.log(result) 

// apply
const arr = [1, 2, 3]
var result = add.apply(obj, arr)
console.log(result) 

// bind
var result = add.bind(obj) 
console.log(result(1, 2, 3)) 