import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './header.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames'

const Header = (props) => (
    <Row middle="xs" className={styles.container}>
        <Col xs={9} md={6}>
            <input
                className={styles.input}
                placeholder="Enter Location"
                onChange={props.onUpdateLocation}
                value={props.location}
            />
            <button className={styles.btn} onClick={props.searchLocation} type="button">
                <i className={classnames("fa fa-search", styles.searchIcon)} aria-hidden="true"></i>
                search
            </button>
        </Col>
        <Col xs={1} className={classnames(styles.hammy)}>
            <i className={classnames("fa fa-bars")}></i>
        </Col>
        <Col xs={12} md={6} className={styles.menu}>
            <Link to='/signup'>
                <button className={styles.btn} type='button'>Signup</button>
            </Link>
            <Link to='/login'>
                <button className={styles.btn} type='button'>Login</button>
            </Link>
        </Col>
    </Row>
)

Header.propTypes = {
    searchLocation: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
    onUpdateLocation: PropTypes.func.isRequired
}

export default Header