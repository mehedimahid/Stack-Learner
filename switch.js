var date = new Date()
var today = date.getDay()

switch(today){
	case 0:
		console.log("Today is the Sunday ")
		break
	case 1:
		console.log("Today is the Monday ")
		break
	case 2:
		console.log("Today is the Tuesday ")
		break
	case 3:
		console.log("Today is the Wednesday ")
		break
	case 4:
		console.log("Today is the thursday ")
		break
	case 5:
		console.log("Today is the Friday ")
		break
	case 6:
		console.log("Today is the Saturday ")
		break
	default: console.log(" Not a valid Number")
}