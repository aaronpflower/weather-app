import axios from 'axios'
const { GET_CURRENT_WEATHER } = require('./constants')

export function requestCurrentWeather() {
	return {
		type: GET_CURRENT_WEATHER
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


