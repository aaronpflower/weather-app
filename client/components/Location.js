import React, { PropTypes } from 'react'
import styles from './Location.less'

const Location = ({ onClick, text }) => (
  <li className={styles.container}
    onClick={onClick}
  >
    {text}
  </li>
)

Location.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Location