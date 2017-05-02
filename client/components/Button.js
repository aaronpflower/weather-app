import React, { PropTypes } from 'react'
import styles from './Button.less'

const Button = (props) => (
    <button className={styles.btn} onClick={props.onClick} type={props.type}>
        {props.innerText}
        {props.children}
    </button>
)

Button.propTypes = {
    innerText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Button