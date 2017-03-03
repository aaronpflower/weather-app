import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import HomeContainer from '../containers/HomeContainer'
import { Router, Route, browserHistory } from 'react-router';

let store = configureStore()

export default class Root extends Component {
    render() {
        return (
           <Provider store={store}>
                <Router history={browserHistory}>
                <Route path="/" component={HomeContainer} />
                </Router>
            </Provider>
        )
    }
}