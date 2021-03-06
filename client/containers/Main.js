import React, { Component, PropTypes } from 'react'
const styles = require('./Main.less');
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { Grid, Row, Col } from 'react-flexbox-grid';
import fonts from '../base/fonts.less'
import mapStateToProps from '../utils/mapStateToProps'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row className={styles.container}>
                <Col xs={12}>
                    <Header/>
                </Col>
                <Col xs={12} className={styles.wrapper}>
                    {this.props.children}
                </Col>
                <Col xs={12}>
                    <footer className={styles.footer}>
                        <span className={fonts.smallText}>Copyright © 2017 Mr. Flower Dev</span>
                    </footer>
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps)(Main)