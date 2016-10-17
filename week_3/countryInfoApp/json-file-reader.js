// Part 2
// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. 
// Finally, it should call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

// - The output of the application should have the following format: 

// Country: <country name>
// Top Level Domain: <tld>


// =MASTER

const fs = require('fs')

let parseJSON = (filename, callback) => {
	fs.readFile(filename, 'utf8', function (err,data){
		if(err) throw err
			let result = JSON.parse(data)
		callback(result)
	})
}
// Future: try promises

module.exports = parseJSON