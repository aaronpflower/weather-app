const axios = require('axios')
const { LOGIN, SIGN_UP, TOGGLE_USER_FORMS, FETCH_CURRENT_USER } = require('./constants')

// TODO: Add common http action
// TODO: sanitized data and form validation, find framework for both

const actions = {
    // fetchCurrentUser(data) {
    //     const action = { type: FETCH_CURRENT_USER }
    //     return dispatch => {
    //         return axios.get('api/users/current')
    //             .then(res => dispatch(Object.assign({}, action, { payload: res })))
    //             .catch(error => console.log(error))
    //     }
    // },

    signUp(email, pass) {
        const action = { type: SIGN_UP }
        return dispatch => {

            dispatch(Object.assign({}, action, { pending: true }))

            return axios.post('api/users/add', { username: email, password: pass })
                .then(res => {
                    dispatch(Object.assign({}, action, { payload: res }))
                    return res
                })
                .catch(err => {
                    dispatch(Object.assign({}, action, {error: true, payload: err}))
                    throw err 
                })
        }
    },

    login(email, pass) {
        const action = { type: LOGIN }
        return dispatch => {

            dispatch(Object.assign({}, action, { pending: true }))

            return axios.post('api/users/login', { username: email, password: pass })
                .then(res => {
                    dispatch(Object.assign({}, action, { payload: res }))
                    return res
                })
                .catch(err => {
                    dispatch(Object.assign({}, action, {error: true, payload: err}))
                    throw err
                })
        }
    }
}

module.exports = actions



