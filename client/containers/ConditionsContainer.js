import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './ConditionsContainer.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames'

import LocationDetails from '../components/LocationDetails'
import LocationsStream from '../components/LocationsStream'
import LocationSearch from '../components/LocationSearch'

class ConditionsContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            showLocationDetails: false,
            LocationDetails: {},
            showLocationSearch: false
        }
        this.handleLocationClick = this.handleLocationClick.bind(this)
        this.handleLocationClose = this.handleLocationClose.bind(this)
        this.handleAddLocation = this.handleAddLocation.bind(this)
    }

    handleLocationClick(e, id) {
        this.props.state.weather.locations.filter(item => {
            if (item.id === id) {
                return this.setState({
                    LocationDetails: item.conditions,
                    showLocationDetails: true
                })
            }
        })
    }

    handleLocationClose(id) {
        return this.setState({
            LocationDetails: {},
            showLocationDetails: false
        })
    }

    handleAddLocation() {
        if (this.state.showLocationSearch === false) {
            this.setState({
                showLocationSearch: true
            })
        } else {
            this.setState({
                showLocationSearch: false
            })
        }
    }

    render() {
        let search
        if (this.state.showLocationSearch) {
            search = <LocationSearch/>;
        } else {
            search = null;
        }
        return (
            <Row className={classnames(styles.container)}>
                <Col xs={12}>
                    {search}
                </Col>
                <Col xs={12} md={3} className={classnames(styles.content)}>
                    <LocationsStream
                        locations={this.props.state.weather.locations}
                        onLocationClick={this.handleLocationClick}
                        onAddLocation={this.handleAddLocation}
                    />
                </Col>
                <Col xs={12} md={7} className={classnames(styles.content)}>
                    <LocationDetails 
                        visible={this.state.showLocationDetails}
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


