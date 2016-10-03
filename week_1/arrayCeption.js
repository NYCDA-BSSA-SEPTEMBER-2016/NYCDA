var arrayInnerInner = [0,1,2,3];
var arrayInner = [0,arrayInnerInner,2,3,arrayInnerInner];
var arrayOuter = [arrayInner,1,arrayInner,3,arrayInner];

var arrayString = [' a',' b',' c',' d', ' e'];
var arrayStringContainer = [' jannetje zong',arrayString,' pietje zong',arrayString,' mona zong', arrayString];
var arrayStringMaster = ['In groep 3a:',arrayStringContainer,'In groep 3b:',arrayStringContainer,'In groep 3c:', arrayStringContainer];

function printArray (array, printWhat) {
	if (printWhat !== ('keys' || 'values') ) {
		console.log('Please tell me what to print: keys or values');
	}
	for (var i = 0; i < array.length; i++) {

		if (typeof array[i] == 'object') {
			for (var x = 0; x < array[i].length; x++) {
				
				if (typeof array[i][x] == 'object') {
					for (var y = 0; y < array[i][x].length; y++) {
						if (printWhat == 'keys') {console.log(i + '.' + x + '.' + y)}
						if (printWhat == 'values') {console.log(array[i][x][y])}
					} //einde loop3
				} // einde if2 

				else {
					if (printWhat == 'keys') {console.log(i + '.' + x)}
					if (printWhat == 'values') {console.log(array[i][x])}
				} //einde else2
			} // einde loop2
		} // einde if1

		else {
			if (printWhat == 'keys') {console.log(i)}
			if (printWhat == 'values') {console.log(array[i])}
		} // einde else1
	} // einde loop1
} // einde functie

// printArrayKeys(arrayOuter);
// printArrayValues(arrayStringMaster);
printArray(arrayStringMaster,'xx');