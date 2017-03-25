import React, { Component, PropTypes } from 'react'
const styles = require('./Main.less');
import { getCurrentWeather, toggleUserForms } from '../actions/actions'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { Grid, Row, Col } from 'react-flexbox-grid';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            isVisible: false,
            LocationDetails: {},
            showSearchInput: true
        }
        this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
        this.handleLocationSearch = this.handleLocationSearch.bind(this)
        this.showLogin = this.showLogin.bind(this)
        this.showSignup = this.showSignup.bind(this)
    }

    handleUpdateLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    handleLocationSearch() {
        this.props.dispatch(getCurrentWeather(this.state.location))
    }

    showLogin() {
         this.props.dispatch(toggleUserForms("login"))
    }

    showSignup() {
         this.props.dispatch(toggleUserForms("signup"))
    }


    render() {
        
        return (
            <div className={styles.container}>
                <Header
                    showSignup={this.showSignup}
                    showLogin={this.showLogin}
                    searchLocation={this.handleLocationSearch}
                    location={this.state.location}
                    onUpdateLocation={this.handleUpdateLocation}
                    showSearchInput={this.state.showSearchInput}
                />
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
       state: state
  };
}

export default connect(mapStateToProps)(Main)