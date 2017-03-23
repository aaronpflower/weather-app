require("dotenv").config();

const bodyParser = require("body-parser")
const path = require('path')
const express = require('express')
const app = express()
const passport = require('passport');
const cookieParser = require('cookie-parser')
const session = require('express-session')

const helmet = require('helmet')
const root = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.use(cookieParser());

app.use(session({
	secret: process.env.SECRET_KEY,
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

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
