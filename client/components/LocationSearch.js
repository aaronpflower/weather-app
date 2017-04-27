import React, { Component, PropTypes } from 'react'
const { hashHistory } = require('react-router')
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import styles from './LocationSearch.less'
import classnames from 'classnames'

class LocationSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: ''
        }
        this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
        this.handleLocationSearch = this.handleLocationSearch.bind(this)
    }

    handleUpdateLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    handleLocationSearch() {
        this.props.dispatch(getCurrentWeather(this.state.location))
        .then(res => {
            if (window.location.hash != '#/conditions') hashHistory.push('conditions');
        })
        .catch(err => {
            // TODO: Do something with this error
            console.log(err)
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <Input
                    type="text"
                    placeholder="Enter Location"
                    onChange={this.handleUpdateLocation}
                    value={this.state.location}
                />
                <Button onClick={this.handleLocationSearch} type="button" innerText='Search'>
                    <i className={classnames("fa fa-search", styles.searchIcon)} aria-hidden="true"></i>
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(LocationSearch)