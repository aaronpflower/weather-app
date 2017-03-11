import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './HomeContainer.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames'

import LocationDetails from '../components/LocationDetails'
import Header from '../components/Header'
import LocationsStream from '../components/LocationsStream'

class HomeContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            isLocationDetailsEmpty: true,
            LocationDetails: {}
        }
        this.handleUpdateUser = this.handleUpdateUser.bind(this)
        this.handleLocationSearch = this.handleLocationSearch.bind(this)
        this.handleLocationClick = this.handleLocationClick.bind(this)
    }

    handleUpdateUser(e) {
        this.setState({
            location: e.target.value
        })
    }

    handleLocationClick(id) {
        this.props.state.currentWeather.conditions.filter(item => {
            if (item.id === id) {
                return this.setState({
                    LocationDetails: item.data,
                    isLocationDetailsEmpty: false
                })
            }
        })

    }

    handleLocationSearch() {
        this.props.dispatch(getCurrentWeather(this.state.location))
    }

    render() {
        console.log(this.state.LocationDetails)
        return (
            <Row className={classnames(styles.container)}>
                <Col xs={12} md={3}>
                    <LocationsStream
                        locations={this.props.state.currentWeather.conditions}
                        onLocationClick={this.handleLocationClick} 
                    />
                </Col>
                <Col xs={12} md={9}>
                    <Header 
                        searchLocation={this.handleLocationSearch}
                        location={this.state.location}
                        onUpdateLocation={this.handleUpdateUser}
                        />
                    <LocationDetails 
                        isEmpty={this.state.isLocationDetailsEmpty}
                        conditions={this.state.LocationDetails}
                    />
                </Col>
            </Row>

        )
    }
}

const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(HomeContainer)


