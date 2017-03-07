import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import CurrentWeather from './CurrentWeatherContainer'

class HomeContainer extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        let input
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    this.props.dispatch(getCurrentWeather(input.value))
                    input.value = ''
                }}>
                    <input ref={node => {
                        input = node
                    }} />
                    <button type="submit">
                        Get Conditions
                    </button>
                </form>
                <CurrentWeather />  
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


