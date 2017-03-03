const axios = require('axios')
const { GET_CURRENT_WEATHER } = require('./constants')

export function requestCurrentWeather() {
	return {
		type: GET_CURRENT_WEATHER
	}
}

export function getCurrentWeather() {
	const action = { type: GET_CURRENT_WEATHER }
	return dispatch => {
	return axios.get('/api/weather')
      	.then(res => dispatch(Object.assign({}, action, { payload: res })))
		.catch(error => console.log(error))
	}
}


