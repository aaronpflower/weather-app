const NodeGeocoder = require('node-geocoder')
const request = require('request-promise')

// TODO: Returns location for jibberish inputs, add autocomplete
module.exports = {
    getCurrentWeather: (req, res) => {
        let geocoder = NodeGeocoder({provider: 'google'});
        let location
        return geocoder.geocode(req.body.location)
            .then(response => {
                var options = {
                    uri: 'https://api.darksky.net/forecast/' + process.env.FORECAST_SECRET + '/' + response[0].latitude + ',' + response[0].longitude,
                    headers: {
                        'User-Agent': 'Request-Promise'
                    },
                    json: true
                };
                location = response[0].formattedAddress
                return request(options)
            })
            .then(conditons => {
                res.status(200).json({
                    status: 'success',
                    conditions: Object.assign({}, conditons, {location: location})
                })
            })
            .catch(err => {
                res.status(500).json({
                    status: 'error'
                })
            })
    }
}