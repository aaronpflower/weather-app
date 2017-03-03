import React, { Component, PropTypes } from 'react'
const Home = require('../components/Home')
import { getCurrentWeather } from '../actions/actions'

class HomeContainer extends Component{
    constructor(props) {
        super(props)
        this.handleGetWeather = this.handleGetWeather.bind(this)
    }

    handleGetWeather() {
        const { dispatch } = this.props
        console.log(dispatch)
        dispatch(getCurrentWeather())
    }

    render() {
        return (
            <div>
                <h1>Get Weather</h1>
                <input type="text" placeholder="pick city" />
                <button onClick={this.handleGetWeather} type='button'>Get Weather</button>
            </div>
        )
    }
}

export default HomeContainer