const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const IndexRoute = ReactRouter.IndexRoute
const hashHistory = ReactRouter.hashHistory
const Header = require('../components/Header')
const Home = require('../components/Home')

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Header}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

module.exports = routes;