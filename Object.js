
//Object Literal vs constructor 

// var obj = {}
// bj.x = 10

// console.log(obj)
// console.log(typeof obj)

											//Object Literal

var point = {
	x : 10,
	y : 15
}
point.y = 20	//modified
point.z = 30 	//add
console.log(point)


											//Object constructor


var obj1 = Object()
obj1.a = 10

console.log(obj1)

var obj2 = new Object()
obj2.b = 20
console.log(obj2)