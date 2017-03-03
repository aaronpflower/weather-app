import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import HomeContainer from '../containers/HomeContainer'

let store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <HomeContainer />
            </Provider>
        )
    }
}