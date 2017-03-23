import { combineReducers } from 'redux'

const { GET_CURRENT_WEATHER, SIGN_UP, LOGIN } = require('../actions/constants')

let conditionsId = 0

function currentWeather(state = { conditions: [], isLoading: true }, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return Object.assign({}, ...state, {
                conditions: [...state.conditions, { data: action.payload.data, id: conditionsId++}],
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

// this is sending back request data with password, oh shit!  Change how action and reducers handle shit
function login(state = { user: null }, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                user: action.payload.data
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    currentWeather,
    signUp,
    login
})

export default rootReducer