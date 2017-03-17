import React, { Component, PropTypes } from 'react'
import { signUp } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import styles from './Signup.less'

const Signup = (props) => {
    return props.showSignup === false 
    ? null 
    : <div className={styles.container}>
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
            onClick={props.onSignup}
            type='button'
            innerText='Create My Account'
        />
    </div>
}

Signup.propTypes = {
    showSignup: PropTypes.bool.isRequired,
    onEmailUpdate: PropTypes.func.isRequired,
    onPasswordUpdate: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onSignup: PropTypes.func.isRequired
}

export default Signup