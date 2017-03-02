require("dotenv").config();

const bodyParser = require("body-parser")
const path = require('path')
const express = require('express')
const app = express()

const request = require('request-promise')
const helmet = require('helmet')
const root = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(express.static(root))
app.use(helmet())

app.get('/api/weather', function(req, res) {
    var options = {
		url: 'https://api.darksky.net/forecast/' + proccess.env.FORECAST_SECRET + '/37.8267,-122.4233',
        method: 'GET',
    }
	console.log(options)
	request(options)
		.then(function(response) {
			var totalItems = JSON.parse(response)
			res.send({res: res})
		})
		.catch(function(e) {
			res.send(e)
		})
})

app.listen(port, () => {
	if(env === 'development'){
		console.info('Server running on port '+port)
	}
})
