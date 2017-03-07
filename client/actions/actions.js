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

export function signUp(data) {
	const action = { type: SIGN_UP }
	return dispatch => {
		return axios.post('api/signup', { data: data })
			.then(res => dispatch(Object.assign({}, action, { payload: res })))
			.catch(error => console.log(error))
	}
}

