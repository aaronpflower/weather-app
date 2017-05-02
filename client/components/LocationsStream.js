import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Location from './Location'
import styles from './LocationsStream.less'
import { Grid, Row, Col } from 'react-flexbox-grid';
import fonts from '../base/fonts.less'
import LocationsSearch from './LocationSearch'
import mapStateToProps from '../utils/mapStateToProps'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import animation from '../base/animation.less'

class LocationsStream extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		let locationItems = this.props.store.weather.locations.map(location =>
			<Location
				key={location.id}
				text={location.conditions.location}
				onClick={(e) => this.props.onLocationClick(e, location.id)}
			/>
		)

		return (
			<Row className={styles.list}>
				<Col xs={12}>
					<h1 className={fonts.smallText}>Your Locations</h1>
				</Col>
				<Col xs={12}>
					<ReactCSSTransitionGroup
						transitionName={animation}
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
						{locationItems}
					</ReactCSSTransitionGroup>
				</Col>
			</Row>
		)
	}
}

LocationsStream.propTypes = {
	onLocationClick: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(LocationsStream)