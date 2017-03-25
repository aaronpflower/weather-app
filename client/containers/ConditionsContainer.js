import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './ConditionsContainer.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames'

import LocationDetails from '../components/LocationDetails'

import LocationsStream from '../components/LocationsStream'

class ConditionsContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            isVisible: false,
            LocationDetails: {}
        }
        this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
        this.handleLocationSearch = this.handleLocationSearch.bind(this)
        this.handleLocationClick = this.handleLocationClick.bind(this)
        this.handleLocationClose = this.handleLocationClose.bind(this)
    }

    handleUpdateLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    handleLocationClick(e, id) {
        this.props.state.users.conditions.filter(item => {
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
                <Col xs={12} md={3} className={classnames(styles.stream)}>
                    <LocationsStream
                        locations={this.props.state.users.conditions}
                        onLocationClick={this.handleLocationClick} 
                    />
                </Col>
                <Col xs={12} md={9} className={classnames(styles.conditions)}>
                    <LocationDetails 
                        visible={this.state.isVisible}
                        conditions={this.state.LocationDetails}
                        close={this.handleLocationClose}
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

export default connect(mapStateToProps)(ConditionsContainer)


