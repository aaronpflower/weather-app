import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import HomeContainer from '../containers/HomeContainer'
import Main from '../components/Main'
import SignupContainer from '../containers/SignupContainer'
import LoginContainer from '../containers/LoginContainer'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

let store = configureStore()

export default class Root extends Component {
    render() {
        return (
           <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={Main}>
                        <IndexRoute component={HomeContainer} />
                        <Route path='signup' component={SignupContainer} />
                        <Route path='login' component={LoginContainer} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}