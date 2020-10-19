var arr = [1, 5, 8, 10, 15, 50, 60]
var found = 50
var isFound = false

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === found) {
		console.log('Data found at index number ' + i)
		isFound = true
		break
	}
}
if (!isFound) {
	console.log('Data not found')
}