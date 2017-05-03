const axios = require('axios')
const { LOGIN, SIGN_UP, FETCH_CURRENT_USER, LOGOUT } = require('./constants')

// TODO: sanitized data and form validation, find framework for both

const actions = {
    fetchCurrentUser() {
        const action = { type: FETCH_CURRENT_USER };
        const token = localStorage.getItem('token');
            return dispatch => {
                if (token) {
                    dispatch(Object.assign({}, action, { pending: true }))
                    return axios({
                            url: 'api/user',
                            method: 'get',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + token
                            }
                        })
                        .then(res => {
                            dispatch(Object.assign({}, action, { payload: res }))
                            return res
                        })
                        .catch(err => {
                            dispatch(Object.assign({}, action, {error: true, payload: err}))
                            throw err 
                        })
                }
                return dispatch(Object.assign({}, action, {error: true, payload: 'no user'}))
        }
    },

    signUp(email, pass) {
        const action = { type: SIGN_UP }
        return dispatch => {

            dispatch(Object.assign({}, action, { pending: true }))

            return axios.post('api/users/add', { username: email, password: pass })
                .then(res => {
                    console.log(res)
                    dispatch(Object.assign({}, action, { payload: res }))
                    return dispatch(actions.fetchCurrentUser())
                })
                .catch(err => {
                    dispatch(Object.assign({}, action, {error: true, payload: err}))
                    throw err 
                })
        }
    },

    login(email, pass) {
        const action = { type: LOGIN }
        const token = localStorage.getItem('token');
        return dispatch => {

            dispatch(Object.assign({}, action, { pending: true }))

            return axios.post('api/users/login', { username: email, password: pass })
                .then(res => {
                    dispatch(Object.assign({}, action, { payload: res }))
                    return dispatch(actions.fetchCurrentUser())
                })
                .catch(err => {
                    dispatch(Object.assign({}, action, {error: true, payload: err}))
                    throw err
                })
        }
    },

    logout() {
        const action = { type: LOGOUT }
        const token = localStorage.getItem('token');
        return dispatch => {
            if (token) {
                dispatch(Object.assign({}, action, { pending: true }))

                return axios({
                    url: 'api/users/logout',
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token
                    }
                })
                .then(res => {
                    dispatch(Object.assign({}, action, { payload: res }))
                    return res
                })
                .catch(err => {
                    dispatch(Object.assign({}, action, {error: true, payload: err}))
                    throw err
                })
            }
            return dispatch(Object.assign({}, action, { payload: 'no user'}))
        }
    }
}

module.exports = actions



