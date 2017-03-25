import React, { Component, PropTypes } from 'react'
import { signUp, login } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './HomeContainer.less'
import classnames from 'classnames'
import Header from '../components/Header'
import Button from '../components/Button'
import fonts from '../base/fonts.less'
import { Grid, Row, Col } from 'react-flexbox-grid';

import Signup from '../components/Signup'
import Login from '../components/Login'

class HomeContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleUpdateEmail = this.handleUpdateEmail.bind(this)
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
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
        this.props.dispatch(signUp(this.state.email, this.state.password))
    }

    handleLogin() {
        this.props.dispatch(login(this.state.email, this.state.password))
    }

    render() {
        let content;
        if (this.props.state.toggleUserForms.showSignup) {
            content = <Signup
                onEmailUpdate={this.handleUpdateEmail}
                onPasswordUpdate={this.handleUpdatePassword}
                email={this.state.email}
                password={this.state.password}
                onSignup={this.handleSignup}
            />
        } else if (this.props.state.toggleUserForms.showLogin) {
            content = <Login
                onEmailUpdate={this.handleUpdateEmail}
                onPasswordUpdate={this.handleUpdatePassword}
                email={this.state.email}
                password={this.state.password}
                onLogin={this.handleLogin}
            />
        } else {
            content = <div className={styles.intro}>
                <h1 className={fonts.largeText}>Welcome to the Weather App</h1>
                <p className={fonts.mediumText}>Create an account and access current weather and forcasts from around the world</p>
            </div>
        }
        return (
            <div className={classnames(styles.container)}>
                <div className={styles.content}>
                    {content}
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


