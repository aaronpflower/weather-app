import React, { PropTypes } from 'react'
import styles from './Location.less'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Location = ({ onClick, text }) => (
  <Col xs={12} className={styles.container}
    onClick={onClick}
  >
    {text}
    <i className="fa fa-times" aria-hidden="true"></i>
  </Col>
)

Location.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Location