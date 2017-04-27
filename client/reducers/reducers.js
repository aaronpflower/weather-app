const { combineReducers } = require('redux')
const users = require('./users')
const weather = require('./weather')
console.log(users)
const rootReducer = combineReducers({
    users,
    weather
})

module.exports = rootReducer