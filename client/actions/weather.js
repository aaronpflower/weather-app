const axios = require('axios')
const { GET_CURRENT_WEATHER } = require('./constants')

// TODO: Refactor action/reducers
const actions = {

    getCurrentWeather(location) {
        const action = { type: GET_CURRENT_WEATHER }
        return dispatch => {
            return axios.post('/api/weather', { location: location })
                .then(res => dispatch(Object.assign({}, action, { payload: res })))
                .catch(error => console.log(error))
        }
    }

}

module.exports = actions



