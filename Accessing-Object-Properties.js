
var point = {
	x : 10,
	y : 15
}
point.y = 20	//modified
point.z = 30 	//add
console.log(point)
console.log(point.x)
console.log(point.y)
console.log(point.z)
console.log(point.z + point.x)
console.log(point['x'])

var show = 'x'
console.log(point[show])