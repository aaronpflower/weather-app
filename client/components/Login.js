import React, { Component, PropTypes } from 'react'
const { hashHistory } = require('react-router')
import { login } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import styles from './Signup.less'

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
        this.props.dispatch(login(this.state.email, this.state.password))
        .then(res => {
            if (window.location.hash != '#/conditions') hashHistory.push('conditions');
        })
        .catch(err => {
            // TODO: Do something with this error
            console.log(err)
        })
    }

    render() {
        return (
            <div className={styles.container}>
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
                    onClick={this.handleLogin}
                    type='button'
                    innerText='Login'
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(Login)
