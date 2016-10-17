const express = require('express')
const app = express()

app.get('/', (request,response) => {
	response.send('Hello Timothy, it is so good to see you in the browser!')
})

app.listen(8000, () => {
	console.log('Example app listening on port 2000!')
})