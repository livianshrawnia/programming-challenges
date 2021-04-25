/* Count pairs with given sum
Difficulty Level : Medium
Last Updated : 19 Mar, 2021
Given an array of integers, and a number ‘sum’, find the number of pairs of integers in the array whose sum is equal to ‘sum’.

Examples:  

Input  :  arr[] = {1, 5, 7, -1}, 
          sum = 6
Output :  2
Pairs with sum 6 are (1, 5) and (7, -1)

Input  :  arr[] = {1, 5, 7, -1, 5}, 
          sum = 6
Output :  3
Pairs with sum 6 are (1, 5), (7, -1) &
                     (1, 5)         

Input  :  arr[] = {1, 1, 1, 1}, 
          sum = 2
Output :  6
There are 3! pairs with sum 2.

Input  :  arr[] = {10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1}, 
          sum = 11
Output :  9
Expected time complexity O(n) */

var getPairsOfSum = (arr, sum) => {
	var count = 0;
	for(var i=0; i<arr.length; i++){
		for(var j=i+1; j<arr.length; j++){
			if(arr[i]+arr[j] === sum){
				count++;
			}
		}
	}	
	return count;
}
console.log(getPairsOfSum([1, 5, 7, -1], 6));
console.log(getPairsOfSum([1, 5, 7, -1, 5], 6));
console.log(getPairsOfSum([1, 1, 1, 1], 2));
console.log(getPairsOfSum([10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1], 11));