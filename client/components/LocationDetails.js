import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames'
import styles from './LocationDetails.less'

const LocationDetails = (props) => {
    console.log(props)
    return props.isEmpty === true
        ? <p> No location selected </p>
        : <Row className={styles.container}>
            <p>Time: {moment.unix(props.conditions.currently.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <p>Summary: {props.conditions.currently.summary}</p>
            <p>icon: {props.conditions.currently.icon}</p>
            <p>nearestStormDistance: {props.conditions.currently.nearestStormDistance}</p>
            <p>nearestStormBearing: {props.conditions.currently.nearestStormBearing}</p>
            <p>precipIntensity: {props.conditions.currently.precipIntensity}</p>
            <p>precipProbability: {props.conditions.currently.precipProbability}</p>
            <p>temperature: {props.conditions.currently.temperature}</p>
            <p>apparentTemperature: {props.conditions.currently.apparentTemperature}</p>
            <p>dewPoint: {props.conditions.currently.dewPoint}</p>
            <p>humidity: {props.conditions.currently.humidity}</p>
            <p>windSpeed: {props.conditions.currently.windSpeed}</p>
            <p>windBearing: {props.conditions.currently.windBearing}</p>
            <p>visibility: {props.conditions.currently.visibility}</p>
            <p>cloudCover: {props.conditions.currently.cloudCover}</p>
            <p>pressure: {props.conditions.currently.pressure}</p>
            <p>ozone: {props.conditions.currently.ozone}</p>
        </Row>
}

LocationDetails.protoTypes = {
    isEmpty: PropTypes.bool.isRequired,
    conditions: PropTypes.object.isRequired,
}

export default LocationDetails