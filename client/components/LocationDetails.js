import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames'
import styles from './LocationDetails.less'
import fonts from '../base/fonts.less';

const LocationDetails = (props) => {
    return props.visible === false
        ? <p> No location selected </p>
        : <Row className={classnames(props.visible, styles.container)}>
            <Col xs={12}>
                <i className={classnames("fa fa-times", styles.close)} aria-hidden="true" onClick={props.close}></i>
            </Col>
            <Col xs={12}>
                <p className={fonts.smallText}>{moment.unix(props.conditions.currently.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </Col>
            <Col xs={12}>
                <p className={fonts.largeText}>{props.conditions.currently.temperature}°</p>
            </Col>
            <Col xs={12}>
                <p className={fonts.smallText}>icon: {props.conditions.currently.icon}</p>
            </Col>
            <Col xs={12}>
                <p className={fonts.smallText}>dewPoint: {props.conditions.currently.dewPoint}°</p>
            </Col>
            <Col xs={12}>
                <p className={fonts.smallText}>humidity: {Math.floor(props.conditions.currently.humidity * 100)}%</p>
            </Col>
            <Col xs={12}>
                <p className={fonts.smallText}>windSpeed: {props.conditions.currently.windSpeed}MPH</p>
            </Col>
            <Col xs={12}>
                <p className={fonts.smallText}>visibility: {props.conditions.currently.visibility} miles</p>
            </Col>
            <Col xs={12}>
                <p className={fonts.smallText}>pressure: {props.conditions.currently.pressure}MB</p>
            </Col>
        </Row>
}

LocationDetails.protoTypes = {
    conditions: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
}

export default LocationDetails