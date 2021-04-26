/* Find the first repeating element in an array of integers
Difficulty Level : Easy
Last Updated : 03 Mar, 2021
Given an array of integers, find the first repeating element in it. We need to find the element that occurs more than once and whose index of first occurrence is smallest. 

Examples: 

Input:  arr[] = {10, 5, 3, 4, 3, 5, 6}
Output: 5 [5 is the first element that repeats]

Input:  arr[] = {6, 10, 5, 4, 9, 120, 4, 6, 10}
Output: 6 [6 is the first element that repeats] */

var getFirstRepeatingElement = (arr) => {
	var num;
	var match = false;
	for(var i=0; i<arr.length; i++){
		for(var j=i+1; j<arr.length; j++){
			if(arr[i]===arr[j]){
				num = arr[i];
				match = true;
				break;
			}
		}
		if(match) break;
	}
	return num;
} 

console.log(getFirstRepeatingElement([10, 5, 3, 4, 3, 5, 6]));
console.log(getFirstRepeatingElement([6, 10, 5, 4, 9, 120, 4, 6, 10]));