const { GET_CURRENT_WEATHER, SIGN_UP, LOGIN, TOGGLE_USER_FORMS, FETCH_CURRENT_USER } = require('../actions/constants')
const createReducer = require('./createReducer')

const initialState = {
    conditionsId: 0,
    conditions: [],
    isLoading: false,
    showLogin: false, 
    showSignup: false
}

module.exports = createReducer(initialState, {
    [GET_CURRENT_WEATHER]: (state, action) => {
        return Object.assign({}, ...state, {
            conditions: [...state.conditions, { data: action.payload.data, id: initialState.conditionsId++}],
            isLoading: false
        })
    },

    [SIGN_UP]: (state, action) => {
        return Object.assign({}, state, {
            user: action.payload.data
        })
    },

    [LOGIN]: (state, action) => {
        return Object.assign({}, state, {
            user: action.payload.data
        })
    },

    [TOGGLE_USER_FORMS]: (state, action) => {
        return Object.assign({}, state, {
            showLogin: action.payload.showLogin,
            showSignup: action.payload.showSignup
        })
    },

    [FETCH_CURRENT_USER]: (state, action) => {
        return Object.assign({}, state, {
            user: action.payload
        })
    }

})
