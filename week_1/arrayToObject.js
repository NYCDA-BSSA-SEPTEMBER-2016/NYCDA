function arrayToObject (array1, array2) {
	var a = {};
	for (var i = 0; i < array1.length; i++) {
		a[array1[i]] = array2[i];
	}
	return a;
}

var array1 = [0,2,5];
var array3 = ['yooo','ddalkmsa', 'dklsamd'];
var array2 = ['blabla', 'hii', 'bonita'];

arrayToObject(array1,array2);

//NOTE
// dot notation for objects does not work in for-loops. Why?