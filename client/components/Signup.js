import React, { Component, PropTypes } from 'react'
import { signUp } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import styles from './Signup.less'

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
                    onClick={this.handleSignup}
                    type='button'
                    innerText='Create My Account'
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

export default connect(mapStateToProps)(Signup)