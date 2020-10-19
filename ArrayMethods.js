var arr = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8]
// console.log(arr.join(', '))

// arr.fill(0)
// console.log(arr)

// var arr3 = arr.concat(arr2)
// console.log(arr3)


console.log(Array.isArray(arr))


var arr4 = Array.from(arr)
console.log(arr4)


var a = [1,2]
var b = a
b[0] = 5

console.log(a)

var a = [1,2]
var b = Array.from(a)
b[0] = 5

console.log(a)
console.log(b)
