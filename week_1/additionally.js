// For the following questions, make sure to include at least two tests for each function. For now, that means calling your function
//  with some values and printing out the answer. If you want to make Lloyd's life easier, print out the expected value as well.
// OK <-- remember this.

// Write a function that returns the area of a circle, given the radius. Hints: The area of a circle is "pi r 2". For pi, use Math.PI.
function CalCircleRadius (radius) {
	return Math.PI * radius * 2;
}

console.log(CalCircleRadius(2)); // not sure, I can't calculate PI in my head ;) Actually, it's between 12 and 13;
console.log(CalCircleRadius(5)); // between 30 - 32;

// Given a string, create a function that returns the last character in that string. example: "cattywampus" --> "s"
function lastLetter (string) {
	return string[string.length - 1];
}

console.log(lastLetter('woobalubbadubdub')); // 'b';
console.log(lastLetter('lksmadklasmd')); // 'd';

// Write a function that takes in one parameter "length" and prints out that many stars. example: 3 --> *** 5 --> *****
function starString (length) {
	var result = '';
	for (var i = 0; i < length; i++) {
		result += '*';
	}
	return result;
}
console.log(starString(4)); // ****
console.log(starString(2)); // **

// alternative approach
function gijsManier (length) {
	for (var result = '*'; result.length <= length; result += "*") {
		if (result.length === length) {
			return result;
		}
	}
}
console.log(gijsManier(5)); //*****
console.log(gijsManier(7)); //*******

// Now, write a function that takes in one parameter "length" and prints out a square of stars. examples:
function starSquare (length) {
	var result = '';
	for (var x = 0; x < length; x++) {
		var tempResult = '';
		for (var i = 0; i < length; i++) {
			tempResult += '*';
		}
		result += tempResult + ' '; 
	}
	return result;
}

console.log(starSquare(2)); // ** **
console.log(starSquare(4)); // **** **** **** ****

// Given an array of integers, write a function that finds the average and returns it.
function arrayAverage (intArray) {
	var sum = 0;
	var result = 0;
	for (var i = 0; i < intArray.length; i++) {
		sum += intArray[i];
	}
	result = sum / intArray.length;
	return result;
}

console.log(arrayAverage([1,2,3])); // 2
console.log(arrayAverage([6,3,0])); // 3

// examples: [1,2,3] --> 2 [1,2,4] --> 2.3333

// OPTIONAL CHALLENGE
// Write a function that takes in two arrays of integers and returns the largest common integer. If there are no common integers, return 'undefined'.
// example: [5, 10, 2], [3, 5, 7] returns 5 [8, 7, 6], [1, 2, 8, 200] returns 8

function findLargestSimilar (numbArray1, numbArray2) {
	var largestSimilar = 0;
	for (var i = 0; i < numbArray1.length; i++) {
		// console.log('outer loop rotation ' + i);
		for (var x = 0; x < numbArray2.length; x++) {
			// console.log('inner loop rotation ' + x);
			if (numbArray1[i] === numbArray2[x] && numbArray1[i] > largestSimilar) {
				largestSimilar = numbArray1[i];
			}
		}
	}
	return largestSimilar;
}

console.log(findLargestSimilar([2,4,87,5],[201,2,87,5])); // 87;
console.log(findLargestSimilar([65,1314,312,53,231,231], [65,1321,413,52,544,5251,52513,231])) // 231



