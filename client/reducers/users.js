const { SIGN_UP, LOGIN, TOGGLE_USER_FORMS, FETCH_CURRENT_USER } = require('../actions/constants')
const createReducer = require('./createReducer')

const initialState = {
    currentUser: null,
    isLoading: false,
    showLogin: false, 
    showSignup: false
}

module.exports = createReducer(initialState, {
    [SIGN_UP]: (state, action) => {
        return Object.assign({}, state, {
            currentUser: action.payload.data
        })
    },

    [LOGIN]: (state, action) => {
        return Object.assign({}, state, {
            currentUser: action.payload.data
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
            currentUser: action.payload
        })
    }

})
