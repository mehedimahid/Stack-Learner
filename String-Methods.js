var a = 'I am'
var b = 'MH Hasan'

var c = a.concat(' ', b) //line ke add korar jonno cocat beboher hoy
console.log(c)

var d = c.substr(8 , 3)  //(start, length)   substring(start, end)
console.log(d)

console.log(c.charAt(5)) 	//5 number character kn word  
console.log(c.startsWith('I am'))
console.log(c.endsWith('Hasan'))
console.log(a.toUpperCase())
console.log(b.toLowerCase())
console.log('	abcdefgh	')
console.log('	abcdefgh   	'.trim())
console.log(c.split("  "))
