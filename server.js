require("dotenv").config();

const bodyParser = require("body-parser")
const path = require('path')
const express = require('express')
const app = express()

const morgan = require('morgan');
const helmet = require('helmet')
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});

app.use(helmet())

require('./server/routes/routes')(app)

app.listen(port, () => {
	if(env === 'development'){
		console.info('Server running on port '+port)
	}
})