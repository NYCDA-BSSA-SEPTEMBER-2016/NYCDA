// =MASTER
// =REQUIRES
var fs = require('fs')
var parseJSON = require('./json-file-reader')

// 
var countryName = process.argv[2]

function filterList (names, library) {
	return library.filter(function(data) {
		var a = function () {for (var i = 0; i < names.length; i++) {
			return data.name === names[i]
		}}
		return data.name === a
	})
}

// parseJSON('countries.json', function (data) {
// 	console.log(filterList(['Netherlands','Hungary'], data))
// })

function librarySearch (name, library) {
	return library.filter(function(x){return x.name === name})
	.reduce()
	// .map(function (x){return x.name})

	// result = 'Country: ' + result[0]['name'] + '\n' + 'Top Level Domain: ' + result[0]['topLevelDomain']
	// for (var i = 0; i < library.length; i++) {
	// 	if(name === library[i]['name']) {
			// var result = 'Country: ' + library[i]['name'] + '\n' + 'Top Level Domain: ' + library[i]['topLevelDomain']
	// 		return result
	// 	}
	// }	
}

parseJSON('countries.json', function (data) {
	console.log(librarySearch(countryName, data))
})

// =TEST
// =REQUIRES
// var fs = require('fs')

// // 
// var countryName = process.argv[2]

// function parseJSON (filename) {
// 	console.log(fs.readFile(filename, 'utf8', function (err,data){
// 		if(err) throw err
// 			var result = JSON.parse(data)
// 		return result
// 	})('countries.json'))
// }

// function librarySearch (name, library) {
// 	for (var i = 0; i < library.length; i++) {
// 		if(name === library[i]['name']) {
// 			var result = 'Country: ' + library[i]['name'] + '\n' + 'Top Level Domain: ' + library[i]['topLevelDomain']
// 			console.log(result)
// 		}
// 	}	
// }

// var a = function callStuff (parm1, parm2, parm3) {
// 	for (var i = 0; i < parm2.length; i++) {
// 		if(parm1 === parm2[i]['name']) {
// 			var result = 'Country: ' + parm2[i]['name'] + '\n' + 'Top Level Domain: ' + library[i]['topLevelDomain']
// 			console.log(result)
// 		}
// 	}

// }

//  // librarySearch('Netherlands',parseJSON('countries.json'))
// // a('Netherlands', parseJSON('countries.json'));

// console.log(parseJSON('countries.json'))

/*
So if I get it correctly, it use less return in functions to give their result back to a variable. Rather, I let the functions call new functions with
passed along parameters. Why...?
*/