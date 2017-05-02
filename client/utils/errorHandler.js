import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import error from '../base/error.less'

const ErrorHandler = (props) => (
    props.text === '' ? 
    null
    : <p className={error.text}>
        {props.text}
    </p>
)

ErrorHandler.propTypes = {
    // text: PropTypes.string.isRequired
}

export default ErrorHandler