const axios = require('axios')
const { LOGIN, SIGN_UP, TOGGLE_USER_FORMS, FETCH_CURRENT_USER } = require('./constants')

// TODO: Refactor action/reducers
const actions = {
    fetchCurrentUser(data) {
        const action = { type: FETCH_CURRENT_USER }
        return dispatch => {
            return axios.get('/api/users/current')
                .then(res => dispatch(Object.assign({}, action, { payload: res })))
                .catch(error => console.log(error))
        }
    },

    signUp(email, pass) {
        const action = { type: SIGN_UP }
        return dispatch => {
            return axios.post('api/users/add', { username: email, password: pass })
                .then(res => dispatch(Object.assign({}, action, { payload: res })))
                .catch(error => console.log(error))
        }
    },

    login(email, pass) {
        const action = { type: LOGIN }
        return dispatch => {
            return axios.post('api/users/login', { username: email, password: pass })
                .then(res => dispatch(Object.assign({}, action, { payload: res })))
                .catch(error => console.log(error))
        }
    },

    toggleUserForms(form) {
        const action = { type: TOGGLE_USER_FORMS }
        return dispatch => {
            if (form === 'login') {
                dispatch(Object.assign({}, action, { payload: { showLogin: true, showSignup: false } }))
            } else if (form === 'signup') {
                dispatch(Object.assign({}, action, { payload: { showLogin: false, showSignup: true } }))
            } else {
                dispatch(Object.assign({}, action, { payload: { showLogin: false, showSignup: false } }))
            }
        }
    }
}

module.exports = actions



