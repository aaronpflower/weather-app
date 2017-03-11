import React, { PropTypes } from 'react'
import Location from './Location'
import styles from './LocationsStream.less'
import fonts from '../base/fonts.less'

const LocationsStream = ({ locations , onLocationClick}) => (
  <div className={styles.container}>
    <h1 className={fonts.largeText}>Your Locations</h1>
    <ul className={styles.list}>
      {locations.map(location =>
        <Location
          key={location.id}
          text={location.data.timezone}
          onClick={() => onLocationClick(location.id)}
        />
      )}
    </ul>
  </div>
)

LocationsStream.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onLocationClick: PropTypes.func.isRequired
}

export default LocationsStream