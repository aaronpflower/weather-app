const axios = require('axios')
const { GET_CURRENT_WEATHER } = require('./constants')

// TODO: Refactor action/reducers
const actions = {

    getCurrentWeather(data) {
        const action = { type: GET_CURRENT_WEATHER }
        return dispatch => {
            return axios.post('/api/weather', { data: data })
                .then(res => dispatch(Object.assign({}, action, { payload: res })))
                .catch(error => console.log(error))
        }
    }

}

module.exports = actions



