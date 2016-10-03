// write a function that takes in three parameters and returns the sum of those three parameters
function add (parm1, parm2, parm3) {
	return parm1 + parm2 + parm3;
}
console.log(add(2,53,1)); // 56
console.log(add(8932,21,2)); // 8955


// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s
function lastChar (string) {
	return string[string.length -1];
}

console.log(lastChar('hallo')); // o
console.log(lastChar('lksamlkdmwlqm')); // m
	

// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64
function cubify (number) {
	return number * number * number;
}
console.log(cubify(3)); // 27
console.log(cubify(6)); // 216


// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)
function reverse (string) {
	for (var i = string.length -1, result = ''; i >= 0; i--) {
		result += string[i];
	}
	return result;
}
console.log(reverse('moooo')); // oooom
console.log(reverse('apple')); // elppa


// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }
(function() {
var array1 = ['best', 'day', 'ever']
var array2 = ['apples', 'Friday', 'math'];
function arraysIntoObj (array1, array2) {
	for (var i = 0, result = {}; i < array1.length; i++) {
		result[array1[i]] = array2[i];
	}
	return result;
}
console.log(arraysIntoObj(array1, array2)); // {best: 'apples', day: 'Friday', ever: 'math'}
console.log(arraysIntoObj(array2, array1)); // {apples: 'best', Friday: 'day', math: 'ever'}
}());

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }
(function() {
var object1 = { a: "x", b: "y", c: "z" };
var object2 = { key1: 'value1', key2: 'value2', key3: 'value3'}
function objIntoArrays (object) {
	var objKeys = [], objValues = [], result = {};
	for (var keys in object) {
		objKeys.push(keys);
		objValues.push(object[keys]);
	} 
	result['keys'] = objKeys;
	result['values'] = objValues;
	return result;
}
console.log(objIntoArrays(object1)); // { keys: ["a", "b", "c"], values: ["x", "y", "z"] }
console.log(objIntoArrays(object2)); // { keys: ["key1", "key2", "key3"], values: ["value1", "value2", "value3"] }
}());


// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions
function toThePowerOf (x, n) {
	// console.log(x ** n);
	for (var i = 1, result = x; i < n; i++ ) {
		result *= x;
	}
	return result;
}
toThePowerOf(2,6); // 64
toThePowerOf(4,4);  // 256


// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

