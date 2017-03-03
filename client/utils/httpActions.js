const axios = require('axios')

const helpers = {
    getCurrentWeather: function() {
        return axios.get('/api/weather')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

module.exports = helpers