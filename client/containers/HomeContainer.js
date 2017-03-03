import React, { Component, PropTypes } from 'react'
const Home = require('../components/Home')
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'

class HomeContainer extends Component{
    constructor(props) {
        super(props)
        console.log(props)
        this.handleGetWeather = this.handleGetWeather.bind(this)
    }

    handleGetWeather() {
        const { dispatch } = this.props
        this.props.dispatch(getCurrentWeather())
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


const mapStateToProps = (state) => {
  return {
       state: console.log(state)
  };
}

export default connect(mapStateToProps)(HomeContainer)