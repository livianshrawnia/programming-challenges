/* Given an array of size n and a number k, find all elements that appear more than n/k times
Difficulty Level : Hard
Last Updated : 27 Apr, 2021
Given an array of size n, find all elements in array that appear more than n/k times. 
For example, if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4, then the output should be [2, 3]. 
Note that size of array is 8 (or n = 8), so we need to find all elements that appear more than 2 (or 8/4) times. 
There are two elements that appear more than two times, 2 and 3.  */

var findElements = (arr, k) => {
	let arrLen = arr.length;
	console.log("arrLen : ", arrLen);
	let t = arrLen/k;
	console.log("t : ", t);
	let uniqueArr = Array.from(new Set(arr));
	console.log("uniqueArr : ", uniqueArr);
	console.log("arr : ", arr);
	let newArr = [];
	for(let i=0; i<uniqueArr.length; i++){
		let num = 0;
		for(let j=0; j<arrLen; j++){
			if(uniqueArr[i]===arr[j]){
				newArr[uniqueArr[i]+""] = [uniqueArr[i],++num]
			}
		}
	}
	console.log("newArr : ", newArr);
	let result = newArr.filter(item=>item[1]>t).map(item=>item[0]);
	console.log("result : ", result);
	return result.join(",");
}

console.log(findElements([3, 1, 2, 2, 1, 2, 3, 3], 4));
console.log(findElements([3, 1, 2, 2, 1, 5, 3, 3, 4, 5], 4));