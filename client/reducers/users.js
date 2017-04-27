const { SIGN_UP, LOGIN, FETCH_CURRENT_USER } = require('../actions/constants')
const createReducer = require('./createReducer')    

const initialState = {
    currentUser: null,
    isLoading: false
}

module.exports = createReducer(initialState, {
    [SIGN_UP]: (state, action) => {
        if (!action.pending && !action.error) {
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
    }

    // [FETCH_CURRENT_USER]: (state, action) => {
    //     return Object.assign({}, state, {
    //         currentUser: action.payload
    //     })
    // }

})
