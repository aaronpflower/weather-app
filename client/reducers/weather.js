const { GET_CURRENT_WEATHER } = require('../actions/constants')
const createReducer = require('./createReducer')

const initialState = {
    locationId: 0,
    locations: [],
    isLoading: false
}

module.exports = createReducer(initialState, {
    [GET_CURRENT_WEATHER]: (state, action) => {
        if (action.pending) {
            return Object.assign({}, state, { 
                isLoading: true 
            })
        }
        if (!action.pending && !action.error) {
            return Object.assign({}, ...state, {
                locations: [...state.locations, { conditions: action.payload.conditions, id: initialState.locationId++}],
                isLoading: false
            })
        }
        return state
    }
})
