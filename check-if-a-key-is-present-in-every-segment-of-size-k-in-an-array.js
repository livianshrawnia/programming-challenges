/* Input : 
arr[] = { 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3} 
x = 3 
k = 3 
Output : Yes 
There are 4 non-overlapping segments of size k in the array, {3, 5, 2}, {4, 9, 3}, {1, 7, 3} and {11, 12, 3}. 3 is present all segments.
Input : 
arr[] = { 21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25} 
x = 23 
k = 5 
Output :Yes 
There are three segments and last segment is not full {21, 23, 56, 65, 34}, {54, 76, 32, 23, 45} and {21, 23, 25}. 
23 is present all window.
Input :arr[] = { 5, 8, 7, 12, 14, 3, 9} 
x = 8 
k = 2 
Output : No */

var checkKeyExistInArraySegment = (arr, x, k) => {
	var str = "Yes";
	for(var i=0; i<arr.length; i+=k){
		if(!arr.slice(i,k+i).includes(x)){
			str = "No";
			break;
		}
	}
	return str;
}
console.log(checkKeyExistInArraySegment([5, 8, 7, 12, 14, 3, 9], 3, 3));