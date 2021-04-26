/* Find the largest three distinct elements in an array
Difficulty Level : Easy
Last Updated : 09 Mar, 2021
Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1). 
Examples :

Input: arr[] = {10, 4, 3, 50, 23, 90}
Output: 90, 50, 23 */

var getLargestThreeElements = (arr) => {
	arr.sort((a,b)=>b-a);
	var set = new Set(arr);
	arr = Array.from(set);
	return arr.slice(0,3).join(", ");
}
console.log(getLargestThreeElements([10, 4, 3, 50, 23, 90]));
console.log(getLargestThreeElements([10, 4, 3, 50, 23, 23, 90, 90]));