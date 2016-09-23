// "Write a program that prints the numbers from 1 to 100. 
// But for multiples of 3 print Fizz instead of the number and for the multiples of 5 print Buzz. 
// For numbers which are multiples of both 3 and 5 print FizzBuzz."

var functions = {
	checkIfModuloZero: function (number, modulo) {
		if (number % modulo === 0) {
			return true;
		} else {
			return false;
		}
	},
	countTo: function (number) {
		for (i = 1; i <= number; i++) {
			if (functions.checkIfModuloZero(i,3) && functions.checkIfModuloZero(i,5)) {
				console.log('FizzBuzz');
			}
			else if (functions.checkIfModuloZero(i,3)) {
				console.log('Fizz');
			}
			else if (functions.checkIfModuloZero(i,5)) {
				console.log('Buzz');
			}
			else {
				console.log(i);
			}
			// console.log(functions.countTo());
		}
	} 
}

functions.countTo(100);