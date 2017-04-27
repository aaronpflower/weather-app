import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './HomeContainer.less'
import classnames from 'classnames'
import Header from '../components/Header'
import Button from '../components/Button'
import fonts from '../base/fonts.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationSearch from '../components/LocationSearch';

class HomeContainer extends Component{
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className={classnames(styles.container)}>
                <div className={styles.content}>
                    <h1 className={fonts.largeText}>Welcome to the Weather</h1>
                    <p className={fonts.smallText}>Enter any city and access current weather and forcasts from around the world</p>
                    <LocationSearch />
                    <p className={fonts.smallText}>Or create an account and save you favorite places!</p>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(HomeContainer)


