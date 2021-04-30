/* Largest Sum Contiguous Subarray
Difficulty Level : Medium
Last Updated : 15 Apr, 2021
Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers that has the largest sum. 
Example : 
arr = [-2,-3,4,-1,-2,1,5,-3]
result : 7 */

var getFirstPositiveIndex = (arr) => {
	let arrLen = arr.length;
	let index;
	for(let i=0; i<arrLen; i++){
		if(arr[i]>0){
			index = arr.indexOf(arr[i]);
			break;
		}
	}
	return index;
}

var getLargestContiguosSum = (arr) => {
	let firstPosIndex = getFirstPositiveIndex(arr);
	console.log("firstPosIndex : "+firstPosIndex);
	let lastPosIndex = arr.length-getFirstPositiveIndex(arr.reverse());	
	arr.reverse();
	console.log("lastPosIndex : "+lastPosIndex);
	let newArray = arr.slice(firstPosIndex,lastPosIndex);
	console.log("newArray : "+newArray);
	let newArrayLen = newArray.length;
	console.log("newArrayLen : "+newArrayLen);
	let max = Math.max(...newArray);
	console.log("max : "+max);
	var sum = 0;
	for(let i=0; i<newArrayLen; i++){
		sum+=newArray[i];
		console.log("sum : "+sum);
		if(sum<=0){
			sum = 0
		}	
	}
	if(sum < max){
		sum = max;
	}
	return sum;
}

console.log(getLargestContiguosSum([-2,-3,4,-1,-2,1,5,-3]));