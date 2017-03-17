import React, { Component, PropTypes } from 'react'
import { signUp } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Signup = (props) => {
    return props.showSignup === false 
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
                onClick={props.onSignup}
                type='button'
                innerText='Create My Account'
            />
        </Col>
    </Row>
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