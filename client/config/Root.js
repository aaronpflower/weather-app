import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import configureStore from '../store/configureStore'
import HomeContainer from '../containers/HomeContainer'
import Main from '../containers/Main'
import ConditionsContainer from '../containers/ConditionsContainer';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Signup from '../components/Signup';
import Login from '../components/Login';
import LocationSearch from '../components/LocationSearch';

let store = configureStore()

class Root extends Component {

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

export default Root