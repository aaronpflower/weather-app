import axios from 'axios'
const { GET_CURRENT_WEATHER, LOGIN, SIGN_UP, TOGGLE_USER_FORMS, FETCH_CURRENT_USER } = require('./constants')

// TODO: Refactor action/reducers
export function fetchCurrentUser(data) {
	const action = { type: FETCH_CURRENT_USER }
	return dispatch => {
		return axios.get('/api/users/current')
			.then(res => dispatch(Object.assign({}, action, { payload: res })))
			.catch(error => console.log(error))
	}
}

export function getCurrentWeather(data) {
	const action = { type: GET_CURRENT_WEATHER }
	return dispatch => {
		return axios.post('/api/weather', { data: data })
			.then(res => dispatch(Object.assign({}, action, { payload: res })))
			.catch(error => console.log(error))
	}
}

export function signUp(email, pass) {
	const action = { type: SIGN_UP }
	return dispatch => {
		return axios.post('api/users/add', { email: email, pass: pass })
			.then(res => dispatch(Object.assign({}, action, { payload: res })))
			.catch(error => console.log(error))
	}
}

export function login(email, pass) {
	const action = { type: LOGIN }
	return dispatch => {
		return axios.post('api/users/login', { username: email, password: pass })
			.then(res => dispatch(Object.assign({}, action, { payload: res })))
			.catch(error => console.log(error))
	}
}

export function toggleUserForms(form) {
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


