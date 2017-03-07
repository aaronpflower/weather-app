const NodeGeocoder = require('node-geocoder')
const request = require('request-promise')

module.exports = {
    getCurrentWeather: (req, res) => {
        let geocoder = NodeGeocoder({provider: 'google'});

        geocoder.geocode(req.body.data)
            .then(function(response) {
                var options = {
                    uri: 'https://api.darksky.net/forecast/' + process.env.FORECAST_SECRET + '/' + response[0].latitude + ',' + response[0].longitude,
                    headers: {
                        'User-Agent': 'Request-Promise'
                    },
                    json: true
                };
                request(options)
                    .then(function(data) {
                        res.send(data.currently)
                    })
                    .catch(function(e) {
                        res.send(e)
                    })			
            })
            .catch(function(err) {
                console.log(err);
        });
    },

    // signUp: (req, res) => {
    //     res.send('hi')
    // }
}