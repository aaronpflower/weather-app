import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Header.less'
import Button from '../components/Button'
import classnames from 'classnames'
import fonts from '../base/fonts.less'

const Header = function(props) {
    let searchInput
    if (props.showSearchInput) {
        searchInput = <div className={styles.item}>
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
    } else {
        searchInput = null;
    }
    return (
        <div className={styles.container}>
            <i className="fa fa-cloud" aria-hidden="true"></i>
            <h1 className={classnames(styles.item, fonts.largeText)}>Weather App</h1>
            {searchInput}
            <div className={classnames(styles.item, styles.menu)}>
                <Button onClick={props.showSignup} type='Button' innerText='Signup'/>
                <Button onClick={props.showLogin} type='button' innerText='Already have an account?'/>
            </div>
        </div>
    )
}

Header.propTypes = {
    searchLocation: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
    onUpdateLocation: PropTypes.func.isRequired,
    showSearchInput: PropTypes.bool.isRequired,
    showLogin: PropTypes.func.isRequired,
    showSignup: PropTypes.func.isRequired
}

export default Header
