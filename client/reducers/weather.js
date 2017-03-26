const { GET_CURRENT_WEATHER } = require('../actions/constants')
const createReducer = require('./createReducer')

const initialState = {
    conditionsId: 0,
    conditions: []
}

module.exports = createReducer(initialState, {
    [GET_CURRENT_WEATHER]: (state, action) => {
        return Object.assign({}, ...state, {
            conditions: [...state.conditions, { data: action.payload.data, id: initialState.conditionsId++}],
            isLoading: false
        })
    }
})
