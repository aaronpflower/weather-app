import React, { Component, PropTypes } from 'react'
const { hashHistory } = require('react-router')
import { signUp } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import styles from './Signup.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames';
import fonts from '../base/fonts.less';
import ErrorHandler from '../utils/errorHandler'
import mapStateToProps from '../utils/mapStateToProps'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        this.handleUpdateEmail = this.handleUpdateEmail.bind(this)
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }

    handleUpdatePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleUpdateEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleSignup() {
        if (this.state.password != '' && this.state.email != '') {
            this.props.dispatch(signUp(this.state.email, this.state.password))
            .then(res => {
                if (window.location.hash != '#/conditions') hashHistory.push('conditions');
            })
            .catch(err => {
                this.setState({ error: 'Opps something went wrong, please try again' })
            })
        } else {
            this.setState({ error: 'Please enter name and password' })
        }
    }

    render() {
        return (
            <Row className={classnames(styles.container)}>
                <Col xs={12} className={styles.content}>
                    <h1 className={fonts.largeText}>Create an Account!</h1>
                    <form onSubmit={this.handleSignup} className={styles.form}>
                        <Input
                            type="email"
                            placeholder="Please Enter Email"
                            onChange={this.handleUpdateEmail}
                            value={this.state.email}
                        />
                        <Input
                            type="password"
                            placeholder="Please Enter Password"
                            onChange={this.handleUpdatePassword}
                            value={this.state.password}
                        />
                        <Button
                            type='submit'
                            innerText='Create'
                        />
                        <ErrorHandler
                            text={this.state.error}
                        />
                    </form>
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps)(Signup)