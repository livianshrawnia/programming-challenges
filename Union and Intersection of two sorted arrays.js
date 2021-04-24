/* Union and Intersection of two sorted arrays
Difficulty Level : Easy
Last Updated : 30 Oct, 2020
Given two sorted arrays, find their union and intersection.
Example:

Input : arr1[] = {1, 3, 4, 5, 7}
        arr2[] = {2, 3, 5, 6} 
Output : Union : {1, 2, 3, 4, 5, 6, 7} 
         Intersection : {3, 5}

Input : arr1[] = {2, 5, 6}
        arr2[] = {4, 6, 8, 10} 
Output : Union : {2, 4, 5, 6, 8, 10} 
         Intersection : {6} */
	
var arr1 = [2, 5, 6];	
var arr2 = [4, 6, 8, 10];
var mergedArray = [...arr1, ...arr2].sort((a,b)=>a-b);
var intersectionArray = [];
var unionArray = [];
for(var i=0; i<mergedArray.length; i++){
	if(mergedArray[i] === mergedArray[i+1]){
		intersectionArray.push(mergedArray[i]);
	}else{		
		unionArray.push(mergedArray[i]);
	}		
}
console.log("Union : "+unionArray);
console.log("Intersection : "+intersectionArray);