// =MASTER

// =REQUIRES
const fs = require('fs')
let parseJSON = require('./json-file-reader')

let countryNames = [];
for (let i = 2; i < process.argv.length; i++) {
	countryNames.push(process.argv[i])
}

let librarySearches = (names, library) => {
	if (names[0] === undefined) return 'Error: no country names. Please input country names.'

	let x = 0
	let results = []
	check(names[x],library)
	
	function check (name, library) {
		// Stop condition, log trigger & data to right format
		let match = false
		if (name === undefined) return
		name = name.charAt(0).toUpperCase() + name.slice(1)

		// Search library
		for (let i = 0; i < library.length; i++) {
			if(name === library[i]['name']) {
				let result = 'Country: ' + library[i]['name'] + '\n' + 'Top Level Domain: ' + library[i]['topLevelDomain']
				results.push(result)
				match = true
			}
		}
		if (match === false) results.push('Error: invalid country name. Please input a valid country name.')
		// Call recursively until no more names. 
		check(names[++x], library)
	}
	return results
}
// Future: use proper error handling

// Future: try Array.forEach()
let printArrayContents = (array) => {
	for (let i = 0; i < array.length; i++) {
		console.log(i + '. ' + array[i])
	}
}

parseJSON('countries.json', function (data) {
	printArrayContents(librarySearches(countryNames, data))
})