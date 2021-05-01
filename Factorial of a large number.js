// Factorial of a large number
// Difficulty Level : Medium
// Last Updated : 09 Mar, 2021
// Factorial of a non-negative integer, is the multiplication of all integers smaller than or equal to n. For example factorial of 6 is 6*5*4*3*2*1 which is 720.

var getFactorialNumber = (num) => {
	let arr = [];
	for(let i=num; i>=1; i--){
		arr.push(i);
	}
	console.log("arr : ",arr);
	let fact = arr.reduce((a,b)=>a*b).toString();
	return fact;
}

console.log(getFactorialNumber(50));