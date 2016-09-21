// FUNCTIONS
var functions = {
	add: function add(x,y) {
		return x + y;
	},
	constructPerson: function(a, b, c, d, e) {
		function Person(firstName, lastName, city, state, zip) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.city = city;
			this.state = state;
			this.zip = zip;
		} return new Person (a, b, c, d, e);
	},
	checkValue: function checkValue (x) {
		if (x < 10) {
			alert('Variable value is less than 10.')
		} else {
			alert("Variable value is " + x + ". Variable value is greater than 10.")
		}		
	},
	countBackToZero: function (x) {
		function countBackToZero(x) {
			while (x >= 0) {
				console.log(x);
				x--;
			}
		} countBackToZero(x);
	}
};

// PROBLEM 1	
function answerProblem1 () {
	alert('Hello World');
};

// PROBLEM 2
function answerProblem2 () {
	var int1 = 5;
	var int2 = 90;
	var answer = functions.add(int1, int2)
	console.log(answer);
};

// PROBLEM 3
function answerProblem3 () {
	var string1 = 'chocolade';
	var string2 = 'chip cookie';
	alert (string1 + ' ' + string2);
};

// PROBLEM 4
function answerProblem4 () {
	var timothyTjen = functions.constructPerson('Timothy', 'Tjen', 'Haarlem', 'Noord-Holland', '2037 JA');
	console.log (timothyTjen);
}

// PROBLEM 5
function answerProblem5() {
	var a = Math.round (Math.random() * 40);
	functions.checkValue(a);
}

// PROBLEM 6
function answerProblem6() {
	functions.countBackToZero(100);
}