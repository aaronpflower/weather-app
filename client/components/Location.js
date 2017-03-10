import React, { PropTypes } from 'react'

const Location = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Location.propTypes = {
  onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Location