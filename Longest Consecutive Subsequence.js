/* Longest Consecutive Subsequence
Difficulty Level : Medium
Last Updated : 17 Feb, 2021
Given an array of integers, find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order. 

Examples:  

Input: arr[] = {1, 9, 3, 10, 4, 20, 2}
Output: 4
Explanation: 
The subsequence 1, 3, 4, 2 is the longest 
subsequence of consecutive elements

Input: arr[] = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42}
Output: 5
Explanation: 
The subsequence 36, 35, 33, 34, 32 is the longest 
subsequence of consecutive elements. */

var getLongestConsecutiveSubsequence = (arr) => {
	let sortedArr = arr.sort((a,b)=>a-b);
	console.log("sortedArr : ", sortedArr);
	let newArr = [];
	let count = 1;
	for(let i=0; i<sortedArr.length; i++){
		console.log("sortedArr[i]+1 : ", sortedArr[i]+1, "sortedArr[i+1] : ", sortedArr[i+1]);
		if(sortedArr[i]+1==sortedArr[i+1]){
			count++;
		}else{
			newArr.push(count);
			console.log("count : ", count);			
			count = 1;
		}
	}	
	console.log("newArr : ", newArr);
	let result = Math.max(...newArr);
	console.log("result : ", result);
	return result
}

console.log(getLongestConsecutiveSubsequence([1, 9, 3, 10, 4, 20, 2]));
console.log(getLongestConsecutiveSubsequence([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]));
console.log(getLongestConsecutiveSubsequence([1, 9, 3, -10, 4, -20, 2]));
console.log(getLongestConsecutiveSubsequence([0,0,0,0,-2]));