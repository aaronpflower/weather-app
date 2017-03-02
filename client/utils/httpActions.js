const axios = require('axios')

axios.get('/api/weather')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });