import React, { Component, PropTypes } from 'react'
import { signUp } from '../actions/actions'
import { connect } from 'react-redux'

class SignupContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null
        }
        this.submit = this.submit.bind(this)
    }
    
    submit() {
        this.props.dispatch(signUp(this.state))
    }

    render() {
        return <div>
           <input
                type="email"
                placeholder="email"
                ref={input => { this.state.email = input; }} />
            <input
                type="password"
                placeholder="password"
                ref={input => { this.state.password = input; }} />
            <button 
                onClick={this.submit}
                type='button'>
                    Signup
            </button>
        </div>
    }
}

const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(SignupContainer)