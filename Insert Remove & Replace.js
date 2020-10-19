var arr = [1, 2, 3, 4, 5, 6, 7,]


					//Insert

// arr[3] = 44
// arr.push(8) 					//sese kno kisu bosaite push hobe
// arr.unshift(8)				//first kno kisu bosaite unshift hobe

// arr.splice(3, 0, 8, 9)		//splice(index number,kotota delete , ki ki bosbe)			** Insert Remove


					//Remove

// arr[3] = undefined			//delete hobe tobe length tik takbe	
// arr[3] = null					//delete hobe tobe length tik takbe
// arr.pop()					//last element delete
// arr.shift()					//first element delete

// arr.splice(3, 2)
arr.splice(3, 1, 44)					

console.log(arr)