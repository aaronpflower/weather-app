require("dotenv").config();

const bodyParser = require("body-parser")
const path = require('path')
const express = require('express')
const app = express()

const morgan = require('morgan');
const helmet = require('helmet')
const errorConfig = require('./server/config/error-config.js');
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());

if (process.env.NODE_ENV !== 'test') {
	app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.use(helmet())

require('./server/routes/routes')(app)

errorConfig.init(app);

app.listen(port, () => {
	if(env === 'development'){
		console.info('Server running on port '+port)
	}
})

module.exports = app;