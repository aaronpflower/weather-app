import { combineReducers } from 'redux'

const { GET_CURRENT_WEATHER } = require('../actions/constants')


function currentWeather(state = { conditions: null, isLoading: true }, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return Object.assign({}, state, {
                conditions: action.payload.data,
                isLoading: false
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    currentWeather
})

export default rootReducer