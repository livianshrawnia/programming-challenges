/* Maximum Product Subarray
Difficulty Level : Hard
Last Updated : 08 Apr, 2021
Given an array that contains both positive and negative integers, find the product of the maximum product subarray. Expected Time complexity is O(n) and only O(1) extra space can be used.

Examples:

Input: arr[] = {6, -3, -10, 0, 2}
Output:   180  // The subarray is {6, -3, -10}

Input: arr[] = {-1, -3, -10, 0, 60}
Output:   60  // The subarray is {60}

Input: arr[] = {-2, -40, 0, -2, -3}
Output:   80  // The subarray is {-2, -40} */

 var getSubArrayProduct = (arr) => {
	 arr = arr.map(item => Math.abs(item));
	 console.log("arr : ", arr);
	 let maxIntIdx = arr.indexOf(Math.max(...arr))+1;	 
	 console.log("maxIntIdx : ", maxIntIdx);
	 let subArr = arr.slice(0,maxIntIdx);	
	 console.log("subArr : ", subArr);
	 let newArr = [];
	 for(var i=subArr.length-1; i>=0; i--){
		if(subArr[i] === 0) break;
		newArr.push(subArr[i]);
	 }
	 if(newArr.length === 0) newArr = [0];
	 console.log("newArr : ", newArr);
	 let result = newArr.reduce((a,b)=>a*b);
	 console.log("result : ", result);
	 return result;
 }
 
 console.log(getSubArrayProduct([6, -3, -10, 0, 2]));
 console.log(getSubArrayProduct([-1, -3, -10, 0, 60]));
 console.log(getSubArrayProduct([-2, -40, 0, -2, -3]));
 console.log(getSubArrayProduct([6, 0, -3, -10, 0, 2])); 
 console.log(getSubArrayProduct([0,0,0,0,0]));
 console.log(getSubArrayProduct([0,0,0, -10, 0, 0]));