import React, { Component, PropTypes } from 'react'
import { login } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Login = (props) => {
    console.log(props)
    return props.showLogin === false
    ? null
    : <Row>
        <Col xs={12}>
            <Input
                type="email"
                placeholder="Please Enter Email"
                onChange={props.onEmailUpdate}
                value={props.email}
            />
        </Col>
        <Col xs={12}>
            <Input
                type="password"
                placeholder="Please Enter Password"
                onChange={props.onPasswordUpdate}
                value={props.password}
            />
        </Col>
        <Col xs={12}>
            <Button 
                onClick={props.onLogin}
                type='button'
                innerText='Login'
            />
        </Col>
    </Row>
}

Login.propTypes = {
    showLogin: PropTypes.bool.isRequired,
    onEmailUpdate: PropTypes.func.isRequired,
    onPasswordUpdate: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default Login