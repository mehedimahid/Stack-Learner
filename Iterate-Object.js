var obj = {
	x : 30,
	y : 50,
	z : 65
}

console.log('x' in obj)
console.log('c' in obj)

for(var i in obj){
	
	console.log(i)
	console.log(i + ' : ' + obj[i])
}