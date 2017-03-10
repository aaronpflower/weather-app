import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './HomeContainer.less'

import CurrentWeather from './CurrentWeatherContainer'
import Header from '../components/Header'
import LocationsStream from '../components/LocationsStream'

class HomeContainer extends Component{
    constructor(props) {
        super(props)
    }

    handleLocationClick() {
        console.log('hi')
    }

    render() {
        let input
        return (
            <div className={styles.container}>
                <LocationsStream
                    locations={[{id: 1, completed: false, text: 'hi'}]}
                    onLocationClick={this.handleLocationClick} />
                <Header />
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


