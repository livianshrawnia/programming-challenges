/* Rearrange array in alternating positive & negative items with O(1) extra space | Set 1
Difficulty Level : Hard
Last Updated : 10 Mar, 2021
Given an array of positive and negative numbers, arrange them in an alternate fashion such that every positive number is followed by negative and vice-versa maintaining the order of appearance. 
Number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear in the end of the array.

Examples : 

Input:  arr[] = {1, 2, 3, -4, -1, 4}
Output: arr[] = {-4, 1, -1, 2, 3, 4}

Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0} */

var getFirstNegativeNumber = (index, arr) => { //get first negative number
	let neg;
	for(let i=index; i<arr.length; i++){
		if(arr[i]<0){
			neg = arr[i];
			break;
		}
	}
	return neg;
}
var getFirstPositiveNumber = (index, arr) => { //get first positive number
	let pos;
	for(let i=index; i<arr.length; i++){
		if(arr[i]>=0){
			pos = arr[i];
			break;
		}
	}
	return pos;
}
var traverseArray = (index, arr) => { // traverse array
	for(let j=0; j<=index; j++){
		for(let i=0; i<arr.length-1; i++){
			let temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	} 
	return arr;
}

var getAlternatePosNegArray = (arr) => {
	for(let i=0; i<arr.length; i++){
		if(i%2===0){ //Require negative number at even index
			console.log("Even element : "+arr[i]);
			if(arr[i]>=0){ // if even index has positive number then replace with negative number
				console.log("Even element has positive number: "+arr[i]);
				let neg = getFirstNegativeNumber(i, arr);				
				console.log("First negative number: "+neg);
				if(neg !== undefined){
					let negNumIndex = arr.indexOf(neg);
					console.log("negNumIndex: "+negNumIndex);
					let splitedArray = arr.slice(i, negNumIndex+1);
					console.log("splitedArray: "+splitedArray);
					negNumIndex = splitedArray.indexOf(neg);
					let traversedArray = traverseArray(negNumIndex-1, splitedArray);
					console.log("traversedArray: "+traversedArray);					
					arr.splice(i,traversedArray.length,...traversedArray);
					console.log("Main arr: "+arr);
				}
			}		 
		}else{ // Require positive number at odd index
			console.log("Odd element : "+arr[i]);
			if(arr[i]<0){
				console.log("Odd element has negative number: "+arr[i]);
				let pos = getFirstPositiveNumber(i, arr);
				console.log("First positive number: "+pos);
				if(pos !== undefined){
					let posNumIndex = arr.indexOf(pos);
					console.log("posNumIndex: "+posNumIndex);
					let splitedArray = arr.slice(i, posNumIndex+1);
					console.log("splitedArray: "+splitedArray);					
					posNumIndex = splitedArray.indexOf(pos);
					let traversedArray = traverseArray(posNumIndex-1, splitedArray);
					console.log("traversedArray: "+traversedArray);
					arr.splice(i,traversedArray.length,...traversedArray);
					console.log("Main arr: "+arr);
				}
			} 			
		}
		console.log("-----------------------------------------------");
	}
	return arr.toString();
}
console.log(getAlternatePosNegArray([1, 2, 3, -4, -1, 4]));
console.log(getAlternatePosNegArray([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));