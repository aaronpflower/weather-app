const { GET_CURRENT_WEATHER } = require('../actions/constants')
const createReducer = require('./createReducer')
const { hashHistory } = require('react-router')

const initialState = {
    locationId: 0,
    locations: []
}

module.exports = createReducer(initialState, {
    [GET_CURRENT_WEATHER]: (state, action) => {
        if (!action.pending && !action.error) {
            if (window.location.hash != '#/conditions') hashHistory.push('conditions');
            return Object.assign({}, ...state, {
                locations: [...state.locations, { conditions: action.payload.conditions, id: initialState.locationId++}]
            })
        }
        return state
    }
})
