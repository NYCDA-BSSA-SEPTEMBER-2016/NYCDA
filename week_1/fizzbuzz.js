// ASSIGNMENT
// "Write a program that prints the numbers from 1 to 100. 
// But for multiples of 3 print Fizz instead of the number and for the multiples of 5 print Buzz. 
// For numbers which are multiples of both 3 and 5 print FizzBuzz."


// global memory object
var memory = {
	0: [],
}

// global function object
var functions = {
	checkIfModuloZero: function (number, modulo) {
		if (number % modulo === 0) {
			return true;
		} else {
			return false;
		}
	},
	FizzBuzz: function (number) {
		// memory slot
		memory[0] = [];
		memory[0].push('FizzBuzz result');
		for (i = 1; i <= number; i++) {
			if (functions.checkIfModuloZero(i,3) && functions.checkIfModuloZero(i,5)) {
				memory[0].push('FizzBuzz');
			}
			else if (functions.checkIfModuloZero(i,3)) {
				memory[0].push('Fizz');
			}
			else if (functions.checkIfModuloZero(i,5)) {
				memory[0].push('Buzz');
			}
			else {
				memory[0].push(i);
			}
		}
		return 'FizzBuzz completed';
	} 
}

//executables
functions.FizzBuzz(100);
console.log(memory[0]);