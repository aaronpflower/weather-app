import React, { Component, PropTypes } from 'react'
const { hashHistory } = require('react-router')
import { getCurrentWeather } from '../actions/actions'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import styles from './LocationSearch.less'
import classnames from 'classnames'
import ErrorHandler from '../utils/errorHandler'

class LocationSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            error: ''
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
        if (this.state.location != '') {
            this.props.dispatch(getCurrentWeather(this.state.location))
            .then(res => {
                if (window.location.hash != '#/conditions') hashHistory.push('conditions');
            })
            .catch(err => {
                this.setState({ error: 'Opps something went wrong, please try again' })
            })
        } else {
            this.setState({
                error: 'Please enter a city or zip code'
            })
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <form onSubmit={this.handleLocationSearch}>
                    <Input
                        style={styles.input}
                        type="text"
                        placeholder="Enter Location"
                        onChange={this.handleUpdateLocation}
                        value={this.state.location}
                    />
                    <input type="submit" className={styles.submit}/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <ErrorHandler
                        text={this.state.error}
                    />
                </form>
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