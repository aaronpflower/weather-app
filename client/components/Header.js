import React, { Component, PropTypes } from 'react'
import { getCurrentWeather, fetchCurrentUser } from '../actions/actions'
import { connect } from 'react-redux'
import { logout } from '../actions/actions'
import { Link } from 'react-router'
import styles from './Header.less'
import Button from '../components/Button'
import classnames from 'classnames'
import fonts from '../base/fonts.less'
import LocationSearch from '../components/LocationSearch'
import mapStateToProps from '../utils/mapStateToProps'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: null,
            searchBar: null
        }
        this.updateHeader = this.updateHeader.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
    }

    handleLogout() {
        this.props.dispatch(logout())
            .then(res => {
                if (window.location.hash != '#/') hashHistory.push('/');
            })
            .catch(err => {
                this.setState({ error: 'Opps something went wrong, please try again' })
            })
    }

    updateHeader(nextProps) {
        if(nextProps.store.users.isLoggedIn) {
            this.setState({
                content: <div className={styles.row}>
                    <p className={fonts.smallText}>Welcome {nextProps.store.users.currentUser}</p>
                    <Button type='Button' innerText='Logout' onClick={this.handleLogout}/>
                </div>
            })
        } else {
            this.setState({
                content: <div className={styles.row}>
                    <Link to="/signup">
                        <Button type='Button' innerText='Signup'/>
                    </Link>
                    <Link to="/login">
                        <Button type='button' innerText='Login'/>
                    </Link>
                </div>
            })
        }
    }

    updateSearch(nextProps) {
        if (window.location.hash == '#/conditions') {
            this.setState({
                searchBar: <LocationSearch/>
            })
        } else {
            this.setState({
                searchBar: null
            })
        }
    }

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser())
    }

    componentWillReceiveProps(nextProps) {
        this.updateHeader(nextProps)
        this.updateSearch(nextProps)
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.cloud}>
                    <i className="fa fa-cloud" aria-hidden="true"></i>
                </div>
                <Link className={styles.item} to="/">
                    <h1 className={classnames(styles.item, fonts.largeText)}>Weather Wherever</h1>
                </Link>
                {this.state.searchBar}
                <div className={classnames(styles.item, styles.menu)}>
                    {this.state.content}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header)
