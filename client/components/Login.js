import React, { Component, PropTypes } from 'react'
const { hashHistory } = require('react-router')
import { login } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import styles from './Signup.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames';
import fonts from '../base/fonts.less';
import ErrorHandler from '../utils/errorHandler'


class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleUpdateEmail = this.handleUpdateEmail.bind(this)
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
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

    handleLogin() {
        if (this.state.password != '' && this.state.email != '') {
            this.props.dispatch(login(this.state.email, this.state.password))
            .then(res => {
                if (window.location.hash != '#/conditions') hashHistory.push('conditions');
            })
            .catch(err => {
                this.setState({ error: 'Opps something went wrong, please try again' })
            })
        } else {
            this.setState({ error: 'Make sure you entered your correct username and password' })
        }
    }

    render() {
        return (
            <Row className={classnames(styles.container)}>
                <Col xs={12} className={styles.content}>
                    <h1 className={fonts.largeText}>Login to your account</h1>
                    <form onSubmit={this.handleLogin} className={styles.form}>
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
                            innerText='Login'
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


const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(Login)
