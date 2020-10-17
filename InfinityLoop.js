for (; ;) {
	var rand = Math.floor(Math.random() * 10 + 1)
	if (rand === 9) {
		console.log('winner winner chicken dinner')
		break
	} else {
		console.log('you got ' + rand)
	}
}