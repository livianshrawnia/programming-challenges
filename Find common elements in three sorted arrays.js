/* Find common elements in three sorted arrays
Difficulty Level : Easy
Last Updated : 06 Apr, 2021
Given three arrays sorted in non-decreasing order, print all common elements in these arrays.

Examples: 

Input: 
ar1[] = {1, 5, 10, 20, 40, 80} 
ar2[] = {6, 7, 20, 80, 100} 
ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
Output: 20, 80

Input: 
ar1[] = {1, 5, 5} 
ar2[] = {3, 4, 5, 5, 10} 
ar3[] = {5, 5, 10, 20} 
Output: 5, 5 */

var getCommonElementsInThreeSortedArrays = (arr1, arr2, arr3) => {
	var commonElements = [];
	for(var i=0; i<arr1.length; i++){	
	var match = [false, false];
	for(var j=0; j<arr2.length; j++){
		if(arr1[i]===arr2[j]){
			match[0] = true;
			break;
		}		
	}
	if(match[0] !== true){
		continue;
	}
	for(var k=0; k<arr3.length; k++){
		if(arr1[i]===arr3[k]){
			match[1] = true;
			break;
		}	
	}
	if(match[1] !== true){
		continue;
	}
	commonElements.push(arr1[i]);
}
return commonElements.join(", ");
}

console.log(getCommonElementsInThreeSortedArrays([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]));
console.log(getCommonElementsInThreeSortedArrays([1, 5, 5], [3, 4, 5, 5, 10], [5, 5, 10, 20]));