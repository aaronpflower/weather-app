import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Header.less'
import Button from '../components/Button'
import classnames from 'classnames'
import fonts from '../base/fonts.less'
import LocationSearch from '../components/LocationSearch'

const Header = function(props) {
    let search
    if (window.location.hash == '#/conditions') {
        search = <LocationSearch/>;
    } else {
        search = null;
    }
    return (
        <div className={styles.container}>
            <div className={styles.cloud}>
                <i className="fa fa-cloud" aria-hidden="true"></i>
            </div>
            <Link className={styles.item} to="/">
                <h1 className={classnames(styles.item, fonts.largeText)}>Weather Wherever</h1>
            </Link>
            {search}
            <div className={classnames(styles.item, styles.menu)}>
                
                <Link to="/signup">
                    <Button type='Button' innerText='Signup'/>
                </Link>
                <Link to="/login">
                    <Button type='button' innerText='Login'/>
                </Link>
            </div>
        </div>
    )
}

Header.propTypes = {
    // searchLocation: PropTypes.func.isRequired,
    // location: PropTypes.string.isRequired,
    // onUpdateLocation: PropTypes.func.isRequired,
    // showSearchInput: PropTypes.bool.isRequired
}

export default Header
