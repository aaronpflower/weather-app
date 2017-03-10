import React, { Component, PropTypes } from 'react'
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './header.less'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let input
        return (
            <div className={styles.container}>
                <Link to='/signup'>
                    <button type='button'>Signup</button>
                </Link>
                <Link to='/login'>
                    <button type='button'>Login</button>
                </Link>
                <Link to='/'>
                    <button type='button'>Home</button>
                </Link>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    this.props.dispatch(getCurrentWeather(input.value))
                    input.value = ''
                }}>
                    <input ref={node => {
                        input = node
                    }} />
                    <button type="submit">
                        Get Conditions
                    </button>
                </form> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
}

export default connect(mapStateToProps)(Header)