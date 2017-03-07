import React, { Component, PropTypes } from 'react'
import moment from 'moment'


const CurrentWeather = (props) => {
    console.log(props)
    return props.isLoading === true
        ? <p> Loading! </p>
        : <div>
            <p>Time: {moment.unix(props.conditions.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <p>Summary: {props.conditions.summary}</p>
            <p>icon: {props.conditions.icon}</p>
            <p>nearestStormDistance: {props.conditions.nearestStormDistance}</p>
            <p>nearestStormBearing: {props.conditions.nearestStormBearing}</p>
            <p>precipIntensity: {props.conditions.precipIntensity}</p>
            <p>precipProbability: {props.conditions.precipProbability}</p>
            <p>temperature: {props.conditions.temperature}</p>
            <p>apparentTemperature: {props.conditions.apparentTemperature}</p>
            <p>dewPoint: {props.conditions.dewPoint}</p>
            <p>humidity: {props.conditions.humidity}</p>
            <p>windSpeed: {props.conditions.windSpeed}</p>
            <p>windBearing: {props.conditions.windBearing}</p>
            <p>visibility: {props.conditions.visibility}</p>
            <p>cloudCover: {props.conditions.cloudCover}</p>
            <p>pressure: {props.conditions.pressure}</p>
            <p>ozone: {props.conditions.ozone}</p>
        </div>
}

CurrentWeather.protoTypes = {
    isLoading: PropTypes.bool.isRequired,
    conditions: PropTypes.object.isRequired,
}

export default CurrentWeather