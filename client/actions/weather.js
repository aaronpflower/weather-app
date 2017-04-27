const axios = require('axios')
const { GET_CURRENT_WEATHER } = require('./constants')

// TODO: Refactor action/reducers
const actions = {

    getCurrentWeather(location) {
        const action = { type: GET_CURRENT_WEATHER }

        return dispatch => {
            dispatch(Object.assign({}, action, { pending: true }))
            
            return axios.post('/api/weather', {location: location})
                .then(res => {
                    dispatch(Object.assign({}, action, { payload: res.data }))
                    return res
                })
                .catch(err => {
                    dispatch(Object.assign({}, action, { error: true, payload: err }))
                    throw err
                })
        }
    }

}

module.exports = actions
