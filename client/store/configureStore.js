var { createStore, applyMiddleware, compose } = require('redux')
const thunkMiddleware = require('redux-thunk').default
const rootReducer = require('../reducers/reducers')

// Support for https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware)
);

module.exports = function configureStore(preloadedState) {
    return createStore(rootReducer, preloadedState, enhancer)
}