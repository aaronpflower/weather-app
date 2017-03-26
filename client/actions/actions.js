const users = require('./users')
const weather = require('./weather')

module.exports = {
	...users,
	...weather
}
