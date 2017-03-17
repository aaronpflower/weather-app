import React, { PropTypes } from 'react'
import styles from './Button.less'

const Button = (props) => (
    <button className={styles.btn} onClick={props.onClick} type='button'>
        {props.innerText}
    </button>
)

Button.propTypes = {
    innerText: PropTypes.string.isRequired
}

export default Button