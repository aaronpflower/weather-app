import React, { Component, PropTypes } from 'react'
import { signUp } from '../actions/actions'
import { connect } from 'react-redux'

class LoginContainer extends Component{
    render() {
        return <div>
           <input
                type="email"
                placeholder="email"
                ref={input => { this.email = input; }} />
            <input
                type="password"
                placeholder="password"
                ref={input => { this.password = input; }} />
        </div>
    }
}

const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(LoginContainer)