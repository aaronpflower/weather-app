require("dotenv").config();

const bodyParser = require("body-parser")
const path = require('path')
const express = require('express')
const app = express()
// const cookieParser = require('cookie-parser')
// const session = require('express-session')

const helmet = require('helmet')
// const root = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.use(helmet())

require('./routes/routes')(app)

app.listen(port, () => {
	if(env === 'development'){
		console.info('Server running on port '+port)
	}
})