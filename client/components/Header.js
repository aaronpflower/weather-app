import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './header.less'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header = (props) => (
    <Row className={styles.container}>
        <input
        className={styles.input}
        placeholder="Enter Location"
        onChange={props.onUpdateLocation}
        value={props.location}
        />
        <button className={styles.btn} onClick={props.searchLocation} type="button">
            search
        </button>
        <Link to='/signup'>
            <button className={styles.btn} type='button'>Signup</button>
        </Link>
        <Link to='/login'>
            <button className={styles.btn} type='button'>Login</button>
        </Link>
        <Link to='/'>
            <button className={styles.btn} type='button'>Home</button>
        </Link>
    </Row>
)

Header.propTypes = {
    searchLocation: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
    onUpdateLocation: PropTypes.func.isRequired
}

export default Header