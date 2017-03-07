require("dotenv").config();

const bodyParser = require("body-parser")
const path = require('path')
const express = require('express')
const app = express()

const helmet = require('helmet')
const root = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'
const promise = require('bluebird');

const options = {
    // Initialization Options
    promiseLib: promise
};

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/weatherapp';

const client = new pg.Client(connectionString);
client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(express.static(root))
app.use(helmet())

require('./routes/routes')(app)

app.listen(port, () => {
	if(env === 'development'){
		console.info('Server running on port '+port)
	}
})
