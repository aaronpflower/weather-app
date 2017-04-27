import React, { PropTypes } from 'react'
import Location from './Location'
import styles from './LocationsStream.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import fonts from '../base/fonts.less'
import LocationsSearch from './LocationSearch'

const LocationsStream = ({ locations , onLocationClick, onAddLocation}) => (
    <Row className={styles.list}>
      <Col xs={12}>
        <h1 className={fonts.smallText}>Your Locations</h1>
        <div onClick={onAddLocation} className={styles.plus}>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
      </Col>
      {locations.map(location =>
        <Location
          key={location.id}
          text={location.conditions.location}
          onClick={(e) => onLocationClick(e, location.id)}
        />
      )}
    </Row>
)

LocationsStream.propTypes = {
  onAddLocation: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onLocationClick: PropTypes.func.isRequired
}

export default LocationsStream