import React, { PropTypes } from 'react'
import Location from './Location'
import styles from './LocationsStream.less'

const LocationsStream = ({ locations , onLocationClick}) => (
  <ul className={styles.container}>
    {locations.map(location =>
      <Location
        key={location.id}
        text={location.text}
        onClick={() => onLocationClick(location.id)}
      />
    )}
  </ul>
)

LocationsStream.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onLocationClick: PropTypes.func.isRequired
}

export default LocationsStream