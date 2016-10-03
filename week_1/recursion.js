

// var factor = function(number) {
//   var result = 1;
//   var count;
//   for (count = number; count > 1; count--) {
//     result *= count;
//   }
//   return result;
// };
// console.log(factor(6));
// // 720

function factor (number) {
	var result = 1;
	var count;
	for (count = number; count > 1; count--) {
		result *= count;
	}
	return result;
}

factor (3);

/*
var result = 1;
var count = 0;
count = 3;
loop as long count > 1, so 3 times.
count--
loop iteration 1:
	1 *= 3;
	result = 3;
loop iteration 2:
	3 *= 2;
	result = 6;
loop iteration 3:
	6 *= 1;
	result = 6;
return 6;
*/

// factor of 3 = 3 * 2 * 1;
// factor of 6 = 6 * 5 * 4 * 3 * 2 * 1;


// DYNAMIC VARIABLES
// Save to object[i].
/*
base = array;
loop 1: array [i]
loop 2: array [i][x]
loop 3: array [i][x][y]
in other words: self + new counter;

var current = array;
current = current[i]

function test () {
	var memory = {}
	for (var i = 0; i < 3; i++) {
		memory[i] = i;
	}
	console.log(memory);
}

var counter = 0;
var i = 1;
var counter + i = 2;



*/