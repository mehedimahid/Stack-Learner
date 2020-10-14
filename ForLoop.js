
//for(initializer; condition; increment)


var i;

for (var i = 0; i < 10; i++) {
	console.log((i + 1) + " Mehedi Hasan")
}

for (var i = 10; i >= 0; i--) {
	console.log(i)
	
}


for (var i = 1; i < 10; i++) {
	if (i % 2 === 1) {
		console.log(i + " is ODD Numbber")

	}
}


for (var i = 1; i < 10; i++) {
	if (i % 2 === 0) {
		console.log(i + " is EVEN Numbber")

	}
}


for (var i = 1; i < 10; i++) {
	if (i % 2 === 1) {
		console.log(i + " is ODD Numbber")
	}else{
		console.log(i + " is even Numbber")

	}
}


var sum = 0;
for (var i = 1; i <= 10; i ++) {
	console.log( sum  + " + "+ i + " = " + ( sum+i ))
	sum += i
}
console.log("return = " + sum)

var sum = 0;
for (var i = 2; i <= 10; i += 2) {
	console.log( sum  + " + "+ i + " = " + ( sum+i ))
	sum += i
}
console.log("1 - 10 even number sum  = " + sum)




