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

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
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
        this.props.dispatch(signUp(this.state.email, this.state.password))
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
            <Row className={classnames(styles.container)}>
                <Col xs={12} className={styles.content}>
                    <Row className={styles.innerContent}>
                        <h1 className={fonts.largeText}>Create an Account!</h1>
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
                            onClick={this.handleSignup}
                            type='button'
                            innerText='Create'
                        />
                    </Row>
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

export default connect(mapStateToProps)(Signup)