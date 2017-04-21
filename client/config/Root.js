import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { fetchCurrentUser } from '../actions/actions'
import configureStore from '../store/configureStore'
import HomeContainer from '../containers/HomeContainer'
import Main from '../containers/Main'
import ConditionsContainer from '../containers/ConditionsContainer'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

let store = configureStore()

// store.dispatch(fetchCurrentUser())

function loggedIn() { 
    let token = localStorage.getItem('token')
    return token === null; 
}

function requireAuth(nextState, replaceState) {
    if (loggedIn()) {
        replaceState({ nextPathname: nextState.location.pathname }, '/')
    }
}

// On route changes how do you add skeleton screens like for linkedin?
export default class Root extends Component {
    render() {
        return (
           <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={Main}>
                        <IndexRoute component={HomeContainer} />
                        <Route path='conditions' onEnter={requireAuth} component={ConditionsContainer}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}