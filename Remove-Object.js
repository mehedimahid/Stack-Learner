var point = {
	x : 10,
	y : 20
}
point.z = 30 
console.log(point)

point.x = 45
point.a = 50
console.log(point)

point['y'] = 100  //array akare dicliar

var prop = 'z'
point[prop] = 60
console.log(point)


															//Remove Object


point.a = undefined						//but a remove hoy na 	
console.log(point)						


delete point.a 							// Object Remove ar ketre delete properti beboher hoy
console.log(point)						
