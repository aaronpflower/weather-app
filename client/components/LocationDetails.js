import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames'
import styles from './LocationDetails.less'

const LocationDetails = (props) => {
    return props.visible === false
        ? <p> No location selected </p>
        : <Row className={classnames(props.visible && styles.visible, styles.container)}>
            <Col xs={12}>
                <i className={classnames("fa fa-times", styles.close)} aria-hidden="true" onClick={props.close}></i>
            </Col>
            <Col xs={12}>
                <p>Time: {moment.unix(props.conditions.currently.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </Col>
            <Col xs={12}>
                <p>Summary: {props.conditions.currently.summary}</p>
            </Col>
            <Col xs={12}>
                <p>icon: {props.conditions.currently.icon}</p>
            </Col>
            <Col xs={12}>
                <p>nearestStormDistance: {props.conditions.currently.nearestStormDistance}</p>
            </Col>
            <Col xs={12}>
                <p>nearestStormBearing: {props.conditions.currently.nearestStormBearing}</p>
            </Col>
            <Col xs={12}>
                <p>precipIntensity: {props.conditions.currently.precipIntensity}</p>
            </Col>
            <Col xs={12}>
                <p>precipProbability: {props.conditions.currently.precipProbability}</p>
            </Col>
            <Col xs={12}>
                <p>temperature: {props.conditions.currently.temperature}</p>
            </Col>
            <Col xs={12}>
                <p>apparentTemperature: {props.conditions.currently.apparentTemperature}</p>
            </Col>
            <Col xs={12}>
                <p>dewPoint: {props.conditions.currently.dewPoint}</p>
            </Col>
            <Col xs={12}>
                <p>humidity: {props.conditions.currently.humidity}</p>
            </Col>
            <Col xs={12}>
                <p>windSpeed: {props.conditions.currently.windSpeed}</p>
            </Col>
            <Col xs={12}>
                <p>windBearing: {props.conditions.currently.windBearing}</p>
            </Col>
            <Col xs={12}>
                <p>visibility: {props.conditions.currently.visibility}</p>
            </Col>
            <Col xs={12}>
                <p>cloudCover: {props.conditions.currently.cloudCover}</p>
            </Col>
            <Col xs={12}>
                <p>pressure: {props.conditions.currently.pressure}</p>
            </Col>
            <Col xs={12}>
                <p>ozone: {props.conditions.currently.ozone}</p>
            </Col>
        </Row>
}

LocationDetails.protoTypes = {
    conditions: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
}

export default LocationDetails