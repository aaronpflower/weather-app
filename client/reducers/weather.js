const { GET_CURRENT_WEATHER } = require('../actions/constants')
const createReducer = require('./createReducer')
const { hashHistory } = require('react-router')

const initialState = {
    conditionsId: 0,
    conditions: []
}

module.exports = createReducer(initialState, {
    [GET_CURRENT_WEATHER]: (state, action) => {
        if (!action.pending && !action.error) {
            if (window.location.hash != '#/conditions') hashHistory.push('conditions');
            return Object.assign({}, ...state, {
                conditions: [...state.conditions, { data: action.payload.data, id: initialState.conditionsId++}]
            })
        }
    }
})
