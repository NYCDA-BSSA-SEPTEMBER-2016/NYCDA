// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

// find as far away from others as possible on a 1d array bord;
// array of booleans, true = seated, false = not seated;
// find furtherest not seated from the seated;

// let's start simple, 3 seats in a row;

var seatsOccupied = [true, true, true, false, false, true, false, true, false, false, false, true, false, true, true, false, true, true, true];

// make a loop
// iterate the array
// only check false seats
// compare to nearby cells until you find furthest true;
// how to find furthest true? .....
// if steps away is smaller than best value, replace best value;
// return best value when done.

function findIsolatedSeat (seatsArray) {
	// declare variables
	var winner = 0;
	var winnerIndex = 0;

	//first loop to find all unoccupied seats
	for (var i = 0; i < seatsArray.length; i++) {
		// per iteration variable declarations, resets on new loop iteration.
		var seatsAway = 0;
		var closestTrue = Infinity;

		if (seatsArray[i] === false) {	
			// console.log('element ' + [i] + " = false")
			// inner loop to compare the current false value to rest of values
			for (var x = 0; x < seatsArray.length; x++) {
				if (seatsArray[x] === true) {
					// console.log('element ' + [x] + " = true")
					// update seatsAway compared to check element. Make it a positive number if it was negative.
					seatsAway = i - x;
					if (seatsAway < 0) {
						seatsAway *= -1;
					}
					// console.log(seatsAway);
					// set closestTrue to smallest of the two.
					if (seatsAway < closestTrue) {
						closestTrue = seatsAway;	
					}
					// console.log(closestTrue)
					//console.log('Closests occupied seat is ' + closestTrue + ' seats away.');
				}
			}
			// if closestTrue of the checked seat is the new winner, then change winner. Only if checked seat was false though.
			if (closestTrue > winner) {
				winner = closestTrue;
				winnerIndex =[i];
			}
			// console.log(winner);
		}
	}
	// counting from 1;
	console.log ('The best seat of John is seat ' + (parseInt(winnerIndex) + 1) + '. It is ' + winner + ' seats from the closest occupied seat.' )
}

findIsolatedSeat(seatsOccupied);