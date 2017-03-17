import React, { PropTypes } from 'react'
import styles from './Input.less'

const Input = (props) => (
    <input 
        className={styles.input}
        placeholder={props.placeholder}
        onChange={props.onUpdateLocation}
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