import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { fetchCurrentUser } from '../actions/actions'
import configureStore from '../store/configureStore'
import HomeContainer from '../containers/HomeContainer'
import Main from '../containers/Main'
import ConditionsContainer from '../containers/ConditionsContainer';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Signup from '../components/Signup';
import Login from '../components/Login';
import LocationSearch from '../components/LocationSearch';

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

export default class Root extends Component {
    render() {
        return (
           <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={Main}>
                        <IndexRoute component={HomeContainer} />
                        <Route path='conditions' component={ConditionsContainer}/>
                        <Route path='signup' component={Signup}/>
                        <Route path='login' component={Login} />
                        <Route path='location-search' component={LocationSearch}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}