import { combineReducers } from 'redux'

const { GET_CURRENT_WEATHER } = require('../actions/constants')


function currentWeather(state = { conditions: null }, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return Object.assign({}, state, {
                conditions: action
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    currentWeather
})

export default rootReducer