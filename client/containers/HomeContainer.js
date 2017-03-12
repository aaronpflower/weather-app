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
            isVisible: false,
            LocationDetails: {}
        }
        this.handleUpdateUser = this.handleUpdateUser.bind(this)
        this.handleLocationSearch = this.handleLocationSearch.bind(this)
        this.handleLocationClick = this.handleLocationClick.bind(this)
        this.handleLocationClose = this.handleLocationClose.bind(this)
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
                    isVisible: true
                })
            }
        })
    }

    handleLocationClose(id) {
        return this.setState({
            LocationDetails: {},
            isVisible: false
        })
    }

    handleLocationSearch() {
        this.props.dispatch(getCurrentWeather(this.state.location))
    }

    render() {
        return (
            <Row className={classnames(styles.container)}>
                <Col xs={12} md={9} className={classnames(styles.top)}>
                    <Header 
                        searchLocation={this.handleLocationSearch}
                        location={this.state.location}
                        onUpdateLocation={this.handleUpdateUser}
                        />
                    <LocationDetails 
                        visible={this.state.isVisible}
                        conditions={this.state.LocationDetails}
                        close={this.handleLocationClose}
                    />
                </Col>
                <Col xs={12} md={3} className={classnames(styles.bottom)}>
                    <LocationsStream
                        locations={this.props.state.currentWeather.conditions}
                        onLocationClick={this.handleLocationClick} 
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


