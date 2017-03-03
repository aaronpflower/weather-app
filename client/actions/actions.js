const { GET_CURRENT_WEATHER } = require('./constants')

export function requestCurrentWeather() {
	return {
		type: GET_CURRENT_WEATHER
	}
}

export function getCurrentWeather() {
	return dispatch => {
	dispatch(requestCurrentWeather())
	return axios.get('/api/weather')
		.then(response => console.log(response))
		.catch(error => console.log(error))
	}
}


