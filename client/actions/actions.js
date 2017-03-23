import axios from 'axios'
const { GET_CURRENT_WEATHER, LOGIN, SIGN_UP } = require('./constants')

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

