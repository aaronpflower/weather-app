import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import Home from '../components/Home'

// Todo: refactor to follow this example: http://redux.js.org/docs/basics/UsageWithReact.html

class HomeContainer extends Component{
    constructor(props) {
        super(props)
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
       state: state
  };
}

export default connect(mapStateToProps)(HomeContainer)


