/* Program to cyclically rotate an array by one
Difficulty Level : Basic
Last Updated : 26 Mar, 2021
Given an array, cyclically rotate the array clockwise by one. 
Examples: 
 

Input:  arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4} */

var rotateArray = (arr, x) => {
	for(var i=0; i<arr.length-x; i++){
		for(var j=0; j<arr.length-1; j++){					
			var temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp
		}
	}
	return arr;	
}
console.log(rotateArray([1, 2, 3, 4, 5],1));