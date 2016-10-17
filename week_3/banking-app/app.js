// importing necessary modules
const fs = require('fs')

// Read the customer data json
fs.readFile(__dirname + "/customer.json", 'utf-8', (err, data) => {
	// Parse the file to a readable object.
	let parsedData = JSON.parse(data) 
	calcCompound (parsedData)
})

// function 
const calcCompound = (customer) => {
	customer.pension.endamount = {
		noInt: 		 customer.finances.startcapital,
		pessimistic: customer.finances.startcapital,
		average: 	 customer.finances.startcapital,
		optimistic:  customer.finances.startcapital
	}
	customer.pension.duration = (customer.pension.age - customer.age)

	for (var i = customer.pension.duration - 1; i >= 0; i--) {
		customer.pension.endamount.noInt  		+= 	(customer.finances.monthlyadd * 12)
		customer.pension.endamount.pessimistic  += 	(customer.finances.monthlyadd * 12)
		customer.pension.endamount.average 		+= 	(customer.finances.monthlyadd * 12)
		customer.pension.endamount.optimistic 	+= 	(customer.finances.monthlyadd * 12)

		customer.pension.endamount.pessimistic 	*= 	customer.pension.interest.pessimistic
		customer.pension.endamount.average 		*= 	customer.pension.interest.average
		customer.pension.endamount.optimistic 	*= 	customer.pension.interest.optimistic
	}
	console.log(customer.pension)
}

const roundDecimal = (number) => {
	return Math.round(number * 100) / 100
}

// {
// 	"name":"Mentor",
// 	"age": 25,
// 	"finances": {
// 		"startcapital": 1000,
// 		"monthlyadd": 100
// 	},
// 	"pension": {
// 		"age": 65,
// 		"interest": {
// 			"pessimistic": 2,
// 			"average": 4,
// 			"optimistic": 8
// 		}
// 	}
// }