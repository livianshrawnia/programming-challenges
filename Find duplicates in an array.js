/* Find duplicates in O(n) time and O(1) extra space | Set 1
Difficulty Level : Medium
Last Updated : 08 Apr, 2021
Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and using only constant memory space.

Example: 

Input : n = 7 and array[] = {1, 2, 3, 6, 3, 6, 1}
Output: 1, 3, 6

Explanation: The numbers 1 , 3 and 6 appears more
than once in the array.

Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
Output: 3

Explanation: The number 3 appears more than once
in the array. */

var getDuplicateNumbers = (arr) => {
	arr.sort((a,b)=>a-b);
	var duplicatesArr = [];
	for(var i=0; i<arr.length-1; i++){
		if(arr[i]===arr[i+1]) duplicatesArr.push(arr[i]);
	}
	return duplicatesArr.join(", ");
}
console.log(getDuplicateNumbers([1, 2, 3, 6, 3, 6, 1]));
console.log(getDuplicateNumbers([1, 2, 3, 4 ,3]));