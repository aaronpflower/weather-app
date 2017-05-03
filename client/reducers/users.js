const { SIGN_UP, LOGIN, FETCH_CURRENT_USER, LOGOUT } = require('../actions/constants')
const createReducer = require('./createReducer')

const initialState = {
    currentUser: null,
    isLoading: false,
    isLoggedIn: null
}

module.exports = createReducer(initialState, {
    [SIGN_UP]: (state, action) => {
        if (!action.pending && !action.error) {
            localStorage.setItem('token', action.payload.data.token);
            return Object.assign({}, state, {
                currentUser: action.payload.data
            })
        }
        return state
    },

    [LOGIN]: (state, action) => {
        if (!action.pending && !action.error) {
            localStorage.setItem('token', action.payload.data.token);
            return Object.assign({}, state, {
                currentUser: action.payload.data,
            })
        }
        return state
    },

    [LOGOUT]: (state, action) => {
        if (!action.pending && !action.error) {
            localStorage.clear();
            return Object.assign({}, state, {
                currentUser: null,
                isLoggedIn: false
            })
        }
        return state
    },

    [FETCH_CURRENT_USER]: (state, action) => {
        if (!action.pending && !action.error) {
            return Object.assign({}, state, {
                currentUser: action.payload.data.username,
                isLoggedIn: true
            })
        }
        if(action.error) {
            return Object.assign({}, state, { isLoggedIn: false, currentUser: false })
        }
        return state
    }

})
