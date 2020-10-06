// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person);


// var n = 5;

// if(n > 0){
// 	var result ="this number "+n+" is positive"
// 	// console.log("this number "+n+" is positive")
// }else{
// 	var result ="this number "+n+" is negative"
// 	// console.log("this number "+n+" is negative")
// }

// console.log(result);

// var person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// var person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }
// var ans = person1.fullName.call(person2);
// console.log(ans);


// 											//Global scope 
// var x = 10;

// function doSomething(){
// 	x = 5 						
// 	console.log("inside Function", x) //return = 5
// }
// doSomething();
// console.log("outside Function", x);	//return = 5

										
// 											//local scope
// var i = 10;

// function doSomeThing(){
// 	var i = 5				
// 	console.log("inside Function", i)  //return = 5
// }
// doSomeThing();
// console.log("outside Function", i);		//return = 10


// 															//Let
// let i = 10;

// function doSomeThing(){
// 	 i = 5				
// 	console.log("inside Function", i)  //return = 5
// }
// doSomeThing();
// console.log("outside Function", i);		//return = 5


											//local scope
let i = 10;

function doSomething(){
	let i = 5				
	console.log("inside Function", i)  //return = 5
}
doSomething();
console.log("outside Function", i);		//return = 10


const pi = 3.1416;
console.log(pi);





