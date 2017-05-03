import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './loader.less'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Loader = (props) => (
    <div className={styles.loader}>
        <svg className={styles.circular} viewBox="25 25 50 50">
        <circle className={styles.path} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
    </div>
)

export default Loader


