/* Non-Repeating Element
Difficulty Level : Easy
Last Updated : 16 Apr, 2020
Find the first non-repeating element in a given array of integers.

Examples:

Input : -1 2 -1 3 2
Output : 3
Explanation : The first number that does not 
repeat is : 3

Input : 9 4 9 6 7 4
Output : 6 */

var getFirstNonRepeatingElement = (arr) => {
	var num;	
	arr.sort((a,b)=>a-b);
	for(var i=0; i<arr.length; i++){
		var match = false;
		for(var j=0; j<arr.length; j++){
			if(i===j){
				continue;
			}
			if(arr[i]===arr[j]){
				match = true
				break;
			}
		}
		if(!match){
			num = arr[i];
			break;
		}
	}
	return num;
} 

console.log(getFirstNonRepeatingElement([-1, 2, -1, 3, 2]));
console.log(getFirstNonRepeatingElement([9, 4, 9, 6, 7, 4]));