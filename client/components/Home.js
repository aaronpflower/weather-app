const React = require('react')
const ReactRouter = require('react-router')
const Link = ReactRouter.Link

const Home = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Get Weather</h1>
                <input type="text" placeholder="pick city" />
                <Link to ='/playerOne'>
                    <button type='button'>Get Started</button>
                </Link>
            </div>
        )
    }
})

module.exports = Home