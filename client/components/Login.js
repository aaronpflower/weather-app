import React, { Component, PropTypes } from 'react'
import { login } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import styles from './Signup.less'

const Login = (props) => (
    <div className={styles.container}>
        <Input
            type="email"
            placeholder="Please Enter Email"
            onChange={props.onEmailUpdate}
            value={props.email}
        />
        <Input
            type="password"
            placeholder="Please Enter Password"
            onChange={props.onPasswordUpdate}
            value={props.password}
        />
        <Button 
            onClick={props.onLogin}
            type='button'
            innerText='Login'
        />
    </div>
)

Login.propTypes = {
    onEmailUpdate: PropTypes.func.isRequired,
    onPasswordUpdate: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default Login