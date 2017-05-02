import React, { PropTypes } from 'react'
import styles from './Input.less'
import classnames from 'classnames'

const Input = (props) => (
    <input 
        className={classnames(styles.input, props.style)}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        type={props.type}>
    </input>
)

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Input