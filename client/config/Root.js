import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import HomeContainer from '../containers/HomeContainer'
import Main from '../components/Main'
import ConditionsContainer from '../containers/ConditionsContainer'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

let store = configureStore()

function loggedIn() { 
    let state = store.getState();
    return state.login.user === null
}

function requireAuth(nextState, replaceState) {
    if (loggedIn()) {
        replaceState({ nextPathname: nextState.location.pathname }, '/')
    }
}

export default class Root extends Component {
    render() {
        return (
           <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={Main}>
                        <IndexRoute component={HomeContainer} />
                        <Route path='conditions' component={ConditionsContainer} onEnter={requireAuth}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}