const React = require('react')
const PropTypes = React.PropTypes
const ReactRouter = require('react-router')
const Link = ReactRouter.Link

function Home(props) {
    return props.isLoading === true
    ? <p> Loading... </p>
    : <div>
        <h1>Get Weather</h1>
        <input type="text" placeholder="pick city" />
        <button onClick={props.onGetWeather} type='button'>Get Weather</button>
    </div>
}

Home.propTypes ={
    isLoading: PropTypes.bool.isRequired,
    currentWeather: PropTypes.array.isRequired,
    onGetWeather: PropTypes.func.isRequired
}

module.exports = Home