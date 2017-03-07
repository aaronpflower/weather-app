import { combineReducers } from 'redux'

const { GET_CURRENT_WEATHER, SIGN_UP, LOGIN } = require('../actions/constants')


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

function signUp(state = { user: null }, action) {
    switch (action.type) {
        case SIGN_UP:
            return Object.assign({}, state, {
                user: action.payload.data
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    currentWeather,
    signUp
})

export default rootReducer