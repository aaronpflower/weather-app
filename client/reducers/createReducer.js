module.exports = function createReducer(initialState, handlers = {}) {
	return function reducer(state = initialState, action) {
		const handler = handlers[action.type]
		console.log(handler)
		return handler ? handler(state, action) : state
	}
}
