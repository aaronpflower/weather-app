import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './header.less'
import Button from '../components/Button'
// import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames'

// http://codepen.io/chriscoyier/pen/FAbpm
const Header = (props) => (
    <div className={styles.container}>
        <div className={styles.item}>
            <input
                className={styles.input}
                placeholder="Enter Location"
                onChange={props.onUpdateLocation}
                value={props.location}
            />
            <Button onClick={props.searchLocation} type="button" innerText='Search'>
                <i className={classnames("fa fa-search", styles.searchIcon)} aria-hidden="true"></i>
            </Button>
        </div>
        <div className={classnames(styles.item, styles.hammy)}>
            <i className={classnames("fa fa-bars")}></i>
        </div>
        <div className={classnames(styles.menu)}>
            <Link to='/signup'>
                <Button type='button' innerText='Signup' />
            </Link>
            <Link to='/login'>
                <Button type='button' innerText='Login' />
            </Link>
        </div>
    </div>
)

Header.propTypes = {
    searchLocation: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
    onUpdateLocation: PropTypes.func.isRequired
}

export default Header