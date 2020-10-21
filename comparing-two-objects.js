var point = {
	x : 10,
	y : 20
}

var point2 = {
	x : 10,
	y : 20
}

console.log(point === point2) 					//return false



if (point.x === point2.x && point.y === point2.y) {						//return true
	console.log(true)
} else {
	console.log(false)

}

console.log(point)
console.log(JSON.stringify(point))

console.log(JSON.stringify(point) === JSON.stringify(point2))