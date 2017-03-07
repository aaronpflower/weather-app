import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import CurrentWeather from '../components/CurrentWeather'

class CurrentWeatherContainer extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <CurrentWeather 
            isLoading={this.props.state.currentWeather.isLoading}
            conditions={this.props.state.currentWeather.conditions}/>
        )
    }
}

const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(CurrentWeatherContainer)


